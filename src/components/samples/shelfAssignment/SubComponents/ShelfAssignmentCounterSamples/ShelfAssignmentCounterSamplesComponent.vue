<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel, CFormSelect} from "@coreui/vue/dist/esm/components/form";
import {onMounted, reactive, ref} from "vue";
import Swal from 'sweetalert2'
import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {useBioBankLocationStore} from "@/stores/sampleType/biobankLocationStore.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import SampleTypeService from "@/services/sampleTypes/SampleType.service.ts";

/* Importing Stores */
const userStore = useUserStore()
const bioBankStore = useBioBankLocationStore()

const counterSampleCode = ref("")

// Estado reactivo para los selects
const locations = ref([])
const selectedLocation = ref("");
const selectedShelf = ref("");
const selectedBox = ref("");
const shelves = ref([]);
const boxes = ref([]);
const listGroupData = ref([])

/*const listGroupData = ref([
  {
    counterSampleCode: 'CM5-FKHMMPLT-1-7',
    shelfAssignmentCode: "ES-1",
  },
  {
    counterSampleCode: 'CM6-1RUJFAWI-1-7',
    shelfAssignmentCode: "ES-1",
  },
  {
    counterSampleCode: 'CM7-GFGUGF4-1-7',
    shelfAssignmentCode: "ES-2",
  }
])*/

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
  boxes.value = shelf?.cajas || [];
  selectedBox.value = "";
};

const isValidCode = (code: string) => {
  const regex = /^[A-Z0-9]{1,9}-\d{1,2}-CS$/;
  return regex.test(code);
}

const addSampleToTempArray = () => {

  if (!isValidCode(counterSampleCode.value)) {
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

  listGroupData.value.push({
    codigo_muestra: counterSampleCode.value,
    user_id: userStore.id,
    ubicacion_id: selectedBox.value,
  })
}

const assignSampleToShelf = async () => {
  try {

    const payload = {
      ...listGroupData.value,
    }
    const response = await SampleTypeService.saveCounterSamplesLocationInBioBank(payload)

    await Swal.fire({
      icon: "success",
      title: response.data.message,
    })

  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: error.message,
    })
    console.error("Error al asginar las ubicaciones:", error)
  }
}

function clearFields() {
  counterSampleCode.value = ''
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

                <CRow :class="`${ !selectedLocation && !selectedShelf && !selectedBox ? 'mb-4' : 'mb-2'}`">
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
                    <label class="form-label" for="shelf-select">Estante:</label>
                    <select class="form-select" id="shelf-select" v-model="selectedShelf" @change="handleShelfChange">
                      <option value="">Selecciona un estante</option>
                      <option v-for="shelf in shelves" :key="shelf.id" :value="shelf.id">
                        {{ shelf.nombre }}
                      </option>
                    </select>
                  </CCol>
                </CRow>

                <CRow :class="`${ selectedLocation && selectedShelf && selectedBox ? 'mb-4' : 'mb-2'}`" v-if="boxes.length">
                  <CCol>
                    <label class="form-label" for="box-select">Caja:</label>
                    <select class="form-select" id="box-select" v-model="selectedBox">
                      <option value="" disabled>Selecciona una caja</option>
                      <option v-for="box in boxes" :key="box.id" :value="box.id">
                        {{ box.descripcion }}
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
                          type="reset"
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
              :disabled="!listGroupData.length"
              size="sm"
              @click.prevent="assignSampleToShelf"
          >
            <font-awesome-icon :icon="['fas', 'floppy-disk']"/>
            Asignar CONTRAMUESTRAS a Ubicaciones
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
                {{ item.codigo_muestra }}
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