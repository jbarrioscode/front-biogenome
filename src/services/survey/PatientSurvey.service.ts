import {useApi} from "../index.ts";

const api = useApi()

export default {

    getSurveyInfoByProtocol(protocolID: number) {
        return api.get(`/api/v1/encuesta/get/renderizar-encuesta/${protocolID}`)
    },
    createSurveyInfoByProtocol(payload) {
        return api.post(`/api/v1/muestra/post/guardar-muestra`, payload)
    }
}