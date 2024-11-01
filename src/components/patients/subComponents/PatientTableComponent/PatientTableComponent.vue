<script setup lang="ts">

import {onMounted, reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {usePatientStore} from "@/stores/patients/patientStore.ts";
import PatientInformedConsentModal
  from "@/components/patients/subComponents/PatientTableComponent/Modals/PatientInformedConsentModal.vue";

const patientStore = usePatientStore()

// Init Your table settings
const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "ID",
      field: "id",
      width: '3%',
      sortable: true,
      isKey: true,
    },
    {
      label: "T. Doc",
      field: "tipo_doc",
      sortable: true,
      isKey: true,
    },
    {
      label: "Paciente",
      field: "numero_documento",
      sortable: true,
      isKey: true,
    },
    {
      label: "G.S. RH",
      field: "grupo_sanguineo",
      sortable: true,
      isKey: true,
    },
    {
      label: "Email",
      field: "email",
      sortable: true,
    },
    {
      label: "Teléfono",
      field: "telefono_celular",
      sortable: true,
    },
    {
      label: "Acciones",
      field: "actions",
    }
  ],
  rows: [],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
})

function removePatient(patientId: number) {
  patientStore.removePatient(patientId);
}

onMounted(() => {
  patientStore.fetchPatientsList()
})

</script>

<template>

  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="patientStore.isLoadingPatients"
        :columns="table.columns"
        :rows="patientStore.patients"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        @is-finished="table.isLoading = false"
    >

      <template v-slot:actions="data">

        <CButton
            class="delete-button"
            @click="removePatient(data.value.id)"
            :title="`Eliminar Paciente ${data.value.numero_documento}`">
          <CIcon icon="cil-trash"/>
        </CButton>

        <PatientInformedConsentModal
            :patientId="data.value.id"
            :patientHasProtocol="data.value.protocolos.length"
        />
<!--        <CButton
            class="edit-button"
            title="Firmar Consentimiento">
          <CIcon icon="cil-pencil"/>
        </CButton>-->

        <CButton
            title="Diligenciar Historia">
          <CIcon icon="cil-list"/>
        </CButton>

      </template>

    </table-lite>
  </div>

</template>

<style scoped>
</style>