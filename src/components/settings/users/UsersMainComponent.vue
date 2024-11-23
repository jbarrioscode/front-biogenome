<script setup>
import UserTableComponent from "@/components/settings/users/subComponents/userTableComponent/UserTableComponent.vue";
import UserMenuComponent from "@/components/settings/users/subComponents/userMenuComponent/UserMenuComponent.vue";
import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid/index.js";
</script>

<template>
  <CContainer xl>
    <CRow class="mb-3">
      <CCol>
        <UserMenuComponent/>
      </CCol>
    </CRow>
    <CRow class="mb-3">
      <CCol>
        <UserTableComponent/>
      </CCol>
    </CRow>
  </CContainer>
</template>
<style scoped>

</style>