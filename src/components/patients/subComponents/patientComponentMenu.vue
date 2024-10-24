<script setup lang="ts">

import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
import {CButton} from "@coreui/vue/dist/esm/components/button";
</script>

<template>
  <CCard>
    <CCardBody>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <CButton size="sm" shape="rounded-pill" color="primary" class="me-md-1">
          <CIcon icon="cil-user-plus"/>
          Crear Paciente
        </CButton>
        <CButton size="sm" shape="rounded-pill" color="warning">
          <CIcon icon="cil-reload" />
          Recargar
        </CButton>
      </div>

    </CCardBody>
  </CCard>
</template>

<style scoped>

</style>