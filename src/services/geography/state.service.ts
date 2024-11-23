import {useApi} from "@/services";

const api = useApi()

export default {
    getStateByCountryID(countryID: string) {
        return api.get(`/api/v1/geografia/getdepartamento/${countryID}`)
    }
}