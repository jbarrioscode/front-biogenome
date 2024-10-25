<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import CreatePatientModal from "@/components/patients/subComponents/PatientMenuComponent/Modals/CreatePatientModal.vue";
</script>

<template>
  <CCard>
    <CCardBody>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">

        <CButton size="sm" shape="rounded-pill" color="success">
          <CIcon icon="cil-cloud-download" />
          Descargar Reporte
        </CButton>

        <CreatePatientModal />

        <CButton size="sm" shape="rounded-pill" color="warning">
          <CIcon icon="cil-reload" />
          Recargar
        </CButton>
      </div>

    </CCardBody>
  </CCard>
</template>

<style scoped>

</style>