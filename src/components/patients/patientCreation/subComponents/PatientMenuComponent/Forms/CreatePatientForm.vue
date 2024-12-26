<script setup lang="ts">
import {useDocumentTypesStore} from "@/stores/settings/documentTypesStore.ts";
import {CForm, CFormInput, CFormLabel, CFormSelect} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {inject, onMounted, reactive, ref} from "vue";
import {gendersConstant} from "@/utils/constants/genders.constant.ts";
import {bloodGroupConstant} from "@/utils/constants/bloodGroup.constant.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import PatientService from "@/services/patients/Patient.service.ts";
import {usePatientStore} from "@/stores/patients/patientStore.ts";

import Swal from 'sweetalert2'

const patientStore = usePatientStore()
const documentTypesStore = useDocumentTypesStore()
const documentTypes = ref(null)
const loadingDocumentTypes = ref(null)

/* Form Fields */
const formData = reactive({
  tipo_doc: null,
  numero_documento: null,
  primer_nombre: null,
  segundo_nombre: null,
  primer_apellido: null,
  segundo_apellido: null,
  genero: null,
  grupo_sanguineo: null,
  email: null,
  telefono_celular: null,
  fecha_nacimiento: null,
  fecha_expedicion: '01/01/1990',
  pais_residencia: null,
  departamento_residencia: null,
  ciudad_residencia: null,
})

const savePatient = async () => {

  try {

    const payload = {
      ...formData
    }

    const res = await PatientService.createPatient(payload)
    Swal.fire({
      icon: 'success',
      text: res.data.message,
      title: "Buen Trabajo!",
    })
    await patientStore.fetchPatientsList()

  } catch (error) {
    Swal.fire({
      icon: 'error',
      text: error.response.message,
    })
    console.log(error.response.message)
  }

}

onMounted(() => {
  documentTypes.value = documentTypesStore.documentTypes
  loadingDocumentTypes.value = documentTypesStore.isLoadingDocumentTypes
})

</script>

<template>

  <div>
    <CForm class="row g-3" @submit.prevent="savePatient">
      <CCol>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputPatientDocumentType">Tipo de documento:</CFormLabel>
            <CFormSelect id="inputPatientDocumentType" v-model="formData.tipo_doc">
              <option :value="null">Seleccione el tipo de documento</option>
              <option v-for="item in documentTypes"
                      :key="item.id"
                      :value="item.initials"
              >
                {{ item.name }}
              </option>
            </CFormSelect>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputPatientDocument">Documento del paciente:</CFormLabel>
            <CFormInput type="number" placeholder="Documento del paciente" id="inputPatientDocument" v-model="formData.numero_documento"/>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputPatientFirstName">Primer Nombre:</CFormLabel>
            <CFormInput type="text" placeholder="Primer Nombre" id="inputPatientFirstName" v-model="formData.primer_nombre"/>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputPatientSecondName">Segundo Nombre:</CFormLabel>
            <CFormInput type="text" placeholder="Segundo Nombre" id="inputPatientSecondName" v-model="formData.segundo_nombre"/>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputPatientFirstLastName">Primer Apellido:</CFormLabel>
            <CFormInput type="text" placeholder="Primer Apellido" id="inputPatientFirstLastName" v-model="formData.primer_apellido"/>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputPatientSecondLastName">Segundo Apellido:</CFormLabel>
            <CFormInput type="text" placeholder="Segundo Apellido" id="inputPatientSecondLastName" v-model="formData.segundo_apellido"/>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="4">
            <CFormLabel for="inputPatientBirthDay">Fecha de Nacimiento:</CFormLabel>
            <CFormInput type="date" id="inputPatientBirthDay" v-model="formData.fecha_nacimiento"/>
          </CCol>
          <CCol md="4">
            <CFormLabel for="inputPatientGender">Genero:</CFormLabel>
            <CFormSelect id="inputPatientGender" v-model="formData.genero">
              <option value="">Seleccione el genero</option>
              <option v-for="item in gendersConstant"
                      :key="item.value"
                      :value="item.value"
              >
                {{ item.name }}
              </option>
            </CFormSelect>
          </CCol>
          <CCol md="4">
            <CFormLabel for="inputPatientBloodGroup">G.S. RH:</CFormLabel>
            <CFormSelect id="inputPatientBloodGroup" v-model="formData.grupo_sanguineo">
              <option value="">Seleccione el G.S. RH</option>
              <option v-for="item in bloodGroupConstant"
                      :key="item.value"
                      :value="item.value"
              >
                {{ item.name }}
              </option>
            </CFormSelect>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputPatientEmail">Email del paciente:</CFormLabel>
            <CFormInput type="email" placeholder="Email del paciente" id="inputPatientEmail" v-model="formData.email"/>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputPatientPhone">Teléfono del Paciente:</CFormLabel>
            <CFormInput type="text" placeholder="Teléfono del Paciente" id="inputPatientPhone" v-model="formData.telefono_celular"/>
          </CCol>
        </CRow>

        <CRow class="mb-5">
          <CCol md="4">
            <CFormLabel for="inputPatientCountryBirth">Pais de Nacimiento:</CFormLabel>
            <CFormSelect id="inputPatientCountryBirth" v-model="formData.pais_residencia">
              <option value="">Seleccione el pais</option>
              <option v-for="item in bloodGroupConstant"
                      :key="item.value"
                      :value="item.value"
              >
                {{ item.name }}
              </option>
            </CFormSelect>
          </CCol>
          <CCol md="4">
            <CFormLabel for="inputPatientStateBirth">Departamento de Nacimiento:</CFormLabel>
            <CFormSelect id="inputPatientStateBirth" v-model="formData.departamento_residencia">
              <option value="">Seleccione el departamento</option>
              <option v-for="item in bloodGroupConstant"
                      :key="item.value"
                      :value="item.value"
              >
                {{ item.name }}
              </option>
            </CFormSelect>
          </CCol>
          <CCol md="4">
            <CFormLabel for="inputPatientCityBirth">Ciudad de Nacimiento:</CFormLabel>
            <CFormSelect id="inputPatientCityBirth" v-model="formData.ciudad_residencia">
              <option value="">Seleccione la ciudad</option>
              <option v-for="item in bloodGroupConstant"
                      :key="item.value"
                      :value="item.value"
              >
                {{ item.name }}
              </option>
            </CFormSelect>
          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton shape="rounded-pill" color="warning" type="reset" class="me-md-2">
                <CIcon icon="cil-x" />
                Cancelar
              </CButton>
              <CButton shape="rounded-pill" color="primary" type="submit">
                <CIcon icon="cil-save" />
                Registrar Paciente
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