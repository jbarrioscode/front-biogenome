<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {useHeadquartersStore} from "@/stores/settings/headquarters.store.ts";
import CreateHeadquarterModal
  from "@/components/settings/headquarters/subComponents/headquartersMenuComponent/Modals/CreateHeadquarterModal.vue";

const headquartersStore = useHeadquartersStore()

</script>

<template>

  <CCard>
    <CCardBody>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">

        <CButton size="sm" shape="rounded-pill" color="success">
          <CIcon icon="cil-cloud-download" />
          Descargar Reporte
        </CButton>

        <!-- Create Headquarters Modal -->
        <CreateHeadquarterModal />
        <!-- End Create Headquarters Modal -->

        <CButton size="sm" shape="rounded-pill" color="warning" @click="() => headquartersStore.fetchHeadquarters()">
          <CIcon icon="cil-reload" />
          Recargar
        </CButton>

      </div>

    </CCardBody>
  </CCard>

</template>

<style scoped>

</style>