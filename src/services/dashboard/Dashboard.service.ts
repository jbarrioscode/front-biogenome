import {useApi} from "@/services";

const api = useApi()

export default {
    getDashboardData() {
        return api.get(`/api/v1/reportes/get/dashborad`)
    }
}