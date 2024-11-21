<script setup lang="ts">

import {CForm, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol} from "@coreui/vue/dist/esm/components/grid";
import {inject, ref} from "vue";
import {cie10Diseases} from "@/utils/constants/cie10Diseases.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import PatientClinicalInformationService from "@/services/patients/PatientClinicalInformation.service.ts";

const Swal = inject('$swal')

const userStore = useUserStore()
const props = defineProps({
  sampleID: {
    type: Number,
    required: true
  }
})

const selectedPathology = ref('')
const selectedPathologies = ref([])
const isSavingData = ref(false)

function addItemToArray() {
  const exists = selectedPathologies.value.some(
      (item) => item.value === selectedPathology.value.value
  )
  if (exists) {
    Swal.fire({
      icon: "warning",
      title: "La patología ya fue seleccionada"
    })
  } else {
    selectedPathologies.value.push(selectedPathology.value)
  }
}

function removeItemFromArray(itemIndex: number) {
  selectedPathologies.value.splice(itemIndex, 1)
}

async function saveData() {

  isSavingData.value = true
  const payload = {
    user_id: userStore.id,
    muestra_id: props.sampleID,
    datos: formatObject(selectedPathologies.value),
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
      fecha: null,
      respuesta: item.value.toUpperCase(),
      pregunta_clinica_id: 9,
      valor: null
    })
  })
  return result
}

function clearFields() {
  selectedPathology.value = ''
}

function clearArray() {
  selectedPathologies.value = []
}

</script>

<template>

  <CForm class="row g-3" @submit.prevent="saveData">

    <CCol md="12" class="mb-4">
      <CFormLabel for="">Seleccione la Patología:</CFormLabel>
      <VueMultiselect
          id="input-select-pathology"
          v-model="selectedPathology"
          :allow-empty="false"
          :close-on-select="true"
          :options="cie10Diseases"
          label="value"
          placeholder="Selecciones una patología"
          searchable
          track-by="value"
          @select="addItemToArray"
      />
    </CCol>

    <CCol md="12" class="mb-5">
      <CListGroup>
        <CListGroupItem v-for="(item, index) in selectedPathologies" :key="item">

          <div class="d-flex justify-content-between">
            <p class="mb-0">{{ item.value }}</p>
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
        <CButton shape="rounded-pill" color="warning" class="me-md-2" type="reset" @click.prevent="clearArray">
          <font-awesome-icon :icon="['fas', 'brush']"/>
          Limpiar
        </CButton>
        <CButton
            shape="rounded-pill"
            color="primary"
            type="submit"
            :disabled="!selectedPathologies.length"
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