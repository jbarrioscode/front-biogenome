<script setup lang="ts">

import {CFooter} from "@coreui/vue/dist/esm/components/footer";
import {reactive} from "vue";
const appConfig = reactive({
  app_name: import.meta.env.VITE_APP_NAME,
  app_version: import.meta.env.VITE_APP_VERSION,
  app_version_date: import.meta.env.VITE_APP_VERSION_DATE,
})

</script>

<template>
  <CFooter class="px-4">
    <div>
      <a href="#" target="_blank">Platform</a>
      <span class="ms-1">&copy; {{ new Date().getFullYear() }} - V.{{ appConfig.app_version }} de {{ appConfig.app_version_date }}</span>
    </div>
    <div class="ms-auto">
      <span class="me-1">Powered by</span>
      <a href="#">mibCode</a>
    </div>
  </CFooter>
</template>

<style scoped>

</style>