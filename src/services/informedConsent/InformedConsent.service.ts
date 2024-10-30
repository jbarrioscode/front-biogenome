import {useApi} from "../index.ts";

const api = useApi()

export default {

    getInformedConsentByProtocolId(protocolId: number) {
        return api.get(`/api/v1/patient/get/consentimiento-por-protocolo/${protocolId}`)
    },

}