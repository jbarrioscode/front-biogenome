<script setup lang="ts">

import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";
import {CCard, CCardHeader} from "@coreui/vue/dist/esm/components/card";
</script>

<template>
  <CCard class="border-top-3 border-top-success">
    <CCardHeader class="text-center">
      Últimas Muestras ENVIADAS
    </CCardHeader>
    <CListGroup flush>
      <CListGroupItem as="a" href="#">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">MU5-FKHMMPLT-1-7</h5>
          <small class="text-body-secondary">3 days ago</small>
        </div>
        <p class="mb-1">Enviada al proveedor: {{ 'PROVEEDOR_ACÁ' }}</p>
        <small class="text-body-secondary">Enviada por: {{ 'USUARIO_ACÁ' }}</small>
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">MU5-FKHMMPLT-1-7</h5>
          <small class="text-body-secondary">3 days ago</small>
        </div>
        <p class="mb-1">Enviada al proveedor: {{ 'PROVEEDOR_ACÁ' }}</p>
        <small class="text-body-secondary">Enviada por: {{ 'USUARIO_ACÁ' }}</small>
      </CListGroupItem>
      <CListGroupItem as="a" href="#">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">MU5-FKHMMPLT-1-7</h5>
          <small class="text-body-secondary">3 days ago</small>
        </div>
        <p class="mb-1">Enviada al proveedor: {{ 'PROVEEDOR_ACÁ' }}</p>
        <small class="text-body-secondary">Enviada por: {{ 'USUARIO_ACÁ' }}</small>
      </CListGroupItem>
    </CListGroup>
  </CCard>
</template>

<style scoped>

</style>