<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
</script>

<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <div class="clearfix">
            <h1 class="float-start display-3 me-4 text-danger">404</h1>
            <h4 class="pt-3">Oops! Te has perdido?</h4>
            <p class="text-body-secondary float-start">
              No encontramos la página que estas buscando. :(
            </p>
          </div>
        </CCol>
      </CRow>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <RouterLink :to="{name:'dashboard'}">
            Regresar a la página principal
          </RouterLink>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<style scoped>

</style>