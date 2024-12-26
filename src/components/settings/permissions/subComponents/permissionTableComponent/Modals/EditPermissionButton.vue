<script setup lang="ts">

import {inject, reactive, ref} from "vue";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CForm, CFormInput, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import PermissionService from "@/services/settings/Permission.service.ts";
import {usePermissionStore} from "@/stores/settings/permissionStore.ts";

import Swal from 'sweetalert2'

const permissionStore = usePermissionStore()
const visibleStaticBackdropDemo = ref(false)
const isEditingPermission = ref(false)

const props = defineProps({
  permissionName: String,
  permissionId: Number
})

const formData = reactive({
  name: props.permissionName
})

const updatePermission = async () => {

  isEditingPermission.value = true
  try {
    const payload = {...formData}

    const {data} = await PermissionService.updatePermission(props.permissionId, payload)

    Swal.fire({
      icon: 'success',
      title: 'Buen trabajo!',
      text: data.message
    })
    visibleStaticBackdropDemo.value = false
    await permissionStore.fetchPermissions()
    isEditingPermission.value = false

  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Ooops!',
      text: error.response.message
    })
    isEditingPermission.value = false
  } finally {
    console.log('Actualizado')
    isEditingPermission.value = false
  }
}
</script>

<template>
  <div>
    <CButton
        size="sm"
        class="edit-button"
        @click="() => { visibleStaticBackdropDemo = true }"
    >
      <CIcon icon="cil-pencil"/>
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
          Ventana: Edición de Permisos
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CForm class="row g-3" @submit.prevent="updatePermission">
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
                  <CButton color="danger" class="me-md-2" shape="rounded-pill" @click="() => { visibleStaticBackdropDemo = false }">
                    Cancelar
                  </CButton>
                  <CButton color="warning" type="submit" shape="rounded-pill" :disabled="isEditingPermission">
                    {{ isEditingPermission ? 'Editando Permiso...' : 'Editar Permiso' }}
                  </CButton>
                </div>

              </CCol>
            </CRow>

          </CCol>
        </CForm>


      </CModalBody>
    </CModal>
  </div>
</template>

<style scoped>

</style>