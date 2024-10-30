<script setup lang="ts">
import {ref} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import CreateRoleForm from "@/components/settings/roles/subComponents/roleMenuComponent/Forms/CreateRoleForm.vue";

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
      <CIcon icon="cil-plus"/>
      Crear Rol
    </CButton>

    <CModal
        backdrop="static"
        :visible="visibleStaticBackdropDemo"
        @close="() => { visibleStaticBackdropDemo = false }"
        aria-labelledby="StaticBackdropExampleLabel"
        size="lg"
    >
      <CModalHeader>
        <CModalTitle id="StaticBackdropExampleLabel">
          Ventana: Creación de Roles
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CreateRoleForm />

      </CModalBody>
    </CModal>
  </div>
</template>

<style scoped>

</style>