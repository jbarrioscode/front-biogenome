import {useApi} from "../index.ts";

const api = useApi()

export default {
    getSamplesReportByDateRange(payload) {
        return api.get(`/api/v1/reportes/get/data-muestras-fechas/${payload.protocolID}/${payload.initDate}/${payload.endDate}`)
    }
}