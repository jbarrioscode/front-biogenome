import {useApi} from "@/services";

const api = useApi()

export default {

    getAllMuestrasProtocolo() {
        return api.get(`/api/v1/reportes/get/seguimiento-muestras/1`)
    },
    getTrackingDetailInfo(sample:string) {
        return api.get(`/api/v1/reportes/get/log-muestra/${sample}`)
    }

}