<script setup lang="ts">
import {inject, onMounted, reactive, ref} from "vue";
import RoleService from "@/services/settings/Role.service.ts";
import {CForm, CFormCheck, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";
import {useRoleStore} from "@/stores/settings/roleStore.ts";
import {usePermissionStore} from "@/stores/settings/permissionStore.ts";

import Swal from 'sweetalert2'

const roleStore = useRoleStore()
const permissionStore = usePermissionStore()

const formData = reactive({
  name: null,
  permissions: []
})
const isSavingRole = ref(false)
const errors = ref(null)

const saveRole = async () => {
  isSavingRole.value = true
  errors.value = null
  try {

    const payload = {...formData}

    const {data} = await RoleService.createRole(payload)

    Swal.fire({
      icon: 'success',
      text: data.message,
      title: "Buen Trabajo!",
    })

    formData.name = null
    formData.permissions = []
    await roleStore.fetchRoles()
    isSavingRole.value = false

  } catch (error) {
    errors.value = error.response.message
    Swal.fire({
      icon: 'error',
      text: errors.value,
    })
    isSavingRole.value = false
  } finally {
    isSavingRole.value = false
  }
}
</script>

<template>
  <div>
    <CForm class="row g-3" @submit.prevent="saveRole">
      <CCol>

        <CRow class="mb-3">
          <CCol>
            <CFormLabel for="inputRoleName">Nombre del ROL:</CFormLabel>
            <CFormInput type="text" placeholder="Rol" id="inputRoleName" v-model="formData.name"/>
          </CCol>
        </CRow>

        <CRow class="mb-5">
          <CCol>

            <div>
              <h5 class="fw-bolder text-uppercase">Listado de Permisos</h5>
            </div>

            <div v-for="(item, index) in permissionStore.permissions" class="form-check">
              <CFormCheck
                  :id="`flexCheckDefault-${item.id}`"
                  v-model="formData.permissions"
                  :value="item.name"
                  checked
                  :label="item.name"
              />
            </div>


          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton shape="rounded-pill" color="warning" type="reset" class="me-md-2">
                <CIcon icon="cil-x"/>
                Cancelar
              </CButton>
              <CButton shape="rounded-pill" color="primary" type="submit"
                       :disabled="isSavingRole || (!formData.name || !formData.permissions.length)">
                <CSpinner as="span" size="sm" aria-hidden="true" v-if="isSavingRole"/>
                <CIcon icon="cil-save" v-else/>
                {{ isSavingRole ? 'Guardando...' : 'Registrar Rol' }}
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