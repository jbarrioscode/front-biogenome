<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {reactive, ref} from "vue";
import Swal from 'sweetalert2'
import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";
import {CBadge} from "@coreui/vue/dist/esm/components/badge";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import SampleTypeService from "@/services/sampleTypes/SampleType.service.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";

/* Importing Stores */
const userStore = useUserStore()

const sampleCode = ref("")
const listGroupData = ref([])
const isSavingData = ref(false);

/* Expresiones regulares de validaciones*/
const isValidCode = (code: string) => {
  const regex = /^[a-z0-9]{1,9}-\d{1,2}-sa$/i;
  return regex.test(code);
}

// Función para validar duplicados
function isDuplicateSample(codigo: string): boolean {
  return listGroupData.value.some((sample) => sample.codigo_muestra === codigo);
}

const addSampleToTempArray = () => {

  const sample_code = sampleCode.value.toUpperCase();

  if (!sampleCode.value.length) {
    Swal.fire({
      icon: 'error',
      title: 'Verifica!',
      text: 'El campo de Muestras o de Ubicación No puede estar vacío'
    })
    return
  }

  if (!isValidCode(sample_code)) {
    Swal.fire({
      icon: "warning",
      title: "Error!",
      text: 'La muestra no cumple con el patron Requerido' + '\n' + 'CODIGO_MUESTRA - SEDE - SA'
    })
    return
  }

  if (isDuplicateSample(sample_code)) {
    Swal.fire(
        "Duplicado",
        `El código de muestra "${sample_code}" ya existe.`,
        "warning"
    );
    return;
  }

  listGroupData.value.push({
    codigo_muestra: sampleCode.value.toUpperCase() || "N/A",
  })
  clearFields()

}

const shelfSampleAssignment = () => {
  //CM5-FKHMMPLT-1-7
  //CM6-1RUJFAWI-1-7

  if (!sampleCode.value.length) {
    Swal.fire({
      icon: 'error',
      title: 'Verifica!',
      text: 'El campo de Muestras o de Ubicación No puede estar vacío'
    })
    return false
  }

  if (!isValidCode(sampleCode.value)) {
    Swal.fire({
      icon: 'error',
      title: 'Ooops!',
      text: 'El Código de Muestra NO cumple con el coincide con el patron'
    })
    return false
  } else {
    listGroupData.value.push({
      codigo_muestra: sampleCode.value,
    })
  }
}

const assignSampleToShelf = async () => {

  isSavingData.value = true;

  try {

    const payload = {
      envios: {...listGroupData.value},
      user_id: userStore.id,
    }
    const response = await SampleTypeService.saveInternationalSamples(payload)

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

function clearFields() {
  sampleCode.value = ''
}
function clearDataArray() {
  listGroupData.value = []
}

function removeItemFromArray(index: number) {
  listGroupData.value.splice(index, 1)
}

</script>

<template>

  <div>
    <CRow class="mb-3">
      <CCol>
        <CCard>
          <CCardBody>

            <CRow class="mb-3">
              <CCol>
                <CForm class="row g-3" autocomplete="off">

                  <CCol md="9">
                    <CFormLabel for="inputSampleCode">Código de la MUESTRA:</CFormLabel>
                    <CFormInput
                        placeholder="Escriba acá el código de la MUESTRA"
                        id="inputSampleCode"
                        v-model="sampleCode"
                        @keyup.enter.prevent="shelfSampleAssignment"
                    />
                  </CCol>

                  <CCol md="3" class="d-flex justify-content-center align-items-center">
                    <CButton
                        color="primary"
                        shape="rounded-pill"
                        :disabled="!sampleCode"
                        @click.prevent="addSampleToTempArray"
                    >
                      <font-awesome-icon :icon="['fas', 'paper-plane']" />
                      PRECARGAR Muestra
                    </CButton>
                  </CCol>

                </CForm>
              </CCol>
            </CRow>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow class="mb-3" v-if="listGroupData.length">
      <CCol class="text-end">
        <CButton
            color="success"
            shape="rounded-pill"
            :disabled="!listGroupData.length || isSavingData"
            @click.prevent="assignSampleToShelf"
        >
          <CSpinner as="span" size="sm" aria-hidden="true" v-if="isSavingData"/>
          <font-awesome-icon :icon="['fas', 'paper-plane']" v-else />
          {{ isSavingData ? 'Enviando Muestras...' : 'Enviar al Esponsor' }}
        </CButton>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <CListGroup>
          <CListGroupItem
              class="d-flex justify-content-between align-items-center"
              v-for="(item, index) in listGroupData"
              :key="index"
          >
            {{ item.codigo_muestra }}
            <CButton
                size="sm"
                color="danger"
                class="text-white"
                shape="rounded-pill"
                @click.prevent="removeItemFromArray(index)"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </CButton>
          </CListGroupItem>
        </CListGroup>
      </CCol>
    </CRow>

  </div>

</template>

<style scoped>

</style>