<script setup lang="ts">

import {useRoleStore} from "@/stores/settings/roleStore.ts";
import {onMounted, reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CBadge} from "@coreui/vue/dist/esm/components/badge";

const roleStore = useRoleStore()

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
      width: '10%',
      sortable: true,
      isKey: true,
    },
    {
      label: "Fecha Creacion",
      field: "created_at",
      width: '15%',
      sortable: true,
      isKey: true,
    },
    {
      label: "Permisos",
      field: "permissions",
      sortable: true,
      isKey: true,
    },
    {
      label: "Acciones",
      field: "actions",
      width: '10%'
    }
  ],
  rows: [],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
})

function removeRoleFromList(roleId: number) {
  roleStore.removeRoleFromList(roleId)
}

onMounted(() => {
  roleStore.fetchRoles()
})

</script>

<template>
  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="roleStore.isLoadingRoles"
        :columns="table.columns"
        :rows="roleStore.roles"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        @is-finished="table.isLoading = false"
    >


      <template v-slot:permissions="data">
        <h6>
          <CBadge color="secondary" v-for="item in data.value.permissions" :key="item.id">
            {{ item.name }}
          </CBadge>
        </h6>
      </template>

      <template v-slot:actions="data">

        <CButton
            class="delete-button"
            @click="removeRoleFromList(data.value.id)"
            :title="`Eliminar Usuario ${data.value.document}`">
          <CIcon icon="cil-trash"/>
        </CButton>

      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>