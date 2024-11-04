import {useApi} from "@/services";

const api = useApi()

export default {
    getCitiesByStateID(stateID: number) {
        return api.get(`/api/v1/geografia/getciudad/${stateID}`)
    }
}