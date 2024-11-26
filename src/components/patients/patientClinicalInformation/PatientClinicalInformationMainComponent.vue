<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import ClinicalInformationMenuComponent
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationMenu/ClinicalInformationMenuComponent.vue";
import ClinicalInformationTableComponent
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/ClinicalInformationTableComponent.vue";
</script>

<template>
  <div>

    <CRow class="mb-4">
      <CCol>
        <ClinicalInformationMenuComponent />
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <ClinicalInformationTableComponent />
      </CCol>
    </CRow>

  </div>
</template>

<style scoped>

</style>