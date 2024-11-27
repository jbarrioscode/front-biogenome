<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import FollowUpMenuComponent
  from "@/components/samples/followUp/SubComponents/followUpInformationMenu/FollowUpMenuComponent.vue";
import FollowUpTableComponent
  from "@/components/samples/followUp/SubComponents/followUpInformationTable/FollowUpTableComponent.vue";
</script>

<template>
  <CContainer fluid>

    <CRow>
      <CCol>
        <FollowUpMenuComponent/>
      </CCol>
    </CRow>

    <CRow>
      <CCol>
        <FollowUpTableComponent/>
      </CCol>
    </CRow>

  </CContainer>
</template>

<style scoped>

</style>