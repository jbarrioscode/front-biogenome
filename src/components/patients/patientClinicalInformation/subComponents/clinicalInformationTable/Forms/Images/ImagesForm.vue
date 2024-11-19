<script setup lang="ts">

import {CForm, CFormInput, CFormLabel, CFormSelect, CFormTextarea} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {diagnosticImaging} from "@/utils/constants/patientComplementaryInfo.constant.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {inject, reactive, ref} from "vue";
import dayjs from "dayjs";
import PatientClinicalInformationService from "@/services/patients/PatientClinicalInformation.service.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import {transformToUpperCase} from "@/utils/helpers/transformFormToUpperCase.ts";
import {CCard, CCardBody, CCardHeader} from "@coreui/vue/dist/esm/components/card";

const Swal = inject('$swal')

const userStore = useUserStore()
const props = defineProps({
  sampleID: {
    type: Number,
    required: true
  }
})

const formData = reactive({
  imageDate: null,
  imageType: null,
  imageResult: null
})
const imagesHistory = ref([])
const isSavingData = ref(false)

function addItemToArray() {
  imagesHistory.value.push({
    fecha: formData.imageDate,
    tipo_imagen: transformToUpperCase(formData.imageType),
    respuesta: transformToUpperCase(formData.imageResult),
    pregunta_clinica_id: 6,
  })
  clearFields()
}

function removeItemFromArray(index: number) {
  imagesHistory.value.splice(index, 1)
}

async function saveData() {

  isSavingData.value = true

  const payload = {
    user_id: userStore.id,
    muestra_id: props.sampleID,
    datos: imagesHistory.value,
  }
  console.log(payload)

  try {
    const response = await PatientClinicalInformationService.savePatientClinicalInformation(payload);
    Swal.fire({
      icon: "success",
      title: response.data.message,
    });
    isSavingData.value = false
    clearArray()
    clearFields();
  } catch (error) {
    isSavingData.value = false
    Swal.fire({
      icon: "error",
      title: error?.response?.message || "Ha Ocurrido un Error.",
    })
  }

}

function clearFields() {
  Object.keys(formData).forEach((key) => {
    formData[key] = null;
  });
}

function clearArray() {
  imagesHistory.value = []
}

</script>

<template>

  <CRow>

    <!-- Images Form -->
    <CCol>
      <CForm class="row g-3" @submit.prevent="addItemToArray">

        <CCol md="12">
          <CFormLabel for="imageDate">Fecha de la toma de imagen:</CFormLabel>
          <CFormInput
              type="date"
              id="imageDate"
              required
              :max="dayjs().format('YYYY-MM-DD')"
              v-model="formData.imageDate"
          />
        </CCol>
        <CCol md="12">
          <CFormLabel for="imageDate">Fecha de la toma de imagen:</CFormLabel>
          <CFormSelect
              aria-label="Default select example"
              required
              v-model="formData.imageType"
          >
            <option :value="null">Seleccione una opción</option>
            <option v-for="(item, index) in diagnosticImaging" :key="item.value">
              {{ item.label }}
            </option>
          </CFormSelect>
        </CCol>

        <CCol md="12" class="mb-3">
          <CFormLabel for="imageDate">Resultado de la imagen:</CFormLabel>
          <CFormTextarea
              rows="3"
              placeholder="Escriba acá el resultado de la imagen"
              required
              v-model="formData.imageResult"
          />
        </CCol>

        <CCol md="12">
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <CButton shape="rounded-pill" color="warning" class="me-md-2" type="reset">
              <font-awesome-icon :icon="['fas', 'brush']"/>
              Limpiar
            </CButton>
            <CButton shape="rounded-pill" variant="outline" color="primary" type="submit">
              <font-awesome-icon :icon="['fas', 'list-check']"/>
              Agregar al listado
            </CButton>
          </div>
        </CCol>

      </CForm>
    </CCol>
    <!-- End Images Form -->

    <!-- Images List -->
    <CCol>

      <CRow>

        <CCol md="12" class="d-flex mb-3 justify-content-end">
          <CButton
              color="success"
              @click.prevent="saveData"
              shape="rounded-pill"
              :disabled="isSavingData || !imagesHistory.length"
          >
            <font-awesome-icon :icon="['fas', 'floppy-disk']" />
            {{ isSavingData ? 'Guardando Imagenes' : 'Guardar Imagenes' }}
          </CButton>
        </CCol>

        <CCol md="12">
          <CCard v-if="!imagesHistory.length">
            <CCardBody>
              <p class="mb-0 text-center">No hay imagenes precargadas aún</p>
            </CCardBody>
          </CCard>

          <CCard v-else v-for="(item, index) in imagesHistory" :key="item" class="mb-3">
            <CCardHeader>
              <div class="d-flex justify-content-between">
                <p class="mb-0">Imagen tomada el: {{ item.fecha }}</p>
                <CButton
                    color="danger"
                    type="button"
                    @click.prevent="removeItemFromArray(index)"
                >
                  <font-awesome-icon :icon="['fas', 'trash']"/>
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <ul>
                <li>Tipo Imagen: {{ item.tipo_imagen }}</li>
                <li>Resultado de la Imagen: {{ item.respuesta }}</li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

    </CCol>
    <!-- End Images List -->

  </CRow>

</template>

<style scoped>

</style>