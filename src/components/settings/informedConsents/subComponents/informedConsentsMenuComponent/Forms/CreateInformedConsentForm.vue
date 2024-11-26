<script setup lang="ts">

import {inject, reactive, ref} from "vue";
import {useProtocolStore} from "@/stores/protocols/protocolStore.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import {IInformedConsent} from "@/utils/interfaces/informedConsent/informedConsent.ts";
import {CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";

const Swal = inject('$swal')

const userStore = useUserStore()
const protocolStore = useProtocolStore()

const formData = reactive<IInformedConsent>({
  name: null,
  description: null,
  protocol_id: null,
  text_body: null
})
const isSavingInformedConsent = ref(false)
const errors = ref(null)

const saveInformedConsent = () => {
  alert('Saving...')
}

</script>

<template>

  <CForm class="row g-3" @submit.prevent="saveInformedConsent">
    <CCol>

      <CRow class="mb-3">
        <CCol>
          <CFormLabel for="inputInformedConsentName">Nombre del Consentimiento:</CFormLabel>
          <CFormInput type="text" placeholder="Nombre" id="inputInformedConsentName" v-model="formData.name"/>
        </CCol>
      </CRow>

      <CRow class="mb-3">
        <CCol>
          <CFormLabel for="inputInformedConsentDescription">Descripción del Consentimiento:</CFormLabel>
          <CFormTextarea
              rows="3"
              placeholder="Descripción"
              id="inputInformedConsentDescription"
              v-model="formData.description"
          />
        </CCol>
      </CRow>

      <CRow class="mb-3">
        <CCol>
          <CFormLabel for="inputInformedConsentProtocol">Protocolo Asociado:</CFormLabel>
          <CFormSelect
              aria-label="Default select example"
              v-model="formData.protocol_id"
          >
            <option>Seleccione el protocolo</option>
            <option
                v-for="(item, index) in protocolStore.protocols"
                :key="item.protocolo_id"
                :value="item.protocolo_id"
            >
              {{ item.protocolo }}
            </option>
          </CFormSelect>
        </CCol>
      </CRow>

      <CRow class="mb-5">
        <CCol style="min-height: 200px; max-height: 400px">
            <CFormLabel for="inputInformedConsentProtocol">Cuerpo del consentimiento:</CFormLabel>
            <quill-editor
                :theme="'snow'"
                v-model="formData.text_body" />
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <CButton shape="rounded-pill" color="warning" type="reset" class="me-md-2">
              <font-awesome-icon :icon="['fas', 'times']" />
              Cancelar
            </CButton>
            <CButton shape="rounded-pill" color="primary" type="submit"
                     :disabled="isSavingInformedConsent || (!formData.name || !formData.protocol_id)">
              <CSpinner as="span" size="sm" aria-hidden="true" v-if="isSavingInformedConsent"/>
              <font-awesome-icon :icon="['fas', 'floppy-disk']" v-else />
              {{ isSavingInformedConsent ? 'Guardando...' : 'Registrar Consentimiento' }}
            </CButton>
          </div>
        </CCol>
      </CRow>

    </CCol>
  </CForm>

</template>

<style scoped>

</style>