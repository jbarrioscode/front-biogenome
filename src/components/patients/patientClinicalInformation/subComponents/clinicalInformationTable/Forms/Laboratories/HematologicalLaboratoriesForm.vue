<script setup lang="ts">

import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {reactive, ref} from "vue";
import dayjs from "dayjs";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CCard, CCardBody, CCardTitle} from "@coreui/vue/dist/esm/components/card";

const formData = reactive({
  hematologicalLabDate: null,
  hematologicalHB: null,
  hematologicalLeucocitos: null,
  hematologicalNeutrofilos: null,
  hematologicalLinfocitos: null,
  hematologicalPlaquetas: null,
})
const hematologicalHistory = ref([])
const isSavingHematologicalLaboratories = ref(false)

function addLabsToArray() {
  hematologicalHistory.value.push({...formData})
  clearFields()
}

function removeLabFromArray(index: number) {
  hematologicalHistory.value.splice(index, 1)
}

function clearFields() {
  formData.hematologicalLabDate = null
  formData.hematologicalHB = null
  formData.hematologicalLeucocitos = null
  formData.hematologicalNeutrofilos = null
  formData.hematologicalLinfocitos = null
  formData.hematologicalPlaquetas = null
}


</script>

<template>

  <CRow>

    <!-- Laboratories Form -->
    <CCol md="4" class="border-end">
      <CForm class="row g-3">
        <CCol md="12">
          <CFormLabel for="inputLabDate">Fecha de laboratorio:</CFormLabel>
          <CFormInput
              id="inputLabDate"
              type="date"
              required
              :max="dayjs().format('YYYY-MM-DD')"
              v-model="formData.hematologicalLabDate"
          />
        </CCol>
        <CCol md="12">
          <CFormLabel for="inputHB">1. HB:</CFormLabel>
          <CFormInput v-model="formData.hematologicalHB" required type="text" id="inputHB"
                      placeholder="Resultado en gr/dl"/>
        </CCol>
        <CCol md="12">
          <CFormLabel for="inputLeucocitos">2. Leucocitos:</CFormLabel>
          <CFormInput v-model="formData.hematologicalLeucocitos"
                      required type="text"
                      id="inputLeucocitos"
                      placeholder="Resultado en 10*3/UL"
          />
        </CCol>
        <CCol md="12">
          <CFormLabel for="inputNeutrofilos">3. Neutrofilos:</CFormLabel>
          <CFormInput v-model="formData.hematologicalNeutrofilos"
                      required type="text"
                      id="inputNeutrofilos"
                      placeholder="Resultado en 10*3/U"
          />
        </CCol>
        <CCol md="12">
          <CFormLabel for="inputLinfocitos">4. Linfocitos:</CFormLabel>
          <CFormInput v-model="formData.hematologicalLinfocitos"
                      required type="text"
                      id="inputLinfocitos"
                      placeholder="Resultado en 10*3/U"
          />
        </CCol>
        <CCol md="12" class="mb-4">
          <CFormLabel for="inputPlaquetas">5. Plaquetas:</CFormLabel>
          <CFormInput v-model="formData.hematologicalPlaquetas"
                      required type="text"
                      id="inputPlaquetas"
                      placeholder="Resultado en 10*3/U"
          />
        </CCol>

        <CCol md="12">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <CButton
                color="warning"
                variant="outline"
                shape="rounded-pill"
                class="me-md-2"
                type="reset"
            >
              <font-awesome-icon :icon="['fas', 'brush']"/>
              Limpiar
            </CButton>
            <CButton
                color="primary"
                variant="outline"
                shape="rounded-pill"
                type="button"
                @click.prevent="addLabsToArray"
            >
              <font-awesome-icon :icon="['fas', 'list-check']"/>
              Agregar al listado
            </CButton>
          </div>
        </CCol>

      </CForm>
    </CCol>
    <!-- End Laboratories Form -->

    <!-- Laboratories List -->
    <CCol md="8">

      <CCard v-if="!hematologicalHistory.length">
        <CCardBody class="text-center">No hay Laboratorios aún</CCardBody>
      </CCard>

      <CCard v-else v-for="(item, index) in hematologicalHistory" :key="item" class="mb-2">
        <CCardBody>
          <CCardTitle>
            <div class="d-flex justify-content-between">
              <p class="mb-0">Resultados de Laboratorio del {{ item.hematologicalLabDate }}</p>
              <CButton
                  color="danger"
                  shape="rounded-pill"
                  @click.prevent="removeLabFromArray(index)"
              >
                <font-awesome-icon class="text-white" :icon="['fas', 'trash']" />
              </CButton>
            </div>
          </CCardTitle>

          <div>
            <ul>
              <li>Hb: {{ item.hematologicalHB }}</li>
              <li>Leucocitos: {{ item.hematologicalLeucocitos }}</li>
              <li>Neutrofilos: {{ item.hematologicalNeutrofilos }}</li>
              <li>Linfocitos: {{ item.hematologicalLinfocitos }}</li>
              <li>Plaquetas: {{ item.hematologicalPlaquetas }}</li>
            </ul>
          </div>

        </CCardBody>
      </CCard>
    </CCol>
    <!-- End Laboratories List -->

  </CRow>

</template>

<style scoped>

</style>