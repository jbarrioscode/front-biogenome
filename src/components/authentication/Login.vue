<script setup lang="ts">

import {CForm, CFormInput, CInputGroup, CInputGroupText} from "@coreui/vue/dist/esm/components/form";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";

</script>

<template>
  <CCol :md="6">
    <CCard class="p-4">
      <CCardBody>
        <CForm>
          <h1>Biogenome</h1>
          <p class="text-body-secondary">Ingresa acá a tu cuenta</p>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cil-user"/>
            </CInputGroupText>
            <CFormInput
                placeholder="Usuario o Email"
                autocomplete="username"
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
            />
          </CInputGroup>
          <CRow>
            <CCol>
              <CButton color="primary" class="px-4"> Iniciar Sesión</CButton>
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