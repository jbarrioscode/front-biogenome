<script setup lang="ts">
import {inject, ref} from "vue";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import dayjs from "dayjs";
import {biochemicalLabsOptions} from "@/utils/constants/biochemicalLabsOptions.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CCard, CCardBody, CCardHeader} from "@coreui/vue/dist/esm/components/card";
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

const formDate = ref(null)
const formValues = ref({})
const biochemicalHistory = ref([])
const isSavingData = ref(false)

const addItemToLabArray = () => {
  const newData = {
    labDate: formDate.value,
    values: biochemicalLabsOptions.map(option => ({
      labType: option.label,
      valueLab: `${formValues.value[option.model] || 0} ${option.unity}`,
    }))
  }
  biochemicalHistory.value.push(newData)
  clearFields()
}

const removeLabFromArray = (index: number) => {
  biochemicalHistory.value.splice(index, 1)
}

async function saveData() {

  isSavingData.value = true
  const payload = {
    user_id: userStore.id,
    muestra_id: props.sampleID,
    datos: formatObject(biochemicalHistory.value),
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
    item.values.forEach(lab => {
      result.push({
        fecha: item.labDate,
        respuesta: lab.labType.toUpperCase(),
        valor: lab.valueLab.toUpperCase(),
        pregunta_clinica_id: 4,
        unidad: 'MG'
      })
    })
  })
  return result
}

function clearFields() {
  formDate.value = null
  formValues.value = {}
}

function clearArray() {
  biochemicalHistory.value = []
}

</script>

<template>

  <CRow>
    <CCol md="6" class="border-end">

      <CForm @submit.prevent="addItemToLabArray">

        <CRow class="mb-3">
          <CCol md="12">
            <CFormLabel for="inputLabelDate">Fecha de laboratorio:</CFormLabel>
            <CFormInput
                v-model="formDate"
                id="inputLabelDate"
                type="date"
                required
                :max="dayjs().format('YYYY-MM-DD')"
            />
          </CCol>
        </CRow>

        <CRow
            class="mb-2"
            v-for="(item, index) in biochemicalLabsOptions"
            :key="item.value"
        >
          <CFormLabel
              :for="item.value"
              class="col-sm-3 col-form-label"
          >
            {{ item.label }}:
          </CFormLabel>
          <CCol
              sm="7"
          >
            <CFormInput
                :id="item.value"
                v-model="formValues[item.model]"
                :placeholder="item.value"
                type="text"
            />
          </CCol>
          <CCol
              sm="2"
              class="text-center"
          >
            {{ item.unity }}
          </CCol>
        </CRow>

        <CRow class="mt-5">
          <CCol>
            <div class="d-grid gap-2 col-6 mx-auto">
              <CButton
                  color="primary"
                  variant="outline"
                  shape="rounded-pill"
                  type="submit"
              >
                <font-awesome-icon :icon="['fas', 'plus']"/>
                Agregar Registro
              </CButton>
            </div>
          </CCol>
        </CRow>


      </CForm>


    </CCol>

    <CCol md="6">

      <CRow>
        <CCol md="12" class="d-flex mb-3 justify-content-end">
          <CButton
              color="success"
              @click.prevent="saveData"
              shape="rounded-pill"
              :disabled="isSavingData || !biochemicalHistory.length"
          >
            <font-awesome-icon :icon="['fas', 'floppy-disk']"/>
            {{ isSavingData ? 'Guardando Laboratorios' : 'Guardar Laboratorios' }}
          </CButton>
        </CCol>

        <CCol md="12">

          <CCard v-if="!biochemicalHistory.length">
            <CCardBody class="text-center">No hay Laboratorios aún</CCardBody>
          </CCard>

          <CCard v-for="(item, index) in biochemicalHistory" :key="item" class="mb-2" v-else>
            <CCardHeader>
              <div class="d-flex justify-content-between">
                <p class="mb-0">Laboratorio del día: {{ item.labDate }}</p>
                <CButton
                    color="danger"
                    size="sm"
                    @click.prevent="removeLabFromArray(index)"
                >
                  <font-awesome-icon
                      class="text-white"
                      :icon="['fas', 'trash']"
                  />
                </CButton>
              </div>
            </CCardHeader>
            <CCardBody>
              <ul>
                <li v-for="(info, key) in item.values" :key="info">
                  <strong>
                    {{ info.labType }}:
                  </strong> {{ info.valueLab }}
                </li>
              </ul>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CCol>
  </CRow>

</template>

<style scoped>

</style>