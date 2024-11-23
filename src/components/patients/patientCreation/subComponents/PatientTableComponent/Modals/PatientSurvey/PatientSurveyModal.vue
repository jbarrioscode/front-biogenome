<script setup lang="ts">

import {CButton} from "@coreui/vue/dist/esm/components/button";
import {inject, onMounted, ref} from "vue";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import PatientSurveyService from "@/services/survey/PatientSurvey.service.ts";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CCard, CCardBody, CCardHeader} from "@coreui/vue/dist/esm/components/card";
import {CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect} from "@coreui/vue/dist/esm/components/form";
import {array} from "yup";

const Swal = inject('$swal')

const props = defineProps({
  patientId: Number,
  patientProtocol: Number
})

/* Modal Open or Close State */
const visibleStaticBackdropDemo = ref(false)

/* Loader Props */
const loaderParams = ref({
  color: '#4fc08d',
})

/* Other functions to render the form */
function getInputType(property: any) {
  const inputType = property.find((prop) => prop.parametro === "type")
  return inputType ? inputType.propiedad : "text"
}

function getColumnWidthXL(property: any) {
  const colsWidthXL = property.find(prop => prop.parametro === "colsWidthXL")
  console.log(colsWidthXL)
  return colsWidthXL ? colsWidthXL.propiedad : 0
}

function getColumnWidthSM(property: any) {
  const colsWidthSM = property.find(prop => prop.parametro === "colsWidthSM")
  console.log(colsWidthSM)
  return colsWidthSM ? colsWidthSM.propiedad : 0
}

function getPlaceholder(property: any) {
  const placeholder = property.find(prop => prop.parametro === "placeholder")
  return placeholder ? placeholder.propiedad : ""
}

/* Consuming the survey endpoint */
const surveyInformation = ref([])
const isLoadingSurveyInformation = ref(false)

const getSurveyInfoByProtocol = async (protocolID: number) => {
  isLoadingSurveyInformation.value = true
  try {
    const {data} = await PatientSurveyService.getSurveyInfoByProtocol(protocolID)

    surveyInformation.value = data.data
    isLoadingSurveyInformation.value = false
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: 'Oooops!',
      text: error.response.message
    })
    isLoadingSurveyInformation.value = false
  } finally {
    isLoadingSurveyInformation.value = false
  }
}

</script>

<template>
  <CButton
      size="sm"
      shape="rounded-pill"
      @click.prevent="() => { visibleStaticBackdropDemo = true; getSurveyInfoByProtocol(patientProtocol) }"
      title="Diligenciar Historia"
  >
    <font-awesome-icon :icon="['fas', 'clipboard-list']"/>
  </CButton>

  <CModal
      backdrop="static"
      :visible="visibleStaticBackdropDemo"
      @close="() => { visibleStaticBackdropDemo = false }"
      aria-labelledby="StaticBackdropExampleLabel"
      size="xl"
  >
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">
        Ventana: Consentimiento Informado {{ props.patientId + '--' + props.patientProtocol }}
      </CModalTitle>
    </CModalHeader>
    <CModalBody>


      <CRow v-if="isLoadingSurveyInformation">
        <CCol class="text-center">
          <pulse-loader :loading="isLoadingSurveyInformation" :color="loaderParams.color"/>
        </CCol>
      </CRow>

      <CRow v-for="(group, index) in surveyInformation" :key="group.id" v-else class="mb-3">
        <CCol>
          <CCard>
            <CCardHeader class="fw-bold">
              {{ group.orden_grupo }}. {{ group.nombre }}
            </CCardHeader>
            <CCardBody>

              <CForm class="row g-3">

                <CCol
                    v-for="(question, index) in group.preguntas"
                    :key="question.id_pregunta"
                    :xl="getColumnWidthXL(question.propiedades)"
                    :sm="getColumnWidthSM(question.propiedades)"
                >
                  <CFormLabel
                      :for="`${question.tipo_pregunta}-${question.id_pregunta}`"
                      class="fw-bold"
                  >
                    {{ question.nombre_pregunta }}:
                  </CFormLabel>

                  <CFormInput
                      v-if="question.id_tipo_pregunta === 1"
                      :id="`${question.tipo_pregunta}-${question.id_pregunta}`"
                      :placeholder="getPlaceholder(question.propiedades)"
                      :type="getInputType(question.propiedades)"
                  />

                  <CFormSelect
                      v-else-if="question.id_tipo_pregunta === 2"
                      aria-label="Default select example"
                      :id="`${question.tipo_pregunta}-${question.id_pregunta}`"
                  >
                    <option value="">Open this select menu</option>
                    <option v-for="(option, index) in question.opciones" :key="option.id" :value="option.id">
                      {{ option.opcion }}
                    </option>
                  </CFormSelect>

                  <CFormCheck
                      v-else-if="question.id_tipo_pregunta === 3"
                      :id="`${question.tipo_pregunta}-${question.id_pregunta}`"
                      v-for="(option, index) in question.opciones"
                      :key="option.id"
                      :label="option.opcion"
                  />

                  <CFormCheck
                      v-else-if="question.id_tipo_pregunta === 4"
                      :id="`${question.tipo_pregunta}-${question.id_pregunta}`"
                      type="radio"
                      :name="`flexRadio-${question.tipo_pregunta}-${question.id_pregunta}`"
                      v-for="(radio, index) in question.opciones"
                      :key="radio.id"
                      :label="radio.opcion"
                  />

                </CCol>


              </CForm>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </CModalBody>
  </CModal>

</template>

<style scoped>

</style>