import {useApi} from "@/services"
import {IHeadquarter} from "@/utils/interfaces/headquarters/headquarters.ts";

const api= useApi()

export default {
    getHeadquarters() {
        return api.get(`/api/v1/sedesmuestras/get/sedes-toma-de-muestras`)
    },
    createHeadquarter(payload: IHeadquarter) {
        return api.post(`/api/v1/sedesmuestras/post/sedes-toma-de-muestras`, payload)
    }
}