<script setup lang="ts">

import PatientComponentMenu from "@/components/patients/subComponents/PatientMenuComponent/PatientMenuComponent.vue";
import PatientTableComponent from "@/components/patients/subComponents/PatientTableComponent/PatientTableComponent.vue";
import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
</script>

<template>
  <CContainer xl>

    <CRow class="mb-4">
      <CCol>
        <PatientComponentMenu />
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