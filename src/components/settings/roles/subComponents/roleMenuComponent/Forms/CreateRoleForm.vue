<script setup lang="ts">
import {inject, reactive, ref} from "vue";
import RoleService from "@/services/settings/Role.service.ts";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";
import {useRoleStore} from "@/stores/settings/roleStore.ts";

const Swal = inject('$swal')

const roleStore = useRoleStore()

const formData = reactive({
  name: null
})
const isSavingRole = ref(false)
const errors = ref(null)

const saveRole = async () => {
  isSavingRole.value = true
  errors.value = null

  try {

    const payload = {...formData}

    const {data } = await RoleService.createRole(payload)

    Swal.fire({
      icon: 'success',
      text: data.message,
      title: "Buen Trabajo!",
    })

    formData.name = null
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

//name
</script>

<template>
  <div>
    <CForm class="row g-3" @submit.prevent="saveRole">
      <CCol>

        <CRow class="mb-5">
          <CCol>
            <CFormLabel for="inputRoleName">Nombre del ROL:</CFormLabel>
            <CFormInput type="text" placeholder="Rol" id="inputRoleName" v-model="formData.name"/>
          </CCol>
        </CRow>

        <CRow>
          <CCol>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <CButton shape="rounded-pill" color="warning" type="reset" class="me-md-2">
                <CIcon icon="cil-x" />
                Cancelar
              </CButton>
              <CButton shape="rounded-pill" color="primary" type="submit" :disabled="isSavingRole">
                <CSpinner as="span" size="sm" aria-hidden="true" v-if="isSavingRole" />
                <CIcon icon="cil-save" v-else />
                {{ isSavingRole ?  'Guardando...' : 'Registrar Rol' }}
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