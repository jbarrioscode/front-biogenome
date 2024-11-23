<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CFormInput, CInputGroup, CInputGroupText} from "@coreui/vue/dist/esm/components/form";
import {CButton} from "@coreui/vue/dist/esm/components/button";
</script>

<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol :md="6">
          <span class="clearfix">
            <h1 class="float-start display-3 me-4">500</h1>
            <h4 class="pt-3">Houston, we have a problem!</h4>
            <p class="text-body-secondary float-start">
              The page you are looking for is temporarily unavailable.
            </p>
          </span>
          <CInputGroup class="input-prepend">
            <CInputGroupText>
              <CIcon icon="cil-magnifying-glass" />
            </CInputGroupText>
            <CFormInput type="text" placeholder="What are you looking for?" />
            <CButton color="info">Search</CButton>
          </CInputGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>


<style scoped>

</style>