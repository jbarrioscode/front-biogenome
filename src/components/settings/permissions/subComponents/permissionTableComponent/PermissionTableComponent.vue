<script setup lang="ts">

import {usePermissionStore} from "@/stores/settings/permissionStore.ts";
import {onMounted, reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";

const permissionStore = usePermissionStore()

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
      label: "Nombre",
      field: "name",
      sortable: true,
      isKey: true,
    },
    {
      label: "Fecha Creacion",
      field: "created_at",
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

function removePermissionFromList(permissionId: number) {
  permissionStore.removePermissionFromList(permissionId)
}

onMounted(() => {
  permissionStore.fetchPermissions()
})

</script>

<template>
  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="permissionStore.isLoadingPermissions"
        :columns="table.columns"
        :rows="permissionStore.permissions"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        @is-finished="table.isLoading = false"
    >

      <template v-slot:actions="data">
        <CButton
            class="delete-button"
            @click="removePermissionFromList(data.value.id)"
            :title="`Eliminar Usuario ${data.value.document}`">
          <CIcon icon="cil-trash"/>
        </CButton>
      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>