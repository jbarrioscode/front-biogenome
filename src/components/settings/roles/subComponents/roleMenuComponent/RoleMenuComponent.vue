<script setup lang="ts">

import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {useRoleStore} from "@/stores/settings/roleStore.ts";
import CreateRoleModal from "@/components/settings/roles/subComponents/roleMenuComponent/Modals/CreateRoleModal.vue";

const roleStore = useRoleStore()

</script>

<template>
  <CCard>
    <CCardBody>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">

        <CButton size="sm" shape="rounded-pill" color="success">
          <CIcon icon="cil-cloud-download" />
          Descargar Reporte
        </CButton>

        <CreateRoleModal />

        <CButton size="sm" shape="rounded-pill" color="warning" @click="() => roleStore.fetchRoles()">
          <CIcon icon="cil-reload" />
          Recargar
        </CButton>
      </div>

    </CCardBody>
  </CCard>
</template>

<style scoped>

</style>