<script setup lang="ts">

import {CForm, CFormInput, CFormLabel, CFormSelect} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {inject, reactive} from "vue";
import {useDocumentTypesStore} from "@/stores/settings/documentTypesStore.ts";
import {useRoleStore} from "@/stores/settings/roleStore.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import UsersService from "@/services/settings/Users.service.ts";

const Swal = inject('$swal')

const documentTypesStore = useDocumentTypesStore()
const roleStore = useRoleStore()

const formData = reactive({
  firstName: null,
  middleName: null,
  lastName: null,
  surName: null,
  username: null,
  document_type_id: null,
  document: null,
  phone: null,
  address: null,
  email: null,
  password: null,
  role_id: null
})

const saveUser = async () => {

  try {

    const payload = {
      ...formData,
      password: formData.document
    }
    const {data, statusCode, message} = await UsersService.createUser(payload)

    if (statusCode !== 201) {
      Swal.fire({
        icon: 'error',
        text: message
      })
    }

    Swal.fire({
      icon: 'success',
      text: message,
      title: "Buen Trabajo!",
    })

  } catch (error) {
    swal.fire({
      icon: 'error',
      text: error.response.message,
    })
    console.log(error.response.message)
  }
}

</script>

<template>

  <div>

    <CForm class="row g-3" @submit.prevent="saveUser">
      <CCol>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputUserFirstName">Primer Nombre:</CFormLabel>
            <CFormInput type="text" placeholder="Primer Nombre" id="inputUserFirstName" v-model="formData.firstName"/>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputUserSecondName">Segundo Nombre:</CFormLabel>
            <CFormInput type="text" placeholder="Segundo Nombre" id="inputUserSecondName"
                        v-model="formData.middleName"/>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputUserLastName">Primer Apellido:</CFormLabel>
            <CFormInput type="text" placeholder="Primer Apellido" id="inputUserLastName" v-model="formData.lastName"/>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputUserSurName">Segundo Apellido:</CFormLabel>
            <CFormInput type="text" placeholder="Segundo Apellido" id="inputUserSurName" v-model="formData.surName"/>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputUserDocumentType">Tipo de documento:</CFormLabel>
            <CFormSelect id="inputUserDocumentType" v-model="formData.document_type_id">
              <option :value="null">Seleccione el tipo de documento</option>
              <option v-for="item in documentTypesStore.documentTypes"
                      :key="item.id"
                      :value="item.id"
              >
                {{ item.name }}
              </option>
            </CFormSelect>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputUserDocument">Documento del usuario:</CFormLabel>
            <CFormInput type="number" placeholder="Documento del usuario" id="inputUserDocument"
                        v-model="formData.document"/>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputUserPhone">Teléfono:</CFormLabel>
            <CFormInput type="text" placeholder="Teléfono" id="inputUserPhone" v-model="formData.phone"/>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputUserAddress">Dirección:</CFormLabel>
            <CFormInput type="text" placeholder="Dirección" id="inputUserAddress" v-model="formData.address"/>
          </CCol>
        </CRow>

        <CRow class="mb-3">
          <CCol md="6">
            <CFormLabel for="inputUserEmail">Email:</CFormLabel>
            <CFormInput autocomplete="off" type="email" placeholder="Email" id="inputUserEmail"
                        v-model="formData.email"/>
          </CCol>
          <CCol md="6">
            <CFormLabel for="inputUserPassword">Contraseña:</CFormLabel>
            <CFormInput autocomplete="off" type="password" placeholder="Contraseña" id="inputUserPassword"
                        v-model="formData.document"
                        disabled
                        readonly
            />
          </CCol>
        </CRow>

        <CRow class="mb-5">
          <CCol md="6">
            <CFormLabel for="inputUserRole">Rol del usuario:</CFormLabel>
            <CFormSelect id="inputUserRole" v-model="formData.role_id">
              <option :value="null">Seleccione el rol</option>
              <option v-for="item in roleStore.roles"
                      :key="item.id"
                      :value="item.id"
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
                Registrar Usuario
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