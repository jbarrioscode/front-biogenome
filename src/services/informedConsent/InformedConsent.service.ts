import {useApi} from "../index.ts";
import {IPatientInformedConsent} from "@/utils/interfaces/patients/patients.ts";

const api = useApi()

export default {

    getInformedConsentByProtocolId(protocolId: number) {
        return api.get(`/api/v1/patient/get/consentimiento-por-protocolo/${protocolId}`)
    },
    savePatientInformedConsent(payload: IPatientInformedConsent) {
        return api.post(`/api/v1/patient/post/patient-informed-consent`, payload);
    }

}