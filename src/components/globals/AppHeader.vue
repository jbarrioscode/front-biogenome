<script setup lang="ts">

import {CHeader, CHeaderNav, CHeaderToggler} from "@coreui/vue/dist/esm/components/header";
import {onMounted, ref} from "vue";
import {CContainer} from "@coreui/vue/dist/esm/components/grid";
import AppHeaderDropdownAccount from "./subComponents/AppHeaderDropdownAccount.vue";
import {useSidebarStore} from "@/stores/globals/sidebarStore.ts";

const sidebar = useSidebarStore()
const headerClassNames = ref('bg-primary mb-4 p-0')

onMounted(() => {
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 0) {
      headerClassNames.value = 'bg-primary mb-4 p-0 shadow-sm'
    } else {
      headerClassNames.value = 'bg-primary mb-4 p-0'
    }
  })
})

</script>

<template>
  <CHeader position="sticky" :class="headerClassNames" style="background: #252f56 !important; ">
    <CContainer class="px-4" fluid>
      <CHeaderToggler
          :class="['d-lg-none', { 'prevent-hide': !sidebar.visible }]"
          @click="sidebar.toggleVisible()"
          style="margin-inline-start: -14px"
      >
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <CHeaderNav class="d-none d-md-flex ms-auto" />
      <CHeaderNav class="text-end">
        <AppHeaderDropdownAccount />
      </CHeaderNav>
    </CContainer>
  </CHeader>
</template>

<style scoped>

</style>