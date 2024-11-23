<script setup lang="ts">

import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import {inject, ref} from "vue";
import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CNav, CNavItem, CNavLink} from "@coreui/vue/dist/esm/components/nav";
import {CTabContent, CTabPane} from "@coreui/vue/dist/esm/components/tabs";
import {CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle} from "@coreui/vue/dist/esm/components/dropdown";
import {clinicalInformationTabs} from "@/utils/constants/clinicalInformationTabs.ts";
import PathologicalForm
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Forms/Background/PathologicalForm.vue";
import ImagesForm
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Forms/Images/ImagesForm.vue";
import PharmacologicalForm
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Forms/Background/PharmacologicalForm.vue";
import HematologicalLaboratoriesForm
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Forms/Laboratories/HematologicalLaboratoriesForm.vue";
import BiochemicalLaboratoriesForm
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Forms/Laboratories/BiochemicalLaboratoriesForm.vue";
import HormonalLaboratoriesForm
  from "@/components/patients/patientClinicalInformation/subComponents/clinicalInformationTable/Forms/Laboratories/HormonalLaboratoriesForm.vue";
import {useUserStore} from "@/stores/authentication/userStore.ts";
import PatientClinicalInformationService from "@/services/patients/PatientClinicalInformation.service.ts";
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";

const Swal = inject('$swal')

/* Defining Props */
const props = defineProps({
  patientCode: String,
  sampleID: Number
})

/* Invoking Store */
const userStore = useUserStore()

const visibleStaticBackdropDemo = ref(false)
const tabPanePillsActiveKey = ref(1)
const isClosingClinicalInformation = ref(false)

async function closePatientClinicalInformation() {

  isClosingClinicalInformation.value = true
  const payload = {
    muestra_id: props.sampleID,
    user_id: userStore.id
  }

  try {

    const response = await PatientClinicalInformationService.closePatientClinicalInformation(payload)

    Swal.fire({
      icon: 'success',
      title: response.data.message
    })
    isClosingClinicalInformation.value = false
  } catch (error) {
    console.log(error)
    Swal.fire({
      icon: 'error',
      title: error.response.message
    })
    isClosingClinicalInformation.value = false
  }

}

</script>

<template>
  <CButton
      color="info"
      shape="rounded-pill"
      title="Completar información de Historia"
      @click="() => { visibleStaticBackdropDemo = true }"
      size="sm"
  >
    <font-awesome-icon :icon="['fab', 'wpforms']" />
    Completar Historia
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
        Ventana: Información Clínica del Paciente - {{ props.patientCode }}
      </CModalTitle>
    </CModalHeader>
    <CModalBody>

      <!-- Clinical Information Modal Tab Menu  -->
      <CRow class="mb-3">
        <CCol>
          <CNav variant="pills" role="tablist">

            <CNavItem v-for="(tab, index) in clinicalInformationTabs" :key="tab.value">
              <CNavLink
                  href="javascript:void(0);"
                  :active="tabPanePillsActiveKey === tab.value"
                  @click="() => {tabPanePillsActiveKey = tab.value}"
                  v-if="tab.status"
              >
                {{ tab.name }}
              </CNavLink>
              <CDropdown variant="nav-item" v-else>
                <CDropdownToggle color="secondary">{{ tab.name }}</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem
                      href="javascript:void(0);"
                      v-for="(child, index) in tab.children"
                      :key="child.value"
                      :active="tabPanePillsActiveKey === child.value"
                      @click="() => {tabPanePillsActiveKey = child.value}"
                  >
                    {{ child.name }}
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavItem>
          </CNav>
        </CCol>
      </CRow>
      <!-- End Clinical Information Modal Tab Menu  -->

      <CRow class="mb-5">
        <CCol>
          <CTabContent>
<!--            <CTabPane role="tabpanel" aria-labelledby="evolution-tab" :visible="tabPanePillsActiveKey === 1">
              <EvolutionForm />
            </CTabPane>-->
<!--            <CTabPane role="tabpanel" aria-labelledby="background-tab" :visible="tabPanePillsActiveKey === 3">
              <BackgroundForm />
            </CTabPane>-->
            <CTabPane role="tabpanel" aria-labelledby="pathological-tab" :visible="tabPanePillsActiveKey === 4">
              <PathologicalForm :sampleID="sampleID" />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="pharmacological-tab" :visible="tabPanePillsActiveKey === 5">
              <PharmacologicalForm :sampleID="sampleID" />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="others-tab" :visible="tabPanePillsActiveKey === 6">
              <p>Otros Laboratorios</p>
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="hematological-tab" :visible="tabPanePillsActiveKey === 9">
              <HematologicalLaboratoriesForm :sampleID="sampleID" />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="biochemical-tab" :visible="tabPanePillsActiveKey === 10">
              <BiochemicalLaboratoriesForm :sampleID="sampleID" />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="hormonal-tab" :visible="tabPanePillsActiveKey === 11">
              <HormonalLaboratoriesForm :sampleID="sampleID" />
            </CTabPane>
            <CTabPane role="tabpanel" aria-labelledby="images-tab" :visible="tabPanePillsActiveKey === 12">
              <ImagesForm :sampleID="sampleID" />
            </CTabPane>
<!--            <CTabPane role="tabpanel" aria-labelledby="pathological-tab" :visible="tabPanePillsActiveKey === 13">
              <p>Anexos</p>
            </CTabPane>-->

          </CTabContent>
        </CCol>
      </CRow>

    </CModalBody>

    <CModalFooter>
      <CContainer>
        <CRow>
          <CCol class="d-flex justify-content-end align-items-center">
            <CButton
                color="primary"
                shape="rounded-pill"
                @click.prevent="closePatientClinicalInformation"
                :disabled="isClosingClinicalInformation"
            >
              <CSpinner as="span" size="sm" variant="grow" aria-hidden="true" v-if="isClosingClinicalInformation" />
              <font-awesome-icon :icon="['fas', 'floppy-disk']" v-else />
              {{ isClosingClinicalInformation ? 'Guardando Información Clínica...' : 'Cerrar Información Clínica' }}
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </CModalFooter>
  </CModal>

</template>

<style scoped>

</style>