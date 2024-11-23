<script setup lang="ts">
import {ref} from 'vue'
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CModal, CModalBody, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import CreatePatientForm
  from "@/components/patients/patientCreation/subComponents/PatientMenuComponent/Forms/CreatePatientForm.vue";

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
      Crear Pacientes
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
          Ventana: Creación de Pacientes
        </CModalTitle>
      </CModalHeader>
      <CModalBody>

        <CreatePatientForm />

      </CModalBody>
      <!--    <CModalFooter>
            <CButton color="secondary" @click="() => { visibleStaticBackdropDemo = false }">
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>-->
    </CModal>
  </div>

</template>