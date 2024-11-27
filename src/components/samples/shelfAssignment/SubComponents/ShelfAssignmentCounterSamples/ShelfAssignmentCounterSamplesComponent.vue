<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {reactive, ref} from "vue";
import Swal from 'sweetalert2'
import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";
import {CBadge} from "@coreui/vue/dist/esm/components/badge";
import {CButton} from "@coreui/vue/dist/esm/components/button";

const formData = reactive({
  counterSampleCode: "",
  shelfAssignmentCode: "",
})

const listGroupData = ref([
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
])

/* Expresiones regulares de validaciones*/
const regexSamples = /^CM([0-9]{1,9})?-\w{1,20}-\d{1,5}-\d{1,5}$/

const shelfCounterSampleAssignment = () => {
  //CM5-FKHMMPLT-1-7
  //CM6-1RUJFAWI-1-7

  if (!formData.counterSampleCode.length) {
    Swal.fire({
      icon: 'error',
      title: 'Verifica!',
      text: 'El campo de CONTRAMUESTRA o de Ubicación No puede estar vacío'
    })
    return false
  }

  if (!regexSamples.test(formData.counterSampleCode)) {
    Swal.fire({
      icon: 'error',
      title: 'Ooops!',
      text: 'El Código de CONTRAMUESTRA NO cumple con el coincide con el patron'
    })
    return false
  } else {
    listGroupData.value.push({...formData})
    clearFields()
  }
}

function clearFields() {
  formData.counterSampleCode = ''
  formData.shelfAssignmentCode = ''
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

                  <CCol md="12">
                    <CFormLabel for="inputCounterSampleCode">Código de la CONTRAMUESTRA:</CFormLabel>
                    <CFormInput
                        placeholder="Escriba acá el código de la CONTRAMUESTRA"
                        id="inputCounterSampleCode"
                        v-model="formData.counterSampleCode"
                    />
                  </CCol>

                  <CCol md="12">
                    <CFormLabel for="inputCounterSampleShelfCode">Código de la UBICACIÓN:</CFormLabel>
                    <CFormInput
                        placeholder="Escriba acá el código de la UBICACIÓN"
                        id="inputCounterSampleShelfCode"
                        v-model="formData.shelfAssignmentCode"
                        @keyup.enter.prevent="shelfCounterSampleAssignment"
                    />
                  </CCol>

                </CForm>
              </CCol>
            </CRow>

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>

    <CRow class="mb-3">
      <CCol class="text-end">
        <CButton
            color="success"
            shape="rounded-pill"
            :disabled="!listGroupData.length"
        >
          <font-awesome-icon :icon="['fas', 'floppy-disk']" />
          Asignar CONTRAMUESTRAS a Ubicaciones
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
            <div>
              {{ item.counterSampleCode }}
            </div>
            <div>
              {{ item.shelfAssignmentCode }}
            </div>
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