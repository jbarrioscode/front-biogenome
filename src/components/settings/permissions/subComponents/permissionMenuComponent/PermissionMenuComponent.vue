<script setup lang="ts">

import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {usePermissionStore} from "@/stores/settings/permissionStore.ts";
import CreatePermissionModal
  from "@/components/settings/permissions/subComponents/permissionMenuComponent/Modals/CreatePermissionModal.vue";

const permissionStore = usePermissionStore()

</script>

<template>
  <CCard>
    <CCardBody>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">

        <CButton size="sm" shape="rounded-pill" color="success">
          <CIcon icon="cil-cloud-download" />
          Descargar Reporte
        </CButton>

        <CreatePermissionModal />

        <CButton size="sm" shape="rounded-pill" color="warning" @click="() => permissionStore.fetchPermissions()">
          <CIcon icon="cil-reload" />
          Recargar
        </CButton>
      </div>

    </CCardBody>
  </CCard>
</template>

<style scoped>

</style>