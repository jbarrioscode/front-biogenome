<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {reactive, ref} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import Swal from 'sweetalert2'
import ReportsService from "@/services/reports/Reports.service.ts";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";
import * as XLSX from "xlsx";

const formData = reactive({
  initDate: "",
  endDate: "",
})
const isLoadingReport = ref(false)
const dataReport = ref([])

const exportToExcel = () => {
  let data = XLSX.utils.json_to_sheet(dataReport.value)
  const workbook = XLSX.utils.book_new()
  const filename = 'mainReport'
  XLSX.utils.book_append_sheet(workbook, data, filename)
  XLSX.writeFile(workbook, `${filename}.xlsx`)
}

const exportExcelFiles = () => {
  exportToExcel()
}

const getSamplesReportByDateRange = async () => {

  isLoadingReport.value = true

  try {

    const payload = {
      protocolID: 1,
      initDate: formData.initDate,
      endDate: formData.endDate,
    }

    const response = await ReportsService.getSamplesReportByDateRange(payload)

    if (response.data.statusCode !== 200) {
      await Swal.fire({
        icon: "error",
        title: "Error!",
        text: response.data.message,
      })
    }

    dataReport.value = response.data.data
    await Swal.fire({
      icon: "success",
      title: "Informe generado con exito!",
    })

  } catch (error) {
    await Swal.fire({
      icon: "error",
      title: "Error!",
      text: error.message,
    })
    console.error(error);
  } finally {
    isLoadingReport.value = false
  }

}

</script>

<template>
  <CContainer xl>
    <CRow>
      <CCol md="8" class="m-auto">

        <CForm class="row g-3">

          <CCol md="6">
            <CFormLabel for="inputInitDate">Fecha Inicio:</CFormLabel>
            <CFormInput type="date" id="inputInitDate" v-model="formData.initDate" />
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputEndDate">Fecha Fin:</CFormLabel>
            <CFormInput type="date" id="inputEndDate" v-model="formData.endDate" />
          </CCol>
          <CCol md="12" class="text-end">

            <CButton
                type="button"
                color="success"
                shape="rounded-pill"
                v-if="!isLoadingReport && dataReport.length"
                class="me-2"
                @click="exportExcelFiles"
            >
              <font-awesome-icon :icon="['fas', 'file-arrow-down']" />
              Descargar Reporte
            </CButton>

            <CButton
                type="button"
                color="primary"
                shape="rounded-pill"
                @click="getSamplesReportByDateRange"
                :disabled="isLoadingReport"
            >
              <CSpinner as="span" size="sm" aria-hidden="true" v-if="isLoadingReport"/>
              <font-awesome-icon :icon="['fas', 'search']" v-else />
              {{ isLoadingReport ? 'Generando reporte...' : 'Generar Reporte' }}
            </CButton>
          </CCol>

        </CForm>

      </CCol>
    </CRow>
  </CContainer>
</template>

<style scoped>

</style>