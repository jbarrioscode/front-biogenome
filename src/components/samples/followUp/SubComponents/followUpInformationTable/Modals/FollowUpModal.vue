<script setup lang="ts">
import { CButton } from "@coreui/vue/dist/esm/components/button";
import { CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from "@coreui/vue/dist/esm/components/modal";
import { inject, ref } from "vue";
import {onUnmounted} from "vue";
import { CCol, CContainer, CRow } from "@coreui/vue/dist/esm/components/grid";
import { CIcon } from "@coreui/icons-vue"; // Importación del componente de iconos

import FollowUpService from "@/services/followUp/FollowUp.service";

const Swal = inject('$swal');

/* Defining Props */
const props = defineProps({
  codigo_muestra: String,
  sampleID: Number,
});

const infoLoadingStatus = ref(false)
const fase = ref([])

const getTrackingDetail = async (sampleID) => {

  infoLoadingStatus.value = true

  await FollowUpService.getTrackingDetailInfo(sampleID)
      .then((response) => {
        if (response.data.statusCode !== 200) {
          infoLoadingStatus.value = false
        } else {
          fase.value = response.data.data
          infoLoadingStatus.value = false
          //console.log(response.data.data)
        }
      })
      .catch((error) => {
        infoLoadingStatus.value = false
        //console.log(getError(error))
      })
}

function onDestroy() {
  fase.value = []
  infoLoadingStatus.value = false
}

onUnmounted(onDestroy)


const fases = [
  {
    nombre: "Registro muestra",
    fecha: "2024-11-27",
    user: "Jose Barrios",
    icono: "cil-task",
    cumplido: true,
  },
  {
    nombre: "Información clínica registrada",
    fecha: "Pendiente",
    user: "Pendiente",
    icono: "cil-task",
    cumplido: false,
  },
  {
    nombre: "Contra muestra almacenada",
    fecha: "Pendiente",
    user: "Pendiente",
    icono: "",
    cumplido: false,
  },
  {
    nombre: "Muestra enviada al exterior",
    fecha: "Pendiente",
    user: "Pendiente",
    icono: "",
    cumplido: false,
  },
];


const visibleStaticBackdropDemo = ref(false);
</script>

<template>
  <CButton
      color="info"
      shape="rounded-pill"
      title="Estados"
      @click="() => { visibleStaticBackdropDemo = true}"

      size="sm"
  >
    <font-awesome-icon :icon="['fab', 'wpforms']" />
    Estados
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
        Seguimiento muestra - {{ props.codigo_muestra }}
      </CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow class="mb-3">
        <CCol>
          <h5 class="text-center mb-4">Fases del Proceso</h5>
          <CRow>
            <CCol md="6" lg="3" v-for="(fase, index) in fases" :key="index" class="mb-4">
              <CCard class="mb-3 border-top-3" :class="fase.cumplido ? 'border-success' : 'border-secondary'" style="max-width: 18rem">
                <CCardHeader class="d-flex justify-content-between align-items-center">
                  <span>{{ fase.nombre }}</span>
                  <CIcon :name="'cil-task'" size="sm" :class="[fase.cumplido ? 'text-success' : 'text-secondary']" />
                </CCardHeader>
                <CCardBody>
                  <CListGroup flush>
                    <CListGroupItem>{{fase.user}}</CListGroupItem>
                    <CListGroupItem>{{fase.fecha}}</CListGroupItem>
                  </CListGroup>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CModalBody>

    <CModalFooter>
      <CContainer>
        <CRow>
          <CCol class="d-flex justify-content-end align-items-center">
            <CButton color="primary" shape="rounded-pill" @click="visibleStaticBackdropDemo = false">
              Cerrar
            </CButton>
          </CCol>
        </CRow>
      </CContainer>
    </CModalFooter>
  </CModal>
</template>

<style scoped>
.text-success {
  color: #28a745 !important;
}
.text-secondary {
  color: #6c757d !important;
}
.border-success {
  border-color: #28a745 !important;
}
.border-secondary {
  border-color: #6c757d !important;
}
</style>
