<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import CreatePatientModal
  from "@/components/patients/patientCreation/subComponents/PatientMenuComponent/Modals/CreatePatientModal.vue";
import {usePatientStore} from "@/stores/patients/patientStore.ts";

const patientStore = usePatientStore()

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

        <CButton size="sm" shape="rounded-pill" color="warning" @click="() => patientStore.fetchPatientsList()">
          <font-awesome-icon :icon="['fas', 'sync']"/>
          Recargar
        </CButton>
      </div>

    </CCardBody>
  </CCard>
</template>

<style scoped>

</style>