<script setup lang="ts">

import {reactive, ref} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol} from "@coreui/vue/dist/esm/components/grid";
import {everyHowOften} from "@/utils/constants/everyHowOften.constant.ts";

const formData = reactive({
  selectedDrug: null,
  dosage: 0,
  frequency: null,
})

const pharmacologicalHistory = ref([])

const drugList = ref([
  {
    label: "ALERCET ® JARABE",
    value: "ALERCET ® JARABE",
  },
  {
    label: "BRONCHO-VAXOM®  CAPSULAS ADULTOS",
    value: "BRONCHO-VAXOM®  CAPSULAS ADULTOS",
  },
  {
    label: "AZITROMICINA 500MG.",
    value: "AZITROMICINA 500MG.",
  },
  {
    label: "AZITROMICINA MK 200 MG\/ 5 ML POLVO PARA SUSPENSION",
    value: "AZITROMICINA MK 200 MG\/ 5 ML POLVO PARA SUSPENSION",
  },
  {
    label: "GLIBENCLAMIDA 5MG TABLETAS",
    value: "GLIBENCLAMIDA 5MG TABLETAS",
  },
  {
    label: "B-CORT ® 50",
    value: "B-CORT ® 50",
  },
])

function addItemToArray() {
  pharmacologicalHistory.value.push({...formData})
  clearFields()
}

function clearFields(): void {
  formData.selectedDrug = null
  formData.dosage = 0
  formData.frequency = null
}

function saveData(): void {
  {
    alert('acá Farmacologico')
  }
}

</script>

<template>
  <CForm class="row g-3" @submit.prevent="saveData">

    <CCol md="5" class="mb-3">
      <CFormLabel for="">Seleccione el Medicamento:</CFormLabel>
      <custom-select
          v-model="formData.selectedDrug"
          :options="drugList"
          placeholder="Seleccione la opción"
      />
    </CCol>

    <CCol md="2" class="mb-3">
      <CFormLabel for="inputDosage">Dosis:</CFormLabel>
      <CFormInput id="inputDosage" required type="number" v-model="formData.dosage"/>
    </CCol>

    <CCol md="4" class="mb-3">
      <CFormLabel for="">Seleccione la Frecuencia:</CFormLabel>
      <custom-select
          v-model="formData.frequency"
          :options="everyHowOften"
          placeholder="Seleccione la opción"
      />
    </CCol>
    <CCol
        md="1"
        class="mb-3 d-flex justify-content-center align-items-center"
        title="Agregar registro"
    >
      <CButton
          color="primary"
          type="button"
          @click.prevent="addItemToArray"
      >
        <font-awesome-icon :icon="['fas', 'plus']"/>
      </CButton>
    </CCol>

    <CCol md="12">
      <pre>
        {{ pharmacologicalHistory }}
      </pre>
    </CCol>


    <CCol md="12">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <CButton shape="rounded-pill" color="warning" class="me-md-2" type="reset">
          <font-awesome-icon :icon="['fas', 'brush']"/>
          Limpiar
        </CButton>
        <CButton shape="rounded-pill" color="primary" type="submit">
          <font-awesome-icon :icon="['fas', 'floppy-disk']"/>
          Guardar Registro Patológico
        </CButton>
      </div>
    </CCol>

  </CForm>
</template>

<style scoped>

</style>