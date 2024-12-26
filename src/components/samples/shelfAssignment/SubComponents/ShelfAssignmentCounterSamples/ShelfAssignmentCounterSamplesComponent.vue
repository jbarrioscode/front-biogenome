<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel, CFormSelect} from "@coreui/vue/dist/esm/components/form";
import {onMounted, ref} from "vue";
import Swal from 'sweetalert2'
import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {useBioBankLocationStore} from "@/stores/sampleType/biobankLocationStore.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import SampleTypeService from "@/services/sampleTypes/SampleType.service.ts";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";
import * as XLSX from "xlsx";

/* Importing Stores */
const userStore = useUserStore()
const bioBankStore = useBioBankLocationStore()

const counterSampleCode = ref("")
const listGroupData = ref([])
const isSavingData = ref(false);

// Estado reactivo para los selects
const locations = ref([])
const selectedLocation = ref("");
const selectedShelf = ref("");
const selectedBox = ref("");
const selectedPosition = ref("");
const shelves = ref([]);
const boxes = ref([]);
const positions = ref([]);
const isLoadingReport = ref(false)
const dataReport = ref([])

const exportToExcel = () => {
  let data = XLSX.utils.json_to_sheet(dataReport.value)
  const workbook = XLSX.utils.book_new()
  const filename = 'ubicacionesUtilizadas'
  XLSX.utils.book_append_sheet(workbook, data, filename)
  XLSX.writeFile(workbook, `${filename}.xlsx`)
}

// Función para manejar el cambio en el selector de ubicación
const handleLocationChange = () => {
  const location = locations.value.find((loc) => loc.id === selectedLocation.value);
  shelves.value = location?.estantes || [];
  selectedShelf.value = "";
  boxes.value = [];
  selectedBox.value = "";
};

// Función para manejar el cambio en el selector de estante
const handleShelfChange = () => {
  const shelf = shelves.value.find((shelf) => shelf.id === selectedShelf.value);
  boxes.value = shelf?.caja || [];
  selectedBox.value = "";
};

const handleBoxChange = () => {
  const box = boxes.value.find((box) => box.descripcion === selectedBox.value);
  positions.value = box?.ubicaciones || [];
  selectedPosition.value = "";
}

const isValidCode = (code: string) => {
  //const regex = /^[A-Z0-9]{1,9}-\d{1,2}-CS$/;
  const regex = /^[a-z0-9]{1,9}-\d{1,2}-cs$/i;
  return regex.test(code);
}

// Función para validar duplicados
function isDuplicateSample(codigo: string): boolean {
  return listGroupData.value.some((sample) => sample.codigo_muestra === codigo);
}
function isDuplicatePosition(id_position: number): boolean {
  return listGroupData.value.some((sample) => sample.ubicacion_id === id_position);
}

const addSampleToTempArray = () => {

  const sample_code = counterSampleCode.value.toUpperCase();
  const id_position = parseInt(selectedPosition.value);

  if (isDuplicateSample(sample_code)) {
    Swal.fire(
        "Duplicado",
        `El código de muestra "${sample_code}" ya existe.`,
        "warning"
    );
    return;
  }
  if (isDuplicatePosition(id_position)) {
    Swal.fire(
        "Duplicado",
        `La posición ya ha sido tomada por alguna CONTRAMUESTRA`,
        "warning"
    );
    return;
  }

  if (!isValidCode(sample_code)) {
    Swal.fire({
      icon: "warning",
      title: "Error!",
      text: 'La muestra no cumple con el patron Requerido' + '\n' + 'CODIGO_MUESTRA - SEDE - CS'
    })
    return
  }

  if (!selectedLocation.value || !selectedShelf.value || !selectedBox.value) {
    Swal.fire({
      icon: "warning",
      title: "Error!",
      text: 'Debe seleccionar BODEGA -- ESTANTE -- CAJA'
    })
    return
  }

  const sample_location_name = positions.value.find((loc) => loc.id === selectedPosition.value)

  listGroupData.value.push({
    codigo_muestra: counterSampleCode.value.toUpperCase().trim(),
    ubicacion_id: selectedPosition.value,
    sample_location: sample_location_name.fila+''+sample_location_name.columna || "N/A"
  })

  clearFieldsAfterArrayInsertion()

}

const assignSampleToShelf = async () => {

  isSavingData.value = true;

  try {

    const payload = {
      asignaciones: {...listGroupData.value},
      user_id: userStore.id,
    }
    const response = await SampleTypeService.saveCounterSamplesLocationInBioBank(payload)

    if (response.data.statusCode !== 201) {
      await Swal.fire({
        icon: "error",
        title: "Oooops!",
        text: response.data.message,
      })
      return
    }

    await Swal.fire({
      icon: "success",
      title: response.data.message,
    })
    await getBioBankLocations()
    clearFields()
    clearDataArray()

  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: error.message,
    })
    console.error("Error al asginar las ubicaciones:", error)
  } finally {
    isSavingData.value = false
  }
}

function clearFieldsAfterArrayInsertion() {
  counterSampleCode.value = ""
}

function clearFields() {
  counterSampleCode.value = ""
  selectedLocation.value = ""
  selectedShelf.value = ""
  selectedBox.value = ""
  selectedPosition.value = ""
  locations.value = []
  shelves.value = []
  boxes.value = []
  positions.value = []
}
function clearDataArray() {
  listGroupData.value = []
}

function removeItemFromArray(index: number) {
  listGroupData.value.splice(index, 1)
}

const getBioBankLocations = async () => {
  try {
    await bioBankStore.fetchBioBankLocations()
    locations.value = bioBankStore.bioBankLocations
  } catch (error) {
    console.error("Error al obtener las ubicaciones:", error);
  }
}

const downloadUsedPositionsReport = async () => {
  isLoadingReport.value = true
  try {
    const response = await SampleTypeService.downloadUsedPositionsReport()
    if (response.data.statusCode !== 200) {
      await Swal.fire({
        icon: "warning",
        title: "Error!",
        text: response.data.message,
      })
    }

    dataReport.value = response.data.data
    exportToExcel()
    await Swal.fire({
      icon: "success",
      title: "Reporte Generado!",
      text: response.data.message,
    })

  } catch (error) {
    console.error("Error al ejecutar el REPORTE de Ubicaciones:");
  } finally {
    isLoadingReport.value = false
  }
}

onMounted(() => {
  getBioBankLocations()
})

</script>

<template>

  <CRow>

    <CCol md="7">

      <CRow class="mb-3">
        <CCol>
          <CCard>
            <CCardBody>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <CButton
                    color="success"
                    variant="outline"
                    shape="rounded-pill"
                    size="sm"
                    @click="downloadUsedPositionsReport"
                    :disabled="isLoadingReport"
                >
                  <CSpinner as="span" size="sm" aria-hidden="true" v-if="isLoadingReport"/>
                  <font-awesome-icon :icon="['fas', 'file-arrow-down']" v-else />
                  {{ isLoadingReport ? 'Generando Reporte...' : 'Reporte Ubicaciones Ocupadas' }}
                </CButton>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow class="mb-3">
        <CCol>
          <CCard>
            <CCardBody>

              <CForm autoComplete="off" class="g-3" @submit.prevent="addSampleToTempArray">

                <CRow class="mb-2">
                  <CCol>
                    <CFormLabel for="inputCounterSampleCode">Código de la CONTRAMUESTRA:</CFormLabel>
                    <CFormInput
                        placeholder="Escriba acá el código de la CONTRAMUESTRA"
                        id="inputCounterSampleCode"
                        v-model="counterSampleCode"
                    />
                  </CCol>
                </CRow>

                <CRow
                    :class="`${ !selectedLocation || !selectedShelf || !selectedBox ? 'mb-4' : 'mb-2'}`"
                >
                  <CCol>
                    <label class="form-label" for="location-select">Ubicación:</label>
                    <select class="form-select" id="location-select" v-model="selectedLocation"
                            @change="handleLocationChange">
                      <option value="">Selecciona una ubicación</option>
                      <option v-for="location in locations" :key="location.id" :value="location.id">
                        {{ location.nombre }}
                      </option>
                    </select>
                  </CCol>
                </CRow>

                <CRow class="mb-2" v-if="shelves.length">
                  <CCol>
                    <label class="form-label" for="shelf-select">Nevera:</label>
                    <select class="form-select" id="shelf-select" v-model="selectedShelf" @change="handleShelfChange">
                      <option value="">Selecciona la nevera</option>
                      <option v-for="shelf in shelves" :key="shelf.id" :value="shelf.id">
                        {{ shelf.nombre }}
                      </option>
                    </select>
                  </CCol>
                </CRow>

                <CRow :class="`${ selectedLocation && selectedShelf && selectedBox ? 'mb-4' : 'mb-2'}`"
                      v-if="boxes.length"
                >
                  <CCol>
                    <label class="form-label" for="box-select">Caja:</label>
                    <select class="form-select" id="box-select" v-model="selectedBox" @change="handleBoxChange">
                      <option value="">Selecciona una caja</option>
                      <option v-for="box in boxes" :key="box.id" :value="box.descripcion">
                        {{ box.descripcion }}
                      </option>
                    </select>
                  </CCol>
                </CRow>

                <CRow :class="`${ selectedLocation && selectedShelf && selectedBox ? 'mb-4' : 'mb-2'}`"
                      v-if="positions.length"
                >
                  <CCol>
                    <label class="form-label" for="box-select">Posición:</label>
                    <select class="form-select" id="box-select" v-model="selectedPosition">
                      <option value="">Selecciona una caja</option>
                      <option v-for="position in positions" :key="position.id" :value="position.id">
                        {{ position.fila + '' + position.columna }}
                      </option>
                    </select>
                  </CCol>
                </CRow>

                <CRow>
                  <CCol>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                      <CButton
                          size="sm"
                          color="warning"
                          shape="rounded-pill"
                          @click="clearFields"
                      >
                        <font-awesome-icon :icon="['fas', 'times']" />
                        Limpiar
                      </CButton>
                      <CButton
                          type="submit"
                          size="sm"
                          color="primary"
                          shape="rounded-pill"
                          :disabled="!counterSampleCode || !selectedLocation || !selectedShelf || !selectedBox"
                      >
                        <font-awesome-icon :icon="['fas', 'plus']" />
                        Agregar CONTRAMUESTRA
                      </CButton>
                    </div>
                  </CCol>
                </CRow>

              </CForm>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CCol>

    <!-- Counter Samples List -->
    <CCol md="5">

      <!-- Button to send counter samples -->
      <CRow class="mb-3">
        <CCol class="text-end">
          <CButton
              color="success"
              shape="rounded-pill"
              :disabled="!listGroupData.length || isSavingData"
              size="sm"
              @click.prevent="assignSampleToShelf"
          >
            <CSpinner as="span" size="sm" aria-hidden="true" v-if="isSavingData"/>
            <font-awesome-icon :icon="['fas', 'floppy-disk']" v-else />
            {{ isSavingData ? 'Asignando Ubicaciones...' : 'Asignar CONTRAMUESTRAS a Ubicaciones' }}
          </CButton>
        </CCol>
      </CRow>
      <!-- End Button to send counter samples -->

      <CRow>
        <CCol>
          <CListGroup>
            <CListGroupItem class="text-center" v-if="!listGroupData.length">
              <font-awesome-icon :icon="['fas', 'hourglass']" class="fa-shake"/>
              Aún no hay CONTRA_MUESTRAS precargadas
            </CListGroupItem>
            <CListGroupItem
                class="d-flex justify-content-between align-items-center"
                v-for="(item, index) in listGroupData"
                :key="index"
                v-else
            >
              <div>
                <strong>
                  Código:
                </strong>
                {{ item.codigo_muestra }}
                <ul>
                  <li>
                    <strong>
                      Ubicación:
                    </strong>
                    {{item.sample_location}}
                  </li>
                </ul>
              </div>
              <CButton
                  size="sm"
                  color="danger"
                  class="text-white"
                  shape="rounded-pill"
                  @click.prevent="removeItemFromArray(index)"
              >
                <font-awesome-icon :icon="['fas', 'trash']"/>
              </CButton>
            </CListGroupItem>
          </CListGroup>
        </CCol>
      </CRow>
    </CCol>
    <!-- End Counter Samples List -->

  </CRow>

</template>

<style scoped>

</style>