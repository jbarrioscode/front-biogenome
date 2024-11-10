import {useApi} from "@/services";

const api = useApi()

export default {
    getPatientWithOutClinicalInformation() {
        return api.get(`/api/v1/muestra/get/pacientes-pendiente-informacion-Clinica`)
    }
}