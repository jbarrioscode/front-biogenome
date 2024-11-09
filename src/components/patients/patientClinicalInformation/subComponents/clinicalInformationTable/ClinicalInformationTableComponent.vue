<script setup lang="ts">
// Init Your table settings
import {reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import ClinicalInformationModal
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Modals/ClinicalInformationModal.vue";

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
      label: "Código Paciente",
      field: "patCode",
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
      field: "grupo_sanguineo",
      sortable: true,
      isKey: true,
    },
    {
      label: "Sede de Muestra",
      field: "email",
      sortable: true,
    },
    {
      label: "Fecha de Muestra",
      field: "telefono_celular",
      sortable: true,
    },
    {
      label: "Estado Actual",
      field: "telefono_celular_a",
      sortable: true,
    },
    {
      label: "Acciones",
      field: "actions",
    }
  ],
  rows: [
    {
      id: 1,
      patCode: 'Xdsj8',
      tipo_doc: 'CC',
      numero_documento: '11111111',
      grupo_sanguineo: '874',
      email: 'SEDE VIVA',
      telefono_celular: '09-11-2024',
      telefono_celular_a: 'FORMULARIO INGRESADO',
    }
  ],
  totalRecordCount: 0,
  sortable: {
    order: "id",
    sort: "asc",
  },
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
        size="small"
    >

      <template v-slot:actions="data">

        <ClinicalInformationModal />

      </template>

    </table-lite>
  </div>
</template>

<style scoped>

</style>