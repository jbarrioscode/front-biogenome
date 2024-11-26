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

/* Using router */
const router = useRouter()

/* Using auth Store */
const auth = useAuthStore()

/* Importing environment variables */
const appData = reactive({
  app_version: import.meta.env.VITE_APP_VERSION,
  app_version_date: import.meta.env.VITE_APP_VERSION_DATE,
})
const logoURL = "src/assets/images/biogenome_logo.jpeg"

const credentials = reactive({
  email: '',
  password: ''
})

const errors = ref(null)
const isAuthenticating = ref(false)

const loginFormFunction = async () => {

  isAuthenticating.value = true

  try {
    await auth.loginFunction(credentials)

    isAuthenticating.value = false

  } catch (error) {
    errors.value = error
    console.error(error)
    isAuthenticating.value = false
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
        <CForm class="row g-3" @submit.prevent="loginFormFunction" ref="loginForm">

          <CCol md="12" class="text-center">
            <CImage :src="logoURL" width="200" />
          </CCol>
          <CCol md="12" class="text-center">
            <h3>Proyecto BIOGENOME</h3>
            <p class="text-body-secondary">Ingresa acá a tu cuenta</p>
          </CCol>
          <CCol md="12">
            <CInputGroup>
              <CInputGroupText>
                <CIcon icon="cil-user"/>
              </CInputGroupText>
              <CFormInput
                  autofocus
                  placeholder="Usuario o Email"
                  autocomplete="username"
                  v-model="credentials.email"
              />
            </CInputGroup>
          </CCol>
          <CCol md="12" class="mb-4">
            <CInputGroup >
              <CInputGroupText>
                <CIcon icon="cil-lock-locked"/>
              </CInputGroupText>
              <CFormInput
                  type="password"
                  placeholder="Contraseña"
                  autocomplete="current-password"
                  v-model="credentials.password"
              />
            </CInputGroup>
          </CCol>
          <CRow>
            <CCol>
              <CButton color="primary" :disabled="isAuthenticating" class="px-4" type="submit">
                <CSpinner as="span" size="sm" aria-hidden="true" v-if="isAuthenticating"/>
                {{ isAuthenticating ? 'Ingresando...' : 'Iniciar Sesión' }}
              </CButton>
            </CCol>
            <CCol class="d-flex justify-content-end align-items-center">
              <RouterLink :to="{name: 'reset-password'}">
                Olvidé mi contraseña?
              </RouterLink>
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>
  </CCol>
</template>

<style scoped>

</style>