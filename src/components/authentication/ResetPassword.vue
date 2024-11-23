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
          <p class="text-body-secondary">Solicitud de cambio de contraseña</p>
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon icon="cil-user"/>
            </CInputGroupText>
            <CFormInput
                placeholder="Email"
                autocomplete="username"
            />
          </CInputGroup>
          <CRow>
            <CCol>
              <CButton color="primary" class="px-4"> Recuperar mi contraseña</CButton>
            </CCol>
            <CCol class="d-flex justify-content-end align-items-center">
              <RouterLink :to="{name: 'login'}">
                Recordé mi Contraseña?
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