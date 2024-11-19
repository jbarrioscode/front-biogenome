<script setup lang="ts">

import {ref} from "vue";
import dayjs from "dayjs";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCard, CCardBody, CCardHeader} from "@coreui/vue/dist/esm/components/card";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {hormonalLabsOptions} from "@/utils/constants/hormonalLabsOptions.ts";

const formDate = ref(null)
const formValues = ref({})
const hormonalHistory = ref([])

const addItemToLabArray = () => {
  const newData = {
    labDate: formDate.value,
    values: hormonalLabsOptions.map(option => ({
      labType: option.label,
      valueLab: `${formValues.value[option.model] || 0} ${option.unity}`,
    }))
  }
  hormonalHistory.value.push(newData)
  clearFields()
}

const removeLabFromArray = (index: number) => {
  hormonalHistory.value.splice(index, 1)
}

function clearFields() {
  formDate.value = null
  formValues.value = {}
}
function clearArray() {
  hormonalHistory.value = []
}

</script>

<template>
  <CRow>
    <CCol md="7" class="border-end">

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
            v-for="(item, index) in hormonalLabsOptions"
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

    <CCol md="5">

      <CCard v-if="!hormonalHistory.length">
        <CCardBody class="text-center">No hay Laboratorios aún</CCardBody>
      </CCard>

      <CCard v-for="(item, index) in hormonalHistory" :key="item" class="mb-2" v-else>
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
</template>

<style scoped>

</style>