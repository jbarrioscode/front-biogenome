<script setup lang="ts">

import {CCol, CContainer, CRow} from "@coreui/vue/dist/esm/components/grid";
import ShelfAssignmentLocationComponent
  from "@/components/samples/shelfAssignment/SubComponents/ShelfAssignmentLocation/ShelfAssignmentLocationComponent.vue";
import {CCard, CCardBody} from "@coreui/vue/dist/esm/components/card";
</script>

<template>
  <CContainer xl>

    <CRow>
      <CCol md="8">
        <CRow>
          <CCol md="12" class="mb-3">
            <CCard>
              <CCardBody>
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <RouterLink class="nav-link" :to="{name: 'shelf-assignment-samples'}">
                      MUESTRAS
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <RouterLink class="nav-link" :to="{name: 'shelf-assignment-counter-samples'}">
                      CONTRAS MUESTRAS
                    </RouterLink>
                  </li>
                </ul>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol md="12">
            <RouterView />
          </CCol>
        </CRow>
      </CCol>
      <CCol md="4">
        <ShelfAssignmentLocationComponent />
      </CCol>
    </CRow>

  </CContainer>
</template>

<style scoped>

</style>