<script setup lang="ts">

import {CButton} from "@coreui/vue/dist/esm/components/button";
import CreateRoleModal from "@/components/settings/roles/subComponents/roleMenuComponent/Modals/CreateRoleModal.vue";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {useProtocolStore} from "@/stores/protocols/protocolStore.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import CreateInformedConsentModal
  from "@/components/settings/informedConsents/subComponents/informedConsentsMenuComponent/Modals/CreateInformedConsentModal.vue";

const userStore = useUserStore()
const protocolStore = useProtocolStore()

</script>

<template>
  <CCard>
    <CCardBody>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">

        <CButton size="sm" shape="rounded-pill" color="success">
          <font-awesome-icon :icon="['fas', 'download']" />
          Descargar Reporte
        </CButton>

        <!-- Create Informed Consent Button and Modal -->
        <CreateInformedConsentModal />
        <!-- End Create Informed Consent Button and Modal -->


        <CButton size="sm" shape="rounded-pill" color="warning" @click="() => protocolStore.fetchActiveProtocols(1)">
          <font-awesome-icon :icon="['fas', 'sync']" />
          Recargar
        </CButton>
      </div>

    </CCardBody>
  </CCard>
</template>

<style scoped>

</style>