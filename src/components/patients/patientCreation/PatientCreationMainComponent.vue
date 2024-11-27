<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import PatientMenuComponent
  from "@/components/patients/patientCreation/subComponents/PatientMenuComponent/PatientMenuComponent.vue";
import PatientTableComponent
  from "@/components/patients/patientCreation/subComponents/PatientTableComponent/PatientTableComponent.vue";
</script>

<template>
  <CContainer fluid>

    <CRow class="mb-4">
      <CCol>
        <PatientMenuComponent />
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <PatientTableComponent />
      </CCol>
    </CRow>

  </CContainer>
</template>

<style scoped>

</style>