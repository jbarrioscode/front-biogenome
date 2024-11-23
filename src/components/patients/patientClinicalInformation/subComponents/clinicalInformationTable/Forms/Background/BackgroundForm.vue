<script setup lang="ts">

import {CForm, CFormLabel, CFormTextarea} from "@coreui/vue/dist/esm/components/form";
import {CCol} from "@coreui/vue/dist/esm/components/grid";
import {reactive} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";

const formData = reactive({
  background: null
})

function saveData() {
  alert('Acá Antecedentes')
}

</script>

<template>
  <CForm class="row g-3" @submit.prevent="saveData">

    <CCol md="12">
      <CFormLabel for="evolutionTextArea">Antecedentes del Paciente:</CFormLabel>
      <CFormTextarea
          :rows="5"
          id="evolutionTextArea"
          v-model="formData.background"
          placeholder="Escriba acá los antecedentes"
      />
    </CCol>

    <CCol md="12">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <CButton shape="rounded-pill" color="warning" class="me-md-2" type="reset">
          <font-awesome-icon :icon="['fas', 'brush']" />
          Limpiar
        </CButton>
        <CButton shape="rounded-pill" color="primary" type="submit">
          <font-awesome-icon :icon="['fas', 'floppy-disk']" />
          Guardar Antecedentes
        </CButton>
      </div>
    </CCol>

  </CForm>
</template>

<style scoped>

</style>