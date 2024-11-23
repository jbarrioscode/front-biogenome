<script setup lang="ts">
import {ref} from "vue";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import CreateRoleForm from "@/components/settings/roles/subComponents/roleMenuComponent/Forms/CreateRoleForm.vue";
import CreateInformedConsentForm
  from "@/components/settings/informedConsents/subComponents/informedConsentsMenuComponent/Forms/CreateInformedConsentForm.vue";

const visibleStaticBackdropDemo = ref(false)
</script>

<template>
  <div>
    <CButton
        size="sm"
        shape="rounded-pill"
        color="primary"
        @click="() => { visibleStaticBackdropDemo = true }"
    >
      <font-awesome-icon :icon="['fas', 'file-circle-plus']" />
      Crear Consentimiento
    </CButton>

    <CModal
        backdrop="static"
        :visible="visibleStaticBackdropDemo"
        @close="() => { visibleStaticBackdropDemo = false }"
        aria-labelledby="StaticBackdropExampleLabel"
        size="lg"
    >
      <CModalHeader>
        <CModalTitle id="StaticBackdropExampleLabel">
          Ventana: Creación de Consentimientos Informados
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CreateInformedConsentForm />

      </CModalBody>
    </CModal>
  </div>
</template>

<style scoped>

</style>