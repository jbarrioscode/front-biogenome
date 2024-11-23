<script setup lang="ts">
import {ref} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import CreatePermissionForm
  from "@/components/settings/permissions/subComponents/permissionMenuComponent/Forms/CreatePermissionForm.vue";

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
      Crear Permiso
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
          Ventana: Creación de Permisos
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CreatePermissionForm />

      </CModalBody>
    </CModal>
  </div>
</template>

<style scoped>

</style>