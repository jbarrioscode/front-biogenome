import {useApi} from "@/services";

const api = useApi()

export default {
    getCountries() {
        return api.get(`/api/v1/geografia/getpais`)
    }
}