<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {onMounted, reactive} from "vue";
import PatientService from "@/services/patients/Patient.service.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";

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

const getPatientList = async () => {

  table.isLoading = true

  try {

    const {data} = await PatientService.getAllPatients()
    table.rows = data.data

    table.isLoading = false

  } catch (error) {
    table.isLoading = false
    console.log(error.response.message)
  }

}

const removeItemFromTable = (id: number) => {
  table.rows = table.rows.filter(item => item.id !== id)
}

onMounted(() => {
  getPatientList()
})

</script>

<template>

  <div>
    <table-lite
        :is-slot-mode="true"
        :is-loading="table.isLoading"
        :columns="table.columns"
        :rows="table.rows"
        :total="table.totalRecordCount"
        :sortable="table.sortable"
        @is-finished="table.isLoading = false"
    >

      <template v-slot:actions="data">

        <CButton @click.prevent="removeItemFromTable(data.value.id)" :title="`Eliminar Paciente ${data.value.numero_documento}`">
          <CIcon icon="cil-trash" />
        </CButton>

      </template>

    </table-lite>
  </div>

</template>

<style scoped>

</style>