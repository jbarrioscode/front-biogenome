<script setup lang="ts">
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle} from "@coreui/vue/dist/esm/components/modal";
import {inject, ref} from "vue";
import {onUnmounted} from "vue";
import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CIcon} from "@coreui/icons-vue"; // Importación del componente de iconos

import FollowUpService from "@/services/followUp/FollowUp.service";
import {CCard, CCardBody, CCardHeader, CCardText} from "@coreui/vue/dist/esm/components/card";
import dayjs from "dayjs";

import Swal from 'sweetalert2'

/* Defining Props */
const props = defineProps({
  sampleID: {
    type: String,
    required: true
  },
});

const infoLoadingStatus = ref(false)
const samplePhases = ref([])

const loaderParams = ref({
  color: '#4fc08d',
})

const getTrackingDetail = async (sample_code: string) => {

  infoLoadingStatus.value = true

  await FollowUpService.getTrackingDetailInfo(sample_code)
      .then((response) => {
        if (response.data.statusCode !== 200) {
          infoLoadingStatus.value = false
        } else {
          samplePhases.value = response.data.data
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
  samplePhases.value = []
  infoLoadingStatus.value = false
}

onUnmounted(onDestroy)

/*const fases = [
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
];*/


const visibleStaticBackdropDemo = ref(false);
</script>

<template>
  <CButton
      color="info"
      shape="rounded-pill"
      title="Estados"
      @click="() => { visibleStaticBackdropDemo = true; getTrackingDetail(props.sampleID)}"
      size="sm"
  >
    <font-awesome-icon :icon="['fab', 'wpforms']"/>
    Ver Trazabilidad
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
        Ventana: SEGUIMIENTO DE LA MUESTRA - {{ props.sampleID }}
      </CModalTitle>
    </CModalHeader>
    <CModalBody>
      <CRow class="mb-3">

        <CCol md="12" v-if="infoLoadingStatus" class="text-center">
          <pulse-loader :loading="infoLoadingStatus" :color="loaderParams.color"/>
        </CCol>

        <CCol md="12" v-else>
          <CRow class="mb-3">
            <CCol>
              <h5 class="text-center mb-4 text-uppercase">Fases del Proceso</h5>
            </CCol>
          </CRow>
          <CRow>
            <CCol md="6" lg="4" v-for="(phase, index) in samplePhases" :key="index" class="mb-4">
              <CCard class="mb-3 border-top-3" :class="phase.cumplido ? 'border-success' : 'border-secondary'"
                     style="max-width: 18rem">
                <CCardHeader class="d-flex justify-content-between align-items-center">
                  <span>{{ phase.estado }}</span>
                  <CIcon :name="'cil-task'" size="sm" class="text-success"/>
                </CCardHeader>
                <CCardBody>
                  <CCardText>
                    Usuario: {{ phase.nombre + ' ' + phase.apellido }}
                  </CCardText>
                  <CCardText>
                    Fecha:
                    <small class="text-body-secondary">
                      {{ phase.fecha }}
                    </small>
                  </CCardText>
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
            <CButton
                color="primary"
                shape="rounded-pill"
                @click="visibleStaticBackdropDemo = false"
            >
              <font-awesome-icon :icon="['fas', 'times']" />
              Cerrar Ventana
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
