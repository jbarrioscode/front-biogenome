<script setup lang="ts">

import {onMounted, reactive} from "vue";
import {useUsersStore} from "@/stores/settings/usersStore.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";

const usersStore = useUsersStore()

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
      field: "doctype",
      sortable: true,
      isKey: true,
    },
    {
      label: "Documento",
      field: "document",
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
      label: "Usuario",
      field: "username",
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
      field: "phone",
      sortable: true,
    },
    {
      label: "Rol",
      field: "role",
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

function removeUserFromList(userId: number) {
  usersStore.removeUserFromList(userId)
}

onMounted(() => {
  usersStore.fetchActiveUsers()
})

</script>

<template>
  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="usersStore.isLoadingUsers"
        :columns="table.columns"
        :rows="usersStore.users"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        @is-finished="table.isLoading = false"
    >

      <template v-slot:doctype="data">
        {{ data.value.doctype.initials }}
      </template>

      <template v-slot:role="data">
        {{ data.value.roles[0].name }}
      </template>

      <template v-slot:name="data">
        {{ data.value.firstName + ' ' +  data.value.middleName + ' ' +  data.value.lastName + ' ' +  data.value.surName }}
      </template>

      <template v-slot:actions="data">

        <CButton
            class="delete-button"
            @click="removeUserFromList(data.value.id)"
            :title="`Eliminar Usuario ${data.value.document}`">
          <CIcon icon="cil-trash"/>
        </CButton>

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