<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import HeadquartersMenuComponent
  from "@/components/settings/headquarters/subComponents/headquartersMenuComponent/HeadquartersMenuComponent.vue";
import HeadquartersTableComponent
  from "@/components/settings/headquarters/subComponents/headquartersTableComponent/HeadquartersTableComponent.vue";
import {useCountryStore} from "@/stores/geography/country.store.ts";
import {onMounted} from "vue";

const countriesStore = useCountryStore()

onMounted(() => {
  countriesStore.fetchCountries()
})

</script>

<template>
  <CContainer xl>
    <CRow class="mb-3">
      <CCol>
        <HeadquartersMenuComponent />
      </CCol>
    </CRow>
    <CRow>
      <CCol>
        <HeadquartersTableComponent />
      </CCol>
    </CRow>
  </CContainer>
</template>

<style scoped>

</style>