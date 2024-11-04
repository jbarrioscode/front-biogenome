<script setup lang="ts">

import {CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {inject, onMounted, reactive, ref} from "vue";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {useSampleTypeStore} from "@/stores/sampleType/sampleTypeStore.ts";
import InformedConsentService from "@/services/informedConsent/InformedConsent.service.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import {useProtocolStore} from "@/stores/protocols/protocolStore.ts";
import {CButtonGroup} from "@coreui/vue/dist/esm/components/button-group";
import {IPatientInformedConsent} from "@/utils/interfaces/patients/patients.ts";
import {usePatientStore} from "@/stores/patients/patientStore.ts";

const Swal = inject('$swal')

const props = defineProps({
  patientId: Number,
  patientHasProtocol: Boolean
})

const protocolStore = useProtocolStore()
const patientStore = usePatientStore()

const loaderParams = ref({
  color: '#4fc08d',
})
const visibleStaticBackdropDemo = ref(false)
const informedConsentData = ref([])
const isLoadingInformedConsent = ref(false)

const formData = reactive(({
  protocolSelected: null,
  signatureString: null
}))
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
const saveSignature = (t) => {
  //console.log(signature1.value.save(t))
  formData.signatureString = signature1.value.save(t)
}

const clearSignature = () => {
  signature1.value.clear()
  formData.signatureString = null
}

const undoSignature = () => {
  signature1.value.undo();
}

const getInformedConsentBySampleID = async (protocolID: number) => {
  isLoadingInformedConsent.value = true
  informedConsentData.value = []
  formData.signatureString ? clearSignature() : null
  try {
    const {data} = await InformedConsentService.getInformedConsentByProtocolId(protocolID)
    informedConsentData.value = data.data
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
    const payload: IPatientInformedConsent = {
      tipo_consentimiento_informado_id: formData.protocolSelected,
      paciente_id: props.patientId,
      firma: formData.signatureString
    }

    const {data} = await InformedConsentService.savePatientInformedConsent(payload)

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
      :disabled="patientHasProtocol"
      title="Diligenciar Consentimiento"
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
          <pulse-loader :loading="protocolStore.isLoadingProtocol" :color="loaderParams.color"></pulse-loader>
        </CCol>

        <CCol v-else class="text-center">
          <div>
            <h6>Seleccione el protocolo que aplicará al Paciente</h6>
          </div>

          <div class="radio-tile-group">

            <div class="input-container" v-for="item in protocolStore.protocols" :key="item.protocolo_id">
              <input
                  id="walk"
                  class="radio-button"
                  type="radio"
                  name="radio"
                  :value="item.protocolo_id"
                  v-model="formData.protocolSelected"
                  @change.prevent="getInformedConsentBySampleID(item.protocolo_id)"
              >
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
          <h5>CONSENTIMIENTO INFORMADO</h5>
          <pre v-if="informedConsentData.length" class="text-center">
            {{ informedConsentData[0] ? informedConsentData[0].consentimiento : '' }}
          </pre>
          <p class="mb-0 text-center" v-else>
            <font-awesome-icon class="icon" :icon="['far', 'face-frown']"/>
            {{ 'No se encontraron consentimiento para este protocolo' }}
          </p>
        </CCol>
      </CRow>
      <!-- End Informed Consent Section -->

      <!-- Signature PAD Section -->
      <CRow v-if="informedConsentData.length">
        <CCol class="mw-100 d-flex justify-content-center align-items-center">
          <Vue3Signature ref="signature1" :sigOption="signaturePadState.option" :w="'1028px'" :h="'450px'"
                         :disabled="signaturePadState.disabled" class="example"/>
        </CCol>
        <CCol class="text-center mt-4">
          <CButtonGroup role="group" aria-label="Basic outlined example">
            <CButton color="warning" @click.prevent="clearSignature">
              <font-awesome-icon :icon="['fas', 'brush']"/>
              Limpiar
            </CButton>
            <CButton color="secondary" @click.prevent="undoSignature">
              <font-awesome-icon :icon="['fas', 'rotate-left']"/>
              Deshacer
            </CButton>
            <CButton color="info" @click.prevent="saveSignature">
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
          :disabled="!informedConsentData.length || !formData.signatureString || isSavingInformedConsent"
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