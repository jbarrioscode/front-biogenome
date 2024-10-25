import {useApi} from "../index.ts";

const api = useApi()

export default {

    getAllPatients() {
        return api.get(`/api/v1/patient/get/todos-pacientes`)
    },
    createPatient(payload) {
        return api.post(`/api/v1/patient/post/create-patient`, payload)
    }

}