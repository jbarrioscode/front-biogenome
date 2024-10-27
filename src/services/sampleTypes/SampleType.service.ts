import {useApi} from "../index.ts";

const api = useApi()

export default {

    getAllSampleTypes() {
        return api.get(`/api/v1/muestra/get/tipo-estudio`)
    },

}