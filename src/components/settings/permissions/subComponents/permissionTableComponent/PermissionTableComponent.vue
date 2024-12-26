<script setup lang="ts">

import {usePermissionStore} from "@/stores/settings/permissionStore.ts";
import {inject, onMounted, reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import PermissionService from "@/services/settings/Permission.service.ts";
import EditPermissionButton
  from "@/components/settings/permissions/subComponents/permissionTableComponent/Modals/EditPermissionButton.vue";

import Swal from 'sweetalert2'
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

function updateLoadingStatus(status: boolean) {
  permissionStore.updateLoadingStatus(status)
}

async function removePermissionFromList(permissionId: number) {

  updateLoadingStatus(true)

  try {

    const {data} = await PermissionService.deletePermission(permissionId)

    if (data.statusCode !== 200) {
      Swal.fire({
        icon: 'error',
        title: 'Oppps!...',
        text: data.message
      })
      updateLoadingStatus(false)
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Buen Trabajo!...',
        text: data.message
      })
      updateLoadingStatus(false)
    }

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oppps!...',
      text: error.response.message
    })
    updateLoadingStatus(false)
  } finally {
    await permissionStore.fetchPermissions()
    console.log('Eliminado')
    permissionStore.updateLoadingStatus(false)
  }

  //permissionStore.removePermissionFromList(permissionId)
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
            size="sm"
            class="delete-button"
            @click="removePermissionFromList(data.value.id)"
            :title="`Eliminar permiso ${data.value.name}`"
        >
          <CIcon icon="cil-trash"/>
        </CButton>

        <EditPermissionButton
            :permissionName="data.value.name"
            :permissionId="data.value.id"
        />

      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>