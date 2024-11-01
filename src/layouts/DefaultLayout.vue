<script setup lang="ts">
import {CContainer} from "@coreui/vue/dist/esm/components/grid";
import AppSidebar from "../components/globals/AppSidebar.vue";
import AppHeader from "../components/globals/AppHeader.vue";
import AppFooter from "../components/globals/AppFooter.vue";
import {useDocumentTypesStore} from "@/stores/settings/documentTypesStore.ts";
import {onMounted} from "vue";
import {useSampleTypeStore} from "@/stores/sampleType/sampleTypeStore.ts";
import {useProtocolStore} from "@/stores/protocols/protocolStore.ts";
import {useUserStore} from "@/stores/authentication/userStore.ts";

const userStore = useUserStore()
const documentTypesStore = useDocumentTypesStore()
const protocolStore = useProtocolStore()
const sampleTypeStore = useSampleTypeStore()

onMounted(() => {
  userStore.storeInfo()
  documentTypesStore.fetchDocumentTypes()
  protocolStore.fetchActiveProtocols(1)
  sampleTypeStore.fetchSampleTypes()
})

</script>

<template>
  <div>
    <AppSidebar />
    <div class="wrapper d-flex flex-column min-vh-100">
      <AppHeader />
      <div class="body flex-grow-1">
        <CContainer class="px-4" lg>
          <router-view/>
        </CContainer>
      </div>
      <AppFooter />
    </div>
  </div>
</template>

<style scoped>

</style>