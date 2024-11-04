<script setup lang="ts">

import {CButton} from "@coreui/vue/dist/esm/components/button"
import {ref} from "vue";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import CreateHeadquarterForm
  from "@/components/settings/headquarters/subComponents/headquartersMenuComponent/Forms/CreateHeadquarterForm.vue";

const visibleStaticBackdropDemo = ref(false)
</script>

<template>
  <div>
    <CButton
        size="sm"
        shape="rounded-pill"
        color="primary"
        @click="() => { visibleStaticBackdropDemo = true }"
    >
      <font-awesome-icon :icon="['fas', 'plus']" />
      Crear Sede
    </CButton>

    <CModal
        backdrop="static"
        :visible="visibleStaticBackdropDemo"
        @close="() => { visibleStaticBackdropDemo = false }"
        aria-labelledby="StaticBackdropExampleLabel"
        size="xl"
    >
      <CModalHeader>
        <CModalTitle id="StaticBackdropExampleLabel">
          Ventana: Creación de Sedes
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CreateHeadquarterForm />

      </CModalBody>
    </CModal>

  </div>
</template>

<style scoped>

</style>