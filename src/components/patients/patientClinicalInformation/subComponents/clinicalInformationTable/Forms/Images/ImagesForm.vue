<script setup lang="ts">

import {CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea} from "@coreui/vue/dist/esm/components/form";
import {CCol} from "@coreui/vue/dist/esm/components/grid";
import {diagnosticImaging} from "@/utils/constants/patientComplementaryInfo.constant.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {reactive} from "vue";
import dayjs from "dayjs";

const formData = reactive({
  imageDate: ""
})

function saveData() {
  alert('Acá Imagenes')
}

</script>

<template>
  <CForm class="row g-3" @submit.prevent="saveData">

    <CCol md="6">
      <CFormLabel for="imageDate">Fecha de la toma de imagen:</CFormLabel>
      <CFormInput
          type="date"
          id="imageDate"
          required
          :max="dayjs().format('YYYY-MM-DD')"
      />
    </CCol>
    <CCol md="6">
      <CFormLabel for="imageDate">Fecha de la toma de imagen:</CFormLabel>
      <CFormSelect aria-label="Default select example" required>
        <option>Seleccione una opción</option>
        <option v-for="(item, index) in diagnosticImaging" :key="item.value">
          {{ item.label }}
        </option>
      </CFormSelect>
    </CCol>

    <CCol md="12">
      <CFormLabel for="imageDate">Resultado de la imagen:</CFormLabel>
      <CFormTextarea rows="5" placeholder="Escriba acá el resultado de la imagen" required />
    </CCol>

    <CCol md="12">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <CButton shape="rounded-pill" color="warning" class="me-md-2" type="reset">
          <font-awesome-icon :icon="['fas', 'brush']" />
          Limpiar
        </CButton>
        <CButton shape="rounded-pill" color="primary" type="submit">
          <font-awesome-icon :icon="['fas', 'floppy-disk']" />
          Guardar Imagen
        </CButton>
      </div>
    </CCol>

  </CForm>
</template>

<style scoped>

</style>