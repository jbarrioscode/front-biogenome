<script setup lang="ts">

import {CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
</script>

<template>
  <div class="wrapper min-vh-100 d-flex flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <RouterView />
      </CRow>
    </CContainer>
  </div>
</template>


<style scoped>

</style>