<script setup lang="ts">


import {useFollowUpSample} from "@/stores/followUp/followUpStore.ts";
import {onMounted, reactive} from "vue";
import ClinicalInformationModal
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Modals/ClinicalInformationModal.vue";
import FollowUpModal
  from "@/components/samples/followUp/SubComponents/followUpInformationTable/Modals/FollowUpModal.vue";

const followUpStore = useFollowUpSample()

const table = reactive({
  isLoading: false,
  columns: [
    {
      label: "Fecha de Muestra",
      field: "fecha",
      sortable: true,
    },
    {
      label: "Codigo muestra",
      field: "codigo_muestra",
      width: '3%',
      sortable: true,
      isKey: true,
    }
    /*,
    {
      label: "paciente_id",
      field: "paciente_id",
      sortable: true,
      isKey: true,
    }*/,
    {
      label: "Protocolo",
      field: "protocolo",
      sortable: true,
      isKey: true,
    },
    {
      label: "Sede de recolección",
      field: "sede",
      sortable: true,
      isKey: true,
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
  followUpStore.fetchFollowSample()
})

</script>

<template>
  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="followUpStore.isLoadingPatientWCI"
        :columns="table.columns"
        :rows="followUpStore.patientWCI"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        size="sm"
    >

      <template v-slot:actions="data">

        <FollowUpModal
            :codigo_muestra="data.value.codigo_muestra"
            :sampleID="data.value.id"

        />

      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>