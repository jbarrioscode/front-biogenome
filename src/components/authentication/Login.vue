<script setup>

import {CForm, CFormInput, CInputGroup, CInputGroupText} from "@coreui/vue/dist/esm/components/form";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {reactive, ref} from "vue";
import {useAuthStore} from "@/stores/authentication/authStore.ts";
import {useRouter} from "vue-router";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner/index.js";
import {CImage} from "@coreui/vue/dist/esm/components/image/index.js";
import {CFormFeedback} from "@coreui/vue/dist/esm/components/form/index.js";
import {CCardFooter} from "@coreui/vue/dist/esm/components/card/index.js";

/* Import .ENV Variables */
const appConfig = reactive({
  app_name: import.meta.env.VITE_APP_NAME,
  app_version: import.meta.env.VITE_APP_VERSION,
  app_version_date: import.meta.env.VITE_APP_VERSION_DATE,
})

/* Using router */
const router = useRouter()

/* Using auth Store */
const authStore = useAuthStore()

/* Importing environment variables */
const appData = reactive({
  app_version: import.meta.env.VITE_APP_VERSION,
  app_version_date: import.meta.env.VITE_APP_VERSION_DATE,
})
/*const logoURL = "src/assets/images/biogenome_logo.jpeg"*/

const credentials = reactive({
  email: '',
  password: ''
})
const errors = ref({
  email: '',
  password: '',
  general: ''
})
const isAuthenticating = ref(false)

const validateForm = () => {
  let isValid = true
  errors.value = {
    email: '',
    password: '',
    general: ''
  }

  if (!credentials.email) {
    errors.value.email = 'El correo electrónico es requerido'
    isValid = false
  } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
    errors.value.email = 'Por favor, ingrese un correo electrónico válido'
    isValid = false
  }

  if (!credentials.password) {
    errors.value.password = 'La contraseña es requerida'
    isValid = false
  } else if (credentials.password.length < 6) {
    errors.value.password = 'La contraseña debe tener al menos 6 caracteres'
    isValid = false
  }

  return isValid
}

const loginFormFunction = async () => {

  if (!validateForm()) {
    return
  }
  isAuthenticating.value = true

  try {
    await authStore.loginFunction(credentials)

  } catch (error) {
    errors.value.general = 'Error de autenticación. Por favor, verifique sus credenciales.'
    console.error(error)
  } finally {
    isAuthenticating.value = false
  }
  await router.push({name: 'dashboard'})
}

</script>

<template>
  <CCol :md="6">
    <CCard class="p-4">
      <CCardBody>
        <CForm
            class="row g-3 needs-validation"
            @submit.prevent="loginFormFunction"
            ref="loginForm"
            novalidate
            :validate="validateForm"
        >

<!--          <CCol md="12" class="text-center">
            <CImage :src="logoURL" width="200" />
          </CCol>-->
          <CCol md="12" class="text-center mb-4">
            <h3>Proyecto MUESTRAS LABORATORIOS</h3>
            <p class="text-body-secondary">Ingresa acá a tu cuenta</p>
          </CCol>
          <CCol md="12">
            <CInputGroup class="has-validation">
              <CInputGroupText>
                <CIcon icon="cil-user"/>
              </CInputGroupText>
              <CFormInput
                  id="inputEmail"
                  autofocus
                  placeholder="Usuario o Email"
                  autocomplete="username"
                  v-model="credentials.email"
                  :invalid="!!errors.email"
                  :feedbackInvalid="errors.email"
                  required
              />
            </CInputGroup>
          </CCol>
          <CCol md="12" class="mb-4">
            <CInputGroup class="has-validation">
              <CInputGroupText>
                <CIcon icon="cil-lock-locked"/>
              </CInputGroupText>
              <CFormInput
                  id="inputPassword"
                  type="password"
                  placeholder="Contraseña"
                  autocomplete="current-password"
                  v-model="credentials.password"
                  :invalid="!!errors.password"
                  :feedbackInvalid="errors.password"
                  required
              />
            </CInputGroup>
          </CCol>

          <CCol md="12" v-if="errors.general">
            <div class="alert alert-danger" role="alert">
              {{ errors.general }}
            </div>
          </CCol>

          <CRow class="mb-5">
            <CCol>
              <CButton color="primary" :disabled="isAuthenticating" class="px-4" type="submit">
                <CSpinner as="span" size="sm" aria-hidden="true" v-if="isAuthenticating"/>
                <font-awesome-icon :icon="['fas', 'sign-in']" v-else />
                {{ isAuthenticating ? 'Ingresando...' : 'Iniciar Sesión' }}
              </CButton>
            </CCol>
            <CCol class="d-flex justify-content-end align-items-center">
              <RouterLink :to="{name: 'reset-password'}">
                <font-awesome-icon :icon="['fas', 'key']" />
                Olvidé mi contraseña?
              </RouterLink>
            </CCol>
          </CRow>

          <CRow>
            <CCol class="text-center">
              <p class="mb-0">Version_{{ appConfig.app_version }} de {{ appConfig.app_version_date }}</p>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  </CCol>
</template>

<style scoped>

</style>