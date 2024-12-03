<script setup lang="ts">

import {CButton} from "@coreui/vue/dist/esm/components/button";
import {inject, onMounted, reactive, ref} from "vue";
import {CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import PatientSurveyService from "@/services/survey/PatientSurvey.service.ts";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CCard, CCardBody, CCardFooter, CCardHeader} from "@coreui/vue/dist/esm/components/card";
import {QUESTION_FORM} from "@/utils/constants/QUESTION_FORM.ts";
import {CForm, CFormCheck, CFormInput, CFormLabel, CFormSelect} from "@coreui/vue/dist/esm/components/form";
import {drugsList} from "@/utils/constants/drugList.ts";
import {SymptomsList} from "@/utils/constants/symptomsList.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import Swal from 'sweetalert2'

const props = defineProps({
  patientId: Number,
  patientProtocol: Number
})

/* Importing Stores */
const userStore = useUserStore()

/* Modal Open or Close State */
const visibleStaticBackdropDemo = ref(false)
const formData = ref({})
/* Consuming the survey endpoint */
const surveyInformation = ref([])
const isLoadingSurveyInformation = ref(false)

/* Loader Props */
const loaderParams = ref({
  color: '#4fc08d',
})

/* Other functions to render the form */
const getInputType = (question, is_sub) => {
  let typeProperty = null
  if (!is_sub) {
    typeProperty = question.propiedades?.find(prop => prop.parametro === "type")
  } else {
    typeProperty = question.propriedadesSubPregunta?.find(prop => prop.parametro === "type")
  }
  return typeProperty ? typeProperty.propiedad : 'text'
}

const getPlaceholder = (question, is_sub) => {
  let placeholderProperty = null
  if (!is_sub) {
    placeholderProperty = question.propiedades?.find(prop => prop.parametro === 'placeholder');
  } else {
    placeholderProperty = question.propriedadesSubPregunta?.find(prop => prop.parametro === 'placeholder');
  }
  return placeholderProperty ? placeholderProperty.propiedad : '';
}

const inputClass = (question) => {
  const baseClass = 'w-full p-2 border rounded';
  const classProperty = question.propiedades?.find(prop => prop.parametro === 'class');
  return classProperty ? `${baseClass} ${classProperty.propiedad}` : baseClass;
}

const getFileJSON = (property: any) => {
  const fileJson = property.find(prop => prop.parametro === "fileJson")
  return fileJson ? fileJson.propiedad : ""
}

const validateResponses = () => {
  let isValid = true;
  surveyInformation.value.forEach(group => {
    group.preguntas.forEach(question => {
      if (!formData.value[question.id_pregunta]) {
        isValid = false
      }
      question.subpreguntas?.forEach(sub_question => {
        if (!formData.value[`sub_${sub_question.id_subpregunta}_${question.id_pregunta}`]) {
          isValid = false
        }
      })
    })
  })
  return isValid
}

const saveResponses = async () => {
  if (!validateResponses()) {
    await Swal.fire({
      icon: "error",
      title: "Error",
      text: `Aún hay campos incompletos, VALIDE e intentelo nuevamente.`,
    })
    return
  }

  const payload = {
    paciente_id: props.patientId,
    user_created_id: userStore.id,
    protocolo_id: props.patientProtocol,
    sedes_toma_muestras_id: 1,
    detalle: parseJsonToModel(formData.value).detall,
    respuesta_subpreguntas: parseJsonToModel(formData.value).respuesta_subpreguntas,
  }
  console.log(payload)

  try {

    const response = await PatientSurveyService.createSurveyInfoByProtocol(payload)

    if (response.data.statusCode === 201) {
      await Swal.fire({
        icon: "success",
        title: "Success",
        text: response.data.message,
      })
      clearFields(false)
    } else {
      await Swal.fire({
        icon: "error",
        title: "Error",
        text: response.data.message,
      })
    }

  } catch (error) {
    console.error(error)
    await Swal.fire({
      icon: "error",
      title: "Error",
      text: error.response.message,
    })
  }

}

function parseJsonToModel(data) {
  const detall = [];
  const respuesta_subpreguntas = [];

  Object.entries(data).forEach(([key, value]) => {
    // Verifica si es una subpregunta
    if (key.startsWith("sub_")) {
      const subId = key.replace("sub_", ""); // Extrae el ID de la subpregunta
      if (typeof value === "object" && value !== null) {
        respuesta_subpreguntas.push({
          subpregunta_id: parseInt(subId, 10),
          respuesta: value?.DescripcionComercial || value?.label || value?.value || "",
        });
      } else {
        respuesta_subpreguntas.push({
          subpregunta_id: parseInt(subId, 10),
          respuesta: value,
        });
      }
    } else {
      // Si no es subpregunta, se agrega a `detall`
      detall.push({
        pregunta_id: parseInt(key, 10),
        respuesta: value,
      });
    }
  });

  return { detall, respuesta_subpreguntas };
}

const clearFields = (isReset: boolean) => {
  if (isReset) {
    Swal.fire({
      title: "Estas seguro de limpiar el formulario?",
      text: "Esto no podrá revertirse!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, LIMPIAR!"
    }).then((result) => {
      if (result.isConfirmed) {
        formData.value = {}
      }
    });
  } else {
    formData.value = {}
  }
}

/*const getSurveyInfoByProtocol = async (protocolID: number) => {
  isLoadingSurveyInformation.value = true
  try {
    const {data} = await PatientSurveyService.getSurveyInfoByProtocol(protocolID)

    surveyInformation.value = data.data
    isLoadingSurveyInformation.value = false
  } catch (error) {
    console.log(error)
    await Swal.fire({
      icon: 'error',
      title: 'Oooops!',
      text: error.response.message
    })
    isLoadingSurveyInformation.value = false
  } finally {
    isLoadingSurveyInformation.value = false
  }
}*/
onMounted(() => {
  surveyInformation.value = QUESTION_FORM.data
})

</script>

<template>
  <CButton
      size="sm"
      shape="rounded-pill"
      @click.prevent="() => { visibleStaticBackdropDemo = true }"
      title="Diligenciar Historia"
      :disabled="props.patientProtocol===0"
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

      <CRow v-for="(group, index_group) in surveyInformation" :key="group.id" v-else class="mb-3">
        <CCol>
          <CCard>
            <CCardHeader class="fw-bold text-uppercase">
              {{ group.orden_grupo }}. {{ group.nombre }}
            </CCardHeader>
            <CCardBody>

              <CForm class="g-3">

                <CRow>
                  <CCol
                      v-for="(question, index_question) in group.preguntas"
                      :key="question.id"
                      md="6"
                      class="mb-3"
                  >
                    <CFormLabel
                        :for="`question-`+question.id_pregunta"
                        class="fw-bold"
                    >
                      {{index_question + 1}}. {{ question.nombre_pregunta }}
                    </CFormLabel>

                    <!-- Input type question -->
                    <CFormInput
                        v-if="question.tipo_pregunta === 'INPUT'"
                        :id="`question-`+question.id_pregunta"
                        v-model="formData[question.id_pregunta]"
                        :type="getInputType(question, false)"
                        :class="inputClass(question)"
                        :placeholder="getPlaceholder(question, false)"
                    />

                    <!-- Selector type question -->
                    <CFormSelect
                        v-else-if="question.tipo_pregunta === 'SELECTOR'"
                        :id="`question-`+question.id_pregunta"
                        v-model="formData[question.id_pregunta]"
                        aria-label="Default select example"
                    >
                      <option :value="null">Seleccione una opción</option>
                      <option v-for="(option, index_options) in question.opciones"
                              :key="option.id"
                              :value="option.opcion"
                      >
                        {{ option.opcion }}
                      </option>
                    </CFormSelect>

                    <!-- Check button type question -->
                    <CFormCheck
                        v-else-if="question.tipo_pregunta === 'CHECKBOX'"
                        v-for="(option, index_options) in question.opciones"
                        :id="`question-`+question.id_pregunta"
                        :key="option.id"
                        :label="option.opcion"
                        v-model="formData[question.id_pregunta]"
                    />

                    <!-- Radio button type question RADIOBUTTON -->
                    <CRow v-else-if="question.id_tipo_pregunta === 4">
                      <CCol md="12">
                        <CFormCheck
                            v-for="(radio, index_radio) in question.opciones"
                            :id="`question-`+question.id_pregunta+'-'+radio.id"
                            v-model="formData[question.id_pregunta]"
                            type="radio"
                            :key="radio.id"
                            :label="radio.opcion"
                            :value="radio.opcion"
                            :name="`question-`+question.id_pregunta"
                        />
                      </CCol>
                      <CCol md="12" v-if="question.subpreguntas && question.subpreguntas.length">
                        <CRow v-for="(sub_question, index_sub_question) in question.subpreguntas"
                              :key="sub_question.id_subpregunta"
                              class="mb-4"
                        >
                          <CCol md="12">
                            <CFormLabel
                                :for="`sub_question-`+sub_question.id_subpregunta"
                                class="fw-bold"
                            >
                              {{ sub_question.nombre_subpregunta }}
                            </CFormLabel>

                            <!-- Input type sub-question -->
                            <CFormInput
                                v-if="sub_question.tipo_pregunta === 'INPUT'"
                                :id="`sub_question-`+sub_question.id_subpregunta"
                                v-model="formData[`sub_${sub_question.id_subpregunta}_${question.id_pregunta}`]"
                                :type="getInputType(sub_question, true)"
                                :class="inputClass(sub_question)"
                                :placeholder="getPlaceholder(sub_question, true)"
                            />

                            <!-- Selector type sub-question -->
                            <VueMultiselect
                                v-else-if="sub_question.tipo_pregunta === 'SELECTOR'"
                                :id="'sub_question-' + sub_question.id_subpregunta"
                                :allow-empty="false"
                                :close-on-select="true"
                                :options="getFileJSON(sub_question.propriedadesSubPregunta) === 'drugList' ? drugsList : SymptomsList"
                                :label="getFileJSON(sub_question.propriedadesSubPregunta) === 'drugList' ? 'DescripcionComercial' : 'value'"
                                searchable
                                :track-by="getFileJSON(sub_question.propriedadesSubPregunta) === 'drugList' ? 'DescripcionComercial' : 'value'"
                                v-model="formData[`sub_${sub_question.id_subpregunta}_${question.id_pregunta}`]"
                            />
                          </CCol>

                        </CRow>
                      </CCol>
                    </CRow>

                  </CCol>
                </CRow>

              </CForm>

            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

    </CModalBody>
    <CModalFooter>

      <CButton
          color="warning"
          type="button"
          shape="rounded-pill"
          @click="clearFields(true)"
      >
        <font-awesome-icon :icon="['fas', 'times']" />
        Limpiar Formulario
      </CButton>
      <CButton
          @click.prevent="saveResponses"
          color="primary"
          type="button"
          shape="rounded-pill"
      >
        <font-awesome-icon :icon="['fas', 'floppy-disk']" />
        Guardar Respuestas
      </CButton>
    </CModalFooter>
  </CModal>

</template>

<style scoped>

</style>