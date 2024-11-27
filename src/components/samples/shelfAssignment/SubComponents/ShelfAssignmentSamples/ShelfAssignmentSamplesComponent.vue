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
  sampleCode: ''
})
const tempBoxSponsor = ref([]);

const listGroupData = ref([
  {
    sampleCode: 'MU5-FKHMMPLT-1-7',
  },
  {
    sampleCode: 'MU6-1RUJFAWI-1-7',
  },
  {
    sampleCode: 'MU7-GFGUGF4-1-7',
  }
])

/* Expresiones regulares de validaciones*/
const regexSamples = /^MU([0-9]{1,9})?-\w{1,20}-\d{1,5}-\d{1,5}$/

const shelfSampleAssignment = () => {
  //CM5-FKHMMPLT-1-7
  //CM6-1RUJFAWI-1-7

  if (!formData.sampleCode.length) {
    Swal.fire({
      icon: 'error',
      title: 'Verifica!',
      text: 'El campo de Muestras o de Ubicación No puede estar vacío'
    })
    return false
  }

  if (!regexSamples.test(formData.sampleCode)) {
    Swal.fire({
      icon: 'error',
      title: 'Ooops!',
      text: 'El Código de Muestra NO cumple con el coincide con el patron'
    })
    return false
  } else {
    listGroupData.value.push({...formData})
  }
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

                  <CCol>
                    <CFormLabel for="inputSampleCode">Código de la MUESTRA:</CFormLabel>
                    <CFormInput
                        placeholder="Escriba acá el código de la MUESTRA"
                        id="inputSampleCode"
                        v-model="formData.sampleCode"
                        @keyup.enter.prevent="shelfSampleAssignment"
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
          <font-awesome-icon :icon="['fas', 'paper-plane']" />
          Enviar a Esponsor
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
            {{ item.sampleCode }}
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