<script setup lang="ts">

//import {ErrorMessage, Field, Form, useForm} from "vee-validate"
//import * as yup from "yup"
import {CForm, CFormInput, CInputGroup, CInputGroupText} from "@coreui/vue/dist/esm/components/form";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {reactive, ref} from "vue";
import {useAuthStore} from "@/stores/authentication/authStore.ts";
import {getRequestError} from "@/utils/helpers/getRequestError.ts";
import AuthService from "@/services/authentication/Auth.service.ts";
import {useRouter} from "vue-router";

/* Using router */
const router = useRouter()

/* Using auth Store */
const store = useAuthStore()
const isLoading = store.userLoading

/* Importing environment variables */
const appData = reactive({
  app_version: import.meta.env.VITE_APP_VERSION,
  app_version_date: import.meta.env.VITE_APP_VERSION_DATE,
})

/* Form ref */
//const loginForm =  ref(null)

/* Using YUP to validate schema */
/*const loginSchema = yup.object().shape({
  email: yup.string().required().email().min(6),
  password: yup.string().required()
})*/

const formData = reactive({
  email: '',
  password: ''
})

const errors = ref(null)

async function loginFunction() {

  store.updateUserLoadingState(true)
  errors.value = null

  try {

    await AuthService.login(formData)
    const authUser = await store.getAuthUserFunction()

    if (authUser) {

      store.updateUserLoadingState(false)
      store.setGuest({value: 'isNotGuest'})
      await router.push({name: 'dashboard'})

    } else {
      const error = Error(
          'No se pudo obtener la información del usuario, por favor valide el SERVICIO'
      )
      error.name = 'Fetch User'
      errors.value = getRequestError(error)
      throw error
    }

  } catch (e) {
    errors.value = getRequestError(e)
    store.updateUserLoadingState(false)
  }

}

</script>

<template>
  <CCol :md="6">
    <CCard class="p-4">
      <CCardBody>
<!--        <Form ref="loginForm" :validation-schema="loginSchema" @submit.prevent="loginFunction" :initial-values="formData">

          &lt;!&ndash; Email Input &ndash;&gt;
          <div class="mb-5">
            <label for="emailInput">Corre Electronico:</label>
            <Field id="emailInput" type="text" v-model="formData.email" name="email" class="form-control" validate-on-input/>
            <ErrorMessage name="email" class="text-danger" />
          </div>

          <div>
            <CButton
                color="warning"
                class="px-4 me-1"
                @click.prevent="resetLoginForm"
                type="button"
            >
              Limpiar
            </CButton>
            <CButton
                :disabled="isLoading"
                color="primary"
                class="px-4"
                type="submit"
            >
              Iniciar Sesión
            </CButton>
          </div>

        </Form>-->
        <CForm @submit.prevent="loginFunction" ref="loginForm">
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
                  :disabled="isLoading"
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