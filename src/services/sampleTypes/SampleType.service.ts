import {useApi} from "../index.ts";

const api = useApi()

export default {

    getAllSampleTypes() {
        return api.get(`/api/v1/muestra/get/tipo-estudio`)
    },
    getAllBioBankLocations() {
        return api.get(`/api/v1/ubicaciones/get/ubicaciones`)
    },
    saveCounterSamplesLocationInBioBank(payload) {
        return api.post(`/api/v1/muestra/post/asignar-muestras-estante`, payload)
    },
    saveInternationalSamples(payload) {
        return api.post(`/api/v1/muestra/post/asignar-muestras-exterior`, payload)
    }

}