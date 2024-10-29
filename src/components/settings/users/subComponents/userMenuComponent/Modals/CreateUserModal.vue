<script setup lang="ts">

import {ref} from "vue";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import CreateUserForm from "@/components/settings/users/subComponents/userMenuComponent/Forms/CreateUserForm.vue";

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
      <CIcon icon="cil-user-plus"/>
      Crear Usuario
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
          Ventana: Creación de Usuarios
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CreateUserForm />

      </CModalBody>
    </CModal>
  </div>

</template>

<style scoped>

</style>