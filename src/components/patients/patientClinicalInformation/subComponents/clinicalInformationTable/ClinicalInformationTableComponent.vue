<script setup lang="ts">
// Init Your table settings
import {onMounted, reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import ClinicalInformationModal
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Modals/ClinicalInformationModal.vue";
import {usePatientClinicalInformationStore} from "@/stores/patients/patientClinicalInformationStore.ts";

const patientWCIStore = usePatientClinicalInformationStore()

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
      label: "Tipo Doc",
      field: "tipo_doc",
      sortable: true,
      isKey: true,
    },
    {
      label: "Documento Paciente",
      field: "numero_documento",
      sortable: true,
      isKey: true,
    },
    {
      label: "Código de Muestra",
      field: "code_paciente",
      sortable: true,
      isKey: true,
    },
    {
      label: "Sede de Muestra",
      field: "sede_toma_muestra",
      sortable: true,
    },
    {
      label: "Fecha de Muestra",
      field: "created_at",
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

onMounted(() => {
  patientWCIStore.fetchPatientsWithOutClinicalInformation()
})
</script>

<template>
  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="patientWCIStore.isLoadingPatientWCI"
        :columns="table.columns"
        :rows="patientWCIStore.patientWCI"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        size="sm"
    >

      <template v-slot:actions="data">

        <ClinicalInformationModal
            :patientCode="data.value.code_paciente"
            :sampleID="data.value.id"
        />

      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>