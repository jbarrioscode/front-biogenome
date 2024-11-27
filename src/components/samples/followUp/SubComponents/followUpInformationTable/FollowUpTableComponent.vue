<script setup lang="ts">


import {useFollowUpSampleStore} from "@/stores/followUp/followUpStore.ts";
import {onMounted, reactive} from "vue";
import FollowUpModal
  from "@/components/samples/followUp/SubComponents/followUpInformationTable/Modals/FollowUpModal.vue";

const followUpStore = useFollowUpSampleStore()

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
    },
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
        :is-loading="followUpStore.isLoadingFollowUpPatients"
        :columns="table.columns"
        :rows="followUpStore.followUpPatients"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        size="sm"
    >

      <template v-slot:actions="data">

        <FollowUpModal
            :sampleID="data.value.codigo_muestra"
        />

      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>