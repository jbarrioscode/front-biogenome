<script setup lang="ts">

import {CForm, CFormLabel} from "@coreui/vue/dist/esm/components/form";
import {CCol} from "@coreui/vue/dist/esm/components/grid";
import {onMounted, reactive, ref} from "vue";
import {cie10Diseases} from "@/utils/constants/cie10Diseases.ts";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CListGroup, CListGroupItem} from "@coreui/vue/dist/esm/components/list-group";

const selectedPathologies = ref([])
const formData = reactive({
  selectedPathology: ""
})

const pathologicalItems = ref([
  {
    label: "A000-COLERA DEBIDO A VIBRIO CHOLERAE 01, BIOTIPO CHOLERAE",
    value: "A000-COLERA DEBIDO A VIBRIO CHOLERAE 01, BIOTIPO CHOLERAE"
  },
  {
    label: "A001-COLERA DEBIDO A VIBRIO CHOLERAE 01, BIOTIPO EL TOR",
    value: "A001-COLERA DEBIDO A VIBRIO CHOLERAE 01, BIOTIPO EL TOR"
  },
  {
    label: "A009-COLERA, NO ESPECIFICADO",
    value: "A009-COLERA, NO ESPECIFICADO"
  },
  {
    label: "A010-FIEBRE TIFOIDEA",
    value: "A010-FIEBRE TIFOIDEA"
  },
])

function addItemsToArray() {
  selectedPathologies.value.push(formData.selectedPathology)
}

function removeItemFromArray(itemIndex: number) {
  selectedPathologies.value.splice(itemIndex, 1)
}

function saveData(): void { {
  alert('acá Patología')
}}

</script>

<template>

  <CForm class="row g-3" @submit.prevent="saveData">

    <CCol md="12" class="mb-3">
      <CFormLabel for="">Seleccione la Patología:</CFormLabel>
      <custom-select
          v-model="formData.selectedPathology"
          :options="pathologicalItems"
          placeholder="Seleccione la opción"
          @option-selected="addItemsToArray"
      />
    </CCol>

    <CCol md="12">
      <CListGroup>
        <CListGroupItem v-for="(item, index) in selectedPathologies" :key="item">

          <div class="d-flex justify-content-between">
            <p class="mb-0">{{ item }}</p>
            <CButton
                color="danger"
                @click.prevent="removeItemFromArray(index)"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </CButton>
          </div>

        </CListGroupItem>
      </CListGroup>
    </CCol>

    <CCol md="12">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <CButton shape="rounded-pill" color="warning" class="me-md-2" type="reset">
          <font-awesome-icon :icon="['fas', 'brush']" />
          Limpiar
        </CButton>
        <CButton shape="rounded-pill" color="primary" type="submit">
          <font-awesome-icon :icon="['fas', 'floppy-disk']" />
          Guardar Registro Patológico
        </CButton>
      </div>
    </CCol>

  </CForm>

</template>

<style scoped>

</style>