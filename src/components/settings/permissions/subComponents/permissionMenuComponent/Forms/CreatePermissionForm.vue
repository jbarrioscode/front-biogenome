<script setup lang="ts">
import {inject, reactive, ref} from "vue";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";
import {usePermissionStore} from "@/stores/settings/permissionStore.ts";
import PermissionService from "@/services/settings/Permission.service.ts";

import Swal from 'sweetalert2'

const permissionStore = usePermissionStore()

const formData = reactive({
  name: null
})
const isSavingPermission = ref(false)
const errors = ref(null)

const savePermission = async () => {
  isSavingPermission.value = true
  errors.value = null

  try {

    const payload = {...formData}

    const {data } = await PermissionService.createPermission(payload)

    Swal.fire({
      icon: 'success',
      text: data.message,
      title: "Buen Trabajo!",
    })

    formData.name = null
    await permissionStore.fetchPermissions()
    isSavingPermission.value = false
    
  } catch (error) {
    errors.value = error.response.message
    Swal.fire({
      icon: 'error',
      text: errors.value,
    })
    isSavingPermission.value = false
  } finally {
    isSavingPermission.value = false
  }

}

//name
</script>

<template>
  <div>
    <CForm class="row g-3" @submit.prevent="savePermission">
      <CCol>

        <CRow class="mb-5">
          <CCol>
            <CFormLabel for="inputPermissionName">Nombre del PERMISO:</CFormLabel>
            <CFormInput type="text" placeholder="Rol" id="inputPermissionName" v-model="formData.name"/>
          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton shape="rounded-pill" color="warning" type="reset" class="me-md-2">
                <CIcon icon="cil-x" />
                Cancelar
              </CButton>
              <CButton shape="rounded-pill" color="primary" type="submit" :disabled="isSavingPermission">
                <CSpinner as="span" size="sm" aria-hidden="true" v-if="isSavingPermission" />
                <CIcon icon="cil-save" v-else />
                {{ isSavingPermission ?  'Guardando...' : 'Registrar Permiso' }}
              </CButton>
            </div>
          </CCol>
        </CRow>

      </CCol>
    </CForm>
  </div>
</template>

<style scoped>

</style>