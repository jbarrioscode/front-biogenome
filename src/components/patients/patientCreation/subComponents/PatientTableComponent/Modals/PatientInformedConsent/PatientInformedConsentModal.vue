<script setup lang="ts">

import {CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {inject, reactive, ref} from "vue";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import InformedConsentService from "@/services/informedConsent/InformedConsent.service.ts";
import {useProtocolStore} from "@/stores/protocols/protocolStore.ts";
import {CButtonGroup} from "@coreui/vue/dist/esm/components/button-group";
import {IPatientInformedConsent} from "@/utils/interfaces/patients/patients.ts";
import {usePatientStore} from "@/stores/patients/patientStore.ts";
import DOMPurify from "dompurify";
import {CForm, CFormInput, CFormLabel, CFormSelect} from "@coreui/vue/dist/esm/components/form";
import {useDocumentTypesStore} from "@/stores/settings/documentTypesStore.ts";

const Swal = inject('$swal')

const props = defineProps({
  patientId: {
    type: Number,
    required: true,
  },
  patientName: {
    type: String,
    required: true,
  },
  patientDoctype: {
    type: String,
    required: true,
  },
  patientDocument: {
    type: String,
    required: true,
  },
  patientCity: {
    type: String,
    required: true,
  },
  patientAge: {
    type: Number,
    required: true,
  },
  patientPhone: {
    type: String,
    required: true,
  },
  patientHasProtocol: Boolean,
  patientProtocol: Object
})

const protocolStore = useProtocolStore()
const patientStore = usePatientStore()
const documentTypesStore = useDocumentTypesStore()

const loaderParams = ref({
  color: '#4fc08d',
})
const visibleStaticBackdropDemo = ref(false)
const informedConsents = ref([])
const informedConsentData = ref('')
const isLoadingInformedConsent = ref(false)

const formData = reactive(({
  protocolSelected: null,
  signature1String: null,
  signature2String: null,
}))

const patientOrRepresentativeFormData = reactive({
  nombre_completo: null,
  tipo_documento: null,
  documento: null,
  relacion_sujeto: null,
  direccion: null,
})

const witnessFormData = reactive({
  nombre_completo: null,
  tipo_documento: null,
  documento: null,
  relacion_sujeto: null,
  direccion: null,
})

const isSavingInformedConsent = ref(false)

/* Signature PAD Variables */
const signaturePadState = reactive({
  count: 0,
  option: {
    penColor: "rgb(0, 0, 0)",
    backgroundColor: "rgb(211,211,211)"
  },
  disabled: false
})
const signature1 = ref(null)
const signature2 = ref(null)
const saveSignature1 = (t) => {
  //console.log(signature1.value.save(t))
  formData.signature1String = signature1.value.save(t)
}
const saveSignature2 = (t) => {
  //console.log(signature1.value.save(t))
  formData.signature2String = signature2.value.save(t)
}

const clearSignature1 = () => {
  signature1.value.clear()
  signature2.value.clear()
  formData.signature1String = null
}
const clearSignature2 = () => {
  signature2.value.clear()
  formData.signature2String = null
}

const undoSignature1 = () => {
  signature1.value.undo();
}
const undoSignature2 = () => {
  signature2.value.undo();
}

const dynamicData = {
  patientName: props.patientName,
  patientDoctype: props.patientDoctype,
  patientDocument: props.patientDocument,
  patientCity: props.patientCity,
  patientPhone: props.patientPhone,
};

function interpolateHtml(template, variables) {
  // Usar una expresión regular para encontrar los marcadores
  return template.replace(/{{\s*(\w+)\s*}}/g, (_, key) => {
    // Reemplazar con el valor de la variable o dejarlo vacío si no existe
    return variables[key] !== undefined ? variables[key] : '';
  });
}

const getInformedConsentBySampleID = async (protocolID: number) => {
  isLoadingInformedConsent.value = true
  informedConsents.value = []
  informedConsentData.value = ''
  formData.signature1String ? clearSignature1() : null
  formData.signature2String ? clearSignature2() : null
  try {
    const response = await InformedConsentService.getInformedConsentByProtocolId(protocolID)

    if (response) {
      informedConsents.value = response.data.data
      informedConsentData.value = DOMPurify.sanitize(interpolateHtml(response.data.data[0].consentimiento, dynamicData))
    }

    isLoadingInformedConsent.value = false
  } catch (error) {
    console.log(error.response.message)
    isLoadingInformedConsent.value = false
  } finally {
    isLoadingInformedConsent.value = false
  }
}

const saveInformedConsent = async () => {
  isSavingInformedConsent.value = true
  try {
    const payload: IPatientInformedConsent[] = [
      {
        ...patientOrRepresentativeFormData,
        tipo_consentimiento_informado_id: formData.protocolSelected,
        paciente_id: props.patientId,
        firma: formData.signature1String,
        firmante_id: props.patientAge < 18 ? 2 : 1
      },
      {
        ...witnessFormData,
        tipo_consentimiento_informado_id: formData.protocolSelected,
        paciente_id: props.patientId,
        firma: formData.signature2String,
        firmante_id: 3
      }
    ]

    const {data} = await InformedConsentService.savePatientInformedConsent({
      firmas: payload
    })

    Swal.fire({
      icon: 'success',
      title: 'Buen trabajo!',
      text: data.message
    })
    isSavingInformedConsent.value = false
    visibleStaticBackdropDemo.value = false
    await patientStore.fetchPatientsList()

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oppps!',
      text: error.response.message
    })
    isSavingInformedConsent.value = false
  } finally {
    isSavingInformedConsent.value = false
  }

}

</script>

<template>

  <CButton
      size="sm"
      shape="rounded-pill"
      :class="`${ patientHasProtocol ? 'btn-success' : 'edit-button'} border-0`"
      @click="() => { visibleStaticBackdropDemo = true }"
      title="Diligenciar Consentimiento"
      :disabled="props.patientHasProtocol"
  >
    <font-awesome-icon :icon="['fas', 'file-signature']"/>
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
        Ventana: Consentimiento Informado {{ props.patientId }}
      </CModalTitle>
    </CModalHeader>
    <CModalBody>

      <!-- Protocol Selection Section -->
      <CRow class="mb-4">
        <CCol v-if="protocolStore.isLoadingProtocol" class="text-center">
          <pulse-loader :loading="protocolStore.isLoadingProtocol" :color="loaderParams.color" />
        </CCol>

        <CCol v-else class="text-center">
          <div>
            <h6>Seleccione el protocolo que aplicará al Paciente</h6>
          </div>

          <div class="radio-tile-group">

            <div class="input-container" v-for="(item, index) in protocolStore.protocols" :key="item.protocolo_id">
              <input
                  id="walk"
                  class="radio-button"
                  type="radio"
                  name="radio"
                  :value="item.protocolo_id"
                  v-model="formData.protocolSelected"
                  @change.prevent="getInformedConsentBySampleID(item.protocolo_id)"
              >
              {{ patientProtocol.id_protocolo }}
              <div class="radio-tile">
                <div class="icon walk-icon">
                  <font-awesome-icon :icon="['fas', 'microscope']"/>
                </div>
                <label for="walk" class="radio-tile-label">
                  {{ item.protocolo }}
                </label>
              </div>
            </div>

          </div>
        </CCol>
      </CRow>
      <!-- End Protocol Selection Section -->

      <!-- Informed Consent Section -->
      <CRow v-if="formData.protocolSelected">

        <CCol v-if="isLoadingInformedConsent" class="text-center">
          <pulse-loader :loading="isLoadingInformedConsent" :color="loaderParams.color"></pulse-loader>
        </CCol>

        <CCol v-else>
          <h5 class="mb-3">CONSENTIMIENTO INFORMADO</h5>

          <div
              class="mb-5"
              v-if="informedConsents.length"
              v-html="informedConsentData"
          />
          <p class="mb-5 text-center" v-else>
            <font-awesome-icon class="icon" :icon="['far', 'face-frown']"/>
            {{ 'No se encontraron consentimiento para este protocolo' }}
          </p>
        </CCol>
      </CRow>
      <!-- End Informed Consent Section -->

      <!-- Signature PAD Section -->
      <CRow
          class="mb-5"
          v-if="informedConsents.length"
      >
        <CCol md="12">
          <figure>
            <blockquote class="blockquote">
              <p class="text-primary" v-if="props.patientAge < 18">
                Este paciente es
                <strong>MENOR</strong>
                de edad, requiere firma de un
                <strong>REPRESENTANTE.</strong>
              </p>
              <p class="text-primary" v-else>
                Se requiere firma del
                <strong>PACIENTE.</strong>
              </p>
            </blockquote>
            <figcaption class="blockquote-footer text-danger">
              Esta firma es obligatoria para continuar
            </figcaption>
          </figure>
        </CCol>

        <CCol md="12" class="mb-5" v-if="props.patientAge < 18">
          <CForm class="row g-3" id="PatientOrParentForm">
            <CCol md="5">
              <CFormLabel for="inputPatientOrParentName">Nombre Completo:</CFormLabel>
              <CFormInput v-model="patientOrRepresentativeFormData.nombre_completo" type="text" id="inputPatientOrParentName" placeholder="Nombre completo"/>
            </CCol>
            <CCol md="3">
              <CFormLabel for="inputPatientOrParentDoctype">Tipo de Documento:</CFormLabel>
              <CFormSelect v-model="patientOrRepresentativeFormData.tipo_documento" id="inputPatientOrParentDoctype">
                <option>Seleccione una Opción</option>
                <option v-for="(item, index) in documentTypesStore.documentTypes" :key="item.id" :value="item.id" v-text="item.initials" />
              </CFormSelect>
            </CCol>
            <CCol md="4">
              <CFormLabel for="inputPatientOrParentDocument">Documento:</CFormLabel>
              <CFormInput type="text" v-model="patientOrRepresentativeFormData.documento" id="inputPatientOrParentDocument" placeholder="Documento"/>
            </CCol>
            <CCol md="6">
              <CFormLabel for="inputPatientOrParentRelations">Parentesco:</CFormLabel>
              <CFormInput type="text" v-model="patientOrRepresentativeFormData.relacion_sujeto" id="inputPatientOrParentRelations" placeholder="Parentesco"/>
            </CCol>
            <CCol md="6">
              <CFormLabel for="inputPatientOrParentAddress">Dirección:</CFormLabel>
              <CFormInput type="text" v-model="patientOrRepresentativeFormData.direccion" id="inputPatientOrParentAddress" placeholder="Dirección"/>
            </CCol>
          </CForm>
        </CCol>

        <CCol md="12" class="mw-100 d-flex justify-content-center align-items-center">
          <Vue3Signature
              ref="signature1"
              :sigOption="signaturePadState.option"
              :w="'1028px'"
              :h="'450px'"
              :disabled="signaturePadState.disabled"
              class="example"
          />
        </CCol>
        <CCol class="text-center mt-4">
          <CButtonGroup role="group" aria-label="Basic outlined example">
            <CButton color="warning" @click.prevent="clearSignature1">
              <font-awesome-icon :icon="['fas', 'brush']"/>
              Limpiar
            </CButton>
            <CButton color="secondary" @click.prevent="undoSignature1">
              <font-awesome-icon :icon="['fas', 'rotate-left']"/>
              Deshacer
            </CButton>
            <CButton
                color="info"
                @click.prevent="saveSignature1"
            >
              <font-awesome-icon :icon="['fas', 'signature']"/>
              Guardar firma {{ props.patientAge < 18 ? 'Del Representante' : 'del Paciente' }}
            </CButton>
          </CButtonGroup>
        </CCol>
      </CRow>
      <!-- End Signature PAD Section -->

      <!-- Signature PAD Section -->
      <CRow v-if="informedConsents.length && formData.signature1String !== null && formData.signature1String !== ''">

        <CCol md="12">
          <figure>
            <blockquote class="blockquote">
              <p class="text-primary">
                Se requiere la firma de un
                <strong>TESTIGO.</strong>
              </p>
            </blockquote>
            <figcaption class="blockquote-footer text-danger">
              Esta firma es obligatoria para continuar
            </figcaption>
          </figure>
        </CCol>

        <CCol md="12" class="mb-5">
          <CForm class="row g-3" id="PatientOrParentForm">
            <CCol md="5">
              <CFormLabel for="inputPatientOrParentName">Nombre Completo:</CFormLabel>
              <CFormInput  v-model="witnessFormData.nombre_completo" type="text" id="inputPatientOrParentName" placeholder="Nombre completo"/>
            </CCol>
            <CCol md="3">
              <CFormLabel for="inputPatientOrParentDoctype">Tipo de Documento:</CFormLabel>
              <CFormSelect v-model="witnessFormData.tipo_documento" id="inputPatientOrParentDoctype">
                <option>Seleccione una Opción</option>
                <option v-for="(item, index) in documentTypesStore.documentTypes" :key="item.id" :value="item.id" v-text="item.initials" />
              </CFormSelect>
            </CCol>
            <CCol md="4">
              <CFormLabel for="inputPatientOrParentDocument">Documento:</CFormLabel>
              <CFormInput type="text" v-model="witnessFormData.documento" id="inputPatientOrParentDocument" placeholder="Documento"/>
            </CCol>
            <CCol md="6">
              <CFormLabel for="inputPatientOrParentRelations">Parentesco:</CFormLabel>
              <CFormInput type="text" v-model="witnessFormData.relacion_sujeto" id="inputPatientOrParentRelations" placeholder="Parentesco"/>
            </CCol>
            <CCol md="6">
              <CFormLabel for="inputPatientOrParentAddress">Dirección:</CFormLabel>
              <CFormInput type="text" v-model="witnessFormData.direccion" id="inputPatientOrParentAddress" placeholder="Dirección"/>
            </CCol>
          </CForm>
        </CCol>

        <CCol class="mw-100 d-flex justify-content-center align-items-center">
          <Vue3Signature ref="signature2" :sigOption="signaturePadState.option" :w="'1028px'" :h="'450px'"
                         :disabled="signaturePadState.disabled" class="example"/>
        </CCol>
        <CCol class="text-center mt-4">
          <CButtonGroup role="group" aria-label="Basic outlined example">
            <CButton color="warning" @click.prevent="clearSignature2">
              <font-awesome-icon :icon="['fas', 'brush']"/>
              Limpiar
            </CButton>
            <CButton color="secondary" @click.prevent="undoSignature2">
              <font-awesome-icon :icon="['fas', 'rotate-left']"/>
              Deshacer
            </CButton>
            <CButton color="info" @click.prevent="saveSignature2">
              <font-awesome-icon :icon="['fas', 'signature']"/>
              Guardar firma
            </CButton>
          </CButtonGroup>
        </CCol>
      </CRow>
      <!-- End Signature PAD Section -->

    </CModalBody>
    <CModalFooter>
      <CButton
          color="danger"
          class="text-white"
          @click="() => {
            visibleStaticBackdropDemo = false;
            signature1.clear()
          }"
      >
        Cerrar ventana
      </CButton>
      <CButton
          color="success"
          :disabled="!informedConsents.length || !formData.signature1String || !formData.signature2String || isSavingInformedConsent"
          @click.prevent="saveInformedConsent"
      >
        <CIcon icon="cil-pencil"/>
        {{ isSavingInformedConsent ? 'Guardando Consentimiento' : 'Firmar Consentimiento' }}
      </CButton>
    </CModalFooter>
  </CModal>

</template>

<style scoped>

</style>