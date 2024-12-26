<script setup lang="ts">

import {inject, reactive, ref} from "vue";
import {IHeadquarter} from "@/utils/interfaces/headquarters/headquarters.ts";
import {CForm, CFormInput, CFormLabel, CFormTextarea} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import HeadquartersService from "@/services/settings/Headquarters.service.ts";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";
import {useHeadquartersStore} from "@/stores/settings/headquarters.store.ts";
import {useCountryStore} from "@/stores/geography/country.store.ts";
import VueSelect from "vue3-select-component";
import StateService from "@/services/geography/state.service.ts";
import Swal from 'sweetalert2'

const headquartersStore = useHeadquartersStore()
const countriesStore = useCountryStore()

const loaderParams = ref({
  color: '#4fc08d',
})

const formData = reactive<IHeadquarter>({
  nombre: null,
  descripcion: null,
  ciudad_id: 136
})

const states = ref([])
const cities = ref([])
const formatedCountries = countriesStore.countries.map(item => ({label: item.name, value: item.id }))
const selectedCountry = ref("")
const selectedState = ref("")

const isLoadingStates = ref(false)
const isLoadingCities = ref(false)
const isSavingHeadquarter = ref(false)

const saveHeadquarter = async () => {
  isSavingHeadquarter.value = true
  try {

    const payload = {
      ...formData,
    }

    const {data} = await HeadquartersService.createHeadquarter(payload)
    Swal.fire({
      icon: 'success',
      text: data.message,
      title: "Buen Trabajo!",
    })
    clearFields()
    await headquartersStore.fetchHeadquarters()
    isSavingHeadquarter.value = false
  } catch (error) {
    Swal.fire({
      icon: 'error',
      text: error.response.message,
    })
    isSavingHeadquarter.value = false
  } finally {
    isSavingHeadquarter.value = false
  }
}

const getStatesByCountryID = async () => {
  isLoadingStates.value = true
  try {
    if (selectedCountry.value) {
      const {data} = await StateService.getStateByCountryID(selectedCountry.value)
      states.value = data.data.map(item => ({label: item.name, value: item.id }))
      isLoadingStates.value = false
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      text: error.response.message,
    })
    isLoadingStates.value = false
  } finally {
    isLoadingStates.value = false
  }
}

function clearFields(): void {
  formData.nombre = null
  formData.descripcion = null
  formData.ciudad_id = 136
}

</script>

<template>

  <div>
    <CForm class="row g-3" @submit.prevent="saveHeadquarter">
      <CCol>

        <CRow class="mb-3">
          <CCol v-if="countriesStore.isLoadingCountries">
            <pulse-loader :loading="countriesStore.isLoadingCountries" :color="loaderParams.color"></pulse-loader>
          </CCol>
          <CCol v-else>
            <CFormLabel for="inputHeadquarterCountry">País de la sede:</CFormLabel>
            <VueSelect
                id="inputHeadquarterCountry"
                v-model="selectedCountry"
                :options="formatedCountries"
                placeholder="Select an option"
                :get-option-label="option => `${option.label}`"
                @click.prevent="getStatesByCountryID"
            />
          </CCol>
        </CRow>

        <CRow class="mb-3" v-if="countriesStore.countries.length">
          <CCol v-if="isLoadingStates">
            <pulse-loader :loading="isLoadingStates" :color="loaderParams.color"></pulse-loader>
          </CCol>
          <CCol v-else>
            <CFormLabel for="inputHeadquarterState">Departamento de la sede:</CFormLabel>
            <VueSelect
                id="inputHeadquarterState"
                v-model="selectedState"
                :options="states"
                placeholder="Select an option"
                :get-option-label="option => `${option.label}`"
            />
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="12">
            <CFormLabel for="inputHeadquarterName">Nombre:</CFormLabel>
            <CFormInput type="text" placeholder="Nombre" id="inputHeadquarterName" v-model="formData.nombre"/>
          </CCol>
        </CRow>
        <CRow class="mb-5">
          <CCol md="12">
            <CFormLabel for="inputHeadquarterDescription">Descripción:</CFormLabel>
            <CFormTextarea
                id="inputHeadquarterDescription"
                rows="3"
                placeholder="Descripción"
                v-model="formData.descripcion"
            />
          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton shape="rounded-pill" color="warning" type="reset" class="me-md-2">
                <font-awesome-icon :icon="['fas', 'times']"/>
                Cancelar
              </CButton>
              <CButton shape="rounded-pill" color="primary" type="submit" :disabled="isSavingHeadquarter">
                <CSpinner v-if="isSavingHeadquarter" as="span" size="sm" variant="grow" aria-hidden="true"/>
                <font-awesome-icon v-else :icon="['fas', 'floppy-disk']"/>
                {{ isSavingHeadquarter ? 'Creando Sede...' : 'Registrar Sede' }}
              </CButton>
            </div>
          </CCol>
        </CRow>

      </CCol>
    </CForm>
  </div>

</template>

<style scoped>

</style>