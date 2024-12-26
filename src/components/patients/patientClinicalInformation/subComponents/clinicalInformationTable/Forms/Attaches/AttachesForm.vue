<script setup lang="ts">

import {CCol, CRow} from "@coreui/vue/dist/esm/components/grid";
import {CForm, CFormInput} from "@coreui/vue/dist/esm/components/form";
import {onMounted, ref} from "vue";
import {CButton} from "@coreui/vue/dist/esm/components/button";
import {CImage} from "@coreui/vue/dist/esm/components/image";
import FileManagementService from "@/services/fileManagement/FileManagement.service.ts";
import Swal from 'sweetalert2'
import {CSpinner} from "@coreui/vue/dist/esm/components/spinner";

const props = defineProps({
  sampleID: {
    type: Number,
    required: true
  },
  sampleCode: {
    type: String,
    required: true
  }
})
const file = ref(null)
const uploadedFiles = ref([])
const isLoadingFiles = ref(false)
const isSavingFiles = ref(false)
const errorMessage = ref(null)
/* Loader Props */
const loaderParams = ref({
  color: '#4fc08d',
})

const handleFiles = (event) => {
  file.value = event.target.files[0]
}

const uploadFiles = async () => {

  if (!props.sampleCode || !file.value) {
    await Swal.fire({
      'icon': 'warning',
      'text': 'Por favor, Seleccione un archivo',
    })
    return
  }

  isSavingFiles.value = true
  errorMessage.value = ''
  const formData = new FormData()
  formData.append('sampleID', props.sampleID)
  formData.append('sample', props.sampleCode)
  formData.append('file', file.value)
  /*files.value.forEach((file) => {
    formData.append('files[]', file)
  })*/

  try {
    const response = await FileManagementService.uploadFilesBySampleCode(formData)

    if (response.data.statusCode === 201) {
      await Swal.fire({
        'icon': 'success',
        'text': 'Archivo subido con exito!',
      })
      await listFilesBySampleCodeFunction(props.sampleCode)
    }
  } catch (error) {

    await Swal.fire({
      'icon': 'error',
      'text': error.response?.data?.error || 'Ocurrió un error al subir los archivos.',
    })
    errorMessage.value =
        error.response?.data?.error || 'Ocurrió un error al subir los archivos.'
  } finally {
    file.value = null
    isSavingFiles.value = false
  }

}

const listFilesBySampleCodeFunction = async (sampleCode: string) => {

  isLoadingFiles.value = true
  try {

    const response = await FileManagementService.listFilesBySampleCode(sampleCode)
    uploadedFiles.value = response.data.data

  } catch (error) {
    console.error(error.response.message)
    errorMessage.value = error.response.message
  } finally {
    isLoadingFiles.value = false
  }

}

const clearFields = () => {
  file.value = null
}

onMounted(() => {
  file.value = null
  const {sampleCode} = props
  listFilesBySampleCodeFunction(sampleCode)
})

</script>

<template>

  <CRow>
    <CCol md="4" class="border-end">
      <CForm
          class="row g-3"
          @submit.prevent="uploadFiles"
      >

        <CCol md="12">
          <CFormInput
              type="file"
              id="file"
              size="sm"
              label="Espacio para cargue de archivos (Uno a la vez)"
              @change="handleFiles"
          />
        </CCol>
        <CCol md="12">
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <CButton
                color="warning"
                type="button"
                size="sm"
                shape="rounded-pill"
                @click="clearFields"
            >
              <font-awesome-icon :icon="['fas', 'brush']" />
              Limpiar
            </CButton>
            <CButton
                type="submit"
                size="sm"
                shape="rounded-pill"
                color="primary"
                :disabled="isSavingFiles"
            >
              <CSpinner
                  as="span"
                  size="sm"
                  aria-hidden="true"
                  v-if="isSavingFiles"
              />
              <font-awesome-icon :icon="['fas', 'file-arrow-up']" v-else/>
              {{ isSavingFiles ? 'Guardando...' : 'Cargar Archivo' }}
            </CButton>
          </div>
        </CCol>

      </CForm>
    </CCol>

    <CCol md="8" v-if="isLoadingFiles">
      <CCol class="text-center">
        <pulse-loader :loading="isLoadingFiles" :color="loaderParams.color"/>
      </CCol>
    </CCol>

    <CCol md="8" v-else>
      <h6>Archivos Subidos:</h6>

      <CRow v-if="uploadedFiles.length">
        <CCol v-for="file in uploadedFiles" :key="file.key" md="4">
          <CImage rounded thumbnail :src="file.url" width="200" height="200"/>
        </CCol>
      </CRow>


      <CRow v-else>
        <CCol>
          <p>No hemos encontrado archivos aún para la muestra {{ props.sampleCode }}</p>
        </CCol>
      </CRow>


    </CCol>
  </CRow>

</template>

<style scoped>

</style>