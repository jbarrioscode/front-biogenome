import {useApi} from "../index.ts";

const api = useApi()

export default {

    getActiveProtocols(headquartersId: number) {
        return api.get(`/api/v1/muestra/get/protocolos-activos/${headquartersId}`)
    },

}