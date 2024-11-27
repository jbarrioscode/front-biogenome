<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";

const formData = reactive({
  initDate: "",
  endDate: "",
})

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
            <CButton type="button" color="primary" shape="rounded-pill">
              <font-awesome-icon :icon="['fas', 'search']" />
              Generar Reporte
            </CButton>
          </CCol>

        </CForm>

      </CCol>
    </CRow>
  </CContainer>
</template>

<style scoped>

</style>