<script setup>

import {CForm, CFormInput, CInputGroup, CInputGroupText} from "@coreui/vue/dist/esm/components/form";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {reactive, ref} from "vue";
import { useAuthStore } from "@/stores/authentication/authStore.ts";
import {useRouter} from "vue-router";

/* Using router */
const router = useRouter()

/* Using auth Store */
const store = useAuthStore()

/* Importing environment variables */
const appData = reactive({
  app_version: import.meta.env.VITE_APP_VERSION,
  app_version_date: import.meta.env.VITE_APP_VERSION_DATE,
})

const formData = reactive({
  email: '',
  password: ''
})

const errors = ref(null)

const loginFormFunction = async () => {
  try {
    await store.loginFunction(formData)
  } catch(error) {
    errors.value = error
    console.error(error)
  }
  await router.push({name: 'dashboard'})
}

</script>

<template>
  <CCol :md="6">
    <CCard class="p-4">
      <CCardBody>
        <CForm @submit.prevent="loginFormFunction" ref="loginForm">
          <h1>Biogenome</h1>
          <p class="text-body-secondary">Ingresa acá a tu cuenta</p>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cil-user"/>
            </CInputGroupText>
            <CFormInput
                autofocus
                placeholder="Usuario o Email"
                autocomplete="username"
                v-model="formData.email"
            />
          </CInputGroup>
          <CInputGroup class="mb-4">
            <CInputGroupText>
              <CIcon icon="cil-lock-locked"/>
            </CInputGroupText>
            <CFormInput
                type="password"
                placeholder="Contraseña"
                autocomplete="current-password"
                v-model="formData.password"
            />
          </CInputGroup>
          <CRow>
            <CCol>
              <CButton
                  color="primary"
                  class="px-4"
                  type="submit"
              >
                Iniciar Sesión
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