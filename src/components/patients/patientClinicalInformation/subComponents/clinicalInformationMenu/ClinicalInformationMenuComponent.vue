<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {usePatientClinicalInformationStore} from "@/stores/patients/patientClinicalInformationStore.ts";

const patientWCIStore = usePatientClinicalInformationStore()

</script>

<template>
  <CCard>
    <CCardBody>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">

        <CButton size="sm" shape="rounded-pill" color="success">
          <CIcon icon="cil-cloud-download" />
          Descargar Reporte
        </CButton>

        <CButton
            size="sm"
            shape="rounded-pill"
            color="warning"
            @click.prevent="() => patientWCIStore.fetchPatientsWithOutClinicalInformation()"
        >
          <font-awesome-icon :icon="['fas', 'sync']"/>
          Recargar
        </CButton>
      </div>

    </CCardBody>
  </CCard>
</template>

<style scoped>

</style>