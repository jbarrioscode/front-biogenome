<script setup lang="ts">

import {inject, reactive, ref} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol} from "@coreui/vue/dist/esm/components/grid";
import {everyHowOften} from "@/utils/constants/everyHowOften.constant.ts";
import {drugsList} from "@/utils/constants/drugList.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import PatientClinicalInformationService from "@/services/patients/PatientClinicalInformation.service.ts";
import dayjs from "dayjs";
import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";
import Swal from 'sweetalert2'

const today = dayjs()

const userStore = useUserStore()
const props = defineProps({
  sampleID: {
    type: Number,
    required: true
  }
})

const formData = reactive({
  selectedDrug: null,
  dosage: 0,
  frequency: null,
})

const pharmacologicalHistory = ref([])
const isSavingData = ref(false)

function addItemToArray() {

  if (!formData.selectedDrug?.DescripcionComercial || !formData.dosage || !formData.frequency) {
    Swal.fire({
      icon: "warning",
      title: 'Debe diligenciar las variables completas!'
    })
    return
  }

  pharmacologicalHistory.value.push({
    ...formData,
    selectedDrug: formData.selectedDrug.DescripcionComercial
  })
  clearFields()
}

function removeItemFromArray(itemIndex: number) {
  pharmacologicalHistory.value.splice(itemIndex, 1)
}

async function saveData() {

  isSavingData.value = true
  const payload = {
    user_id: userStore.id,
    muestra_id: props.sampleID,
    datos: formatObject(pharmacologicalHistory.value),
  }

  console.log(payload)

  try {

    const response = await PatientClinicalInformationService.savePatientClinicalInformation(payload);
    Swal.fire({
      icon: "success",
      title: response.data.message,
    });
    isSavingData.value = false
    clearFields()
    clearArray()
  } catch (error) {
    isSavingData.value = false
    Swal.fire({
      icon: "error",
      title: error?.response?.message || "Ha Ocurrido un Error.",
    })
  }
}

function formatObject(array) {
  const result = []
  array.forEach(item => {
    result.push({
      fecha: today.format('YYYY-MM-DD'),
      respuesta: item.selectedDrug.toUpperCase() + ';' + item.dosage + ';' + item.frequency,
      pregunta_clinica_id: 2,
    })
  })
  return result
}

function clearFields() {
  formData.selectedDrug = null
  formData.dosage = 0
  formData.frequency = null
}

function clearArray() {
  pharmacologicalHistory.value = []
}

</script>

<template>
  <CForm class="row g-3" @submit.prevent="saveData">

    <CCol md="5" class="mb-3">
      <CFormLabel for="">Seleccione el Medicamento:</CFormLabel>
      <VueMultiselect
          id="input-drug"
          v-model="formData.selectedDrug"
          :close-on-select="true"
          :options="drugsList"
          label="DescripcionComercial"
          placeholder="Seleccione el medicamento"
          track-by="DescripcionComercial"
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

    <CCol md="12" class="mb-5">
      <CListGroup>
        <CListGroupItem v-for="(item, index) in pharmacologicalHistory" :key="item">

          <div class="d-flex justify-content-between align-items-center">
            <p class="mb-0">{{ item.selectedDrug }}</p>
            <p class="mb-0">Dosis: {{ item.dosage }}</p>
            <p class="mb-0">{{ item.frequency }}</p>
            <CButton
                color="danger"
                @click.prevent="removeItemFromArray(index)"
            >
              <font-awesome-icon :icon="['fas', 'trash']"/>
            </CButton>
          </div>

        </CListGroupItem>
      </CListGroup>
    </CCol>


    <CCol md="12">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <CButton shape="rounded-pill" color="warning" class="me-md-2" type="reset">
          <font-awesome-icon :icon="['fas', 'brush']"/>
          Limpiar
        </CButton>
        <CButton
            shape="rounded-pill"
            color="primary"
            type="submit"
            :disabled="!pharmacologicalHistory.length"
        >
          <font-awesome-icon :icon="['fas', 'floppy-disk']"/>
          Guardar Registro Patológico
        </CButton>
      </div>
    </CCol>

  </CForm>
</template>

<style scoped>

</style>