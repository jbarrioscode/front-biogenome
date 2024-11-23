<script setup lang="ts">

import {onMounted, reactive} from "vue";
import {useHeadquartersStore} from "@/stores/settings/headquarters.store.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";

const headquartersStore = useHeadquartersStore()

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
      label: "Nombre",
      field: "nombre",
      sortable: true,
      isKey: true,
    },
    {
      label: "Descripción",
      field: "descripcion",
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
  headquartersStore.fetchHeadquarters()
})

</script>

<template>
  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="headquartersStore.isLoadingHeadquarters"
        :columns="table.columns"
        :rows="headquartersStore.headquarters"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        @is-finished="table.isLoading = false"
    >

      <template v-slot:actions="data">

        <CButton
            class="delete-button"
            :title="`Eliminar: ${data.value.nombre}`">
          <font-awesome-icon :icon="['fas', 'trash']" />
        </CButton>

      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>