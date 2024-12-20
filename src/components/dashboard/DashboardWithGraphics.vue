<script setup lang="ts">

import {onBeforeMount, onMounted, reactive, ref} from "vue";
import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import DashboardService from "@/services/dashboard/Dashboard.service.ts";
import WidgetComponent from "@/components/globals/statistics/WidgetComponent.vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";

const dataDash = ref([])
const errors = ref(null)
const isLoadingDashboardInformation = ref(false)


/* Loader Props */
const loaderParams = ref({
  color: '#4fc08d',
})

const getDashboardDataFunction = async () => {

  isLoadingDashboardInformation.value = true
  try {

    const response = await DashboardService.getDashboardData()
    dataDash.value = response.data.data

  } catch (error) {

    console.error(error.response)

  } finally {
    isLoadingDashboardInformation.value = false
  }
}

onBeforeMount(() => {
  getDashboardDataFunction()
})

</script>

<template>

  <CContainer>

    <CRow class="mb-3">
      <CCol class="d-flex justify-content-end align-items-center">
        <CButton
            color="warning"
            size="sm"
            shape="rounded-pill"
            @click="getDashboardDataFunction"
        >
          <font-awesome-icon :icon="['fas', 'sync']" />
          Recargar
        </CButton>
      </CCol>
    </CRow>

    <CRow v-if="isLoadingDashboardInformation">
      <CCol class="text-center">
        <pulse-loader :loading="isLoadingDashboardInformation" :color="loaderParams.color"/>
      </CCol>
    </CRow>

    <CRow v-else>

      <CCol md="12" class="mb-4">

        <CRow>
          <CCol md="4">
            <CRow class="mb-3">
              <CCol md="12" class="text-center mb-3">
                <WidgetComponent
                    title="Muestras tomadas"
                    icon="cil-basket"
                    :quantity="dataDash?.totalmuestrastomadas || 0"
                />
              </CCol>
              <CCol md="12" class="text-center">
                <WidgetComponent
                    title="Muestras almacenadas"
                    icon="cil-inbox"
                    :quantity="dataDash?.muestrasAlmancenadas || 0"
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol md="8">
            <charts :options="dataDash?.pendientesecrf || []"/>
          </CCol>
        </CRow>

      </CCol>
      <CCol md="12">

        <CRow>
          <CCol md="6" class="text-center">
            <charts :options="dataDash?.MuestrasPorEstado || []"/>
          </CCol>

          <CCol md="6" class="text-center">
            <charts :options="dataDash?.muestrasPorSede || []"/>
          </CCol>
        </CRow>

      </CCol>

    </CRow>
  </CContainer>

</template>

<style scoped>

</style>