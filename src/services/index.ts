import axios from "axios";
import middlewareCSRF from "@/middlewares/middlewareCSRF.ts";
import middleware401 from "@/middlewares/middleware401.ts";

export const useApi = () => {

    const {VITE_NODE_ENV, VITE_BASE_URL, VITE_BASE_URL__P} = import.meta.env

    const axiosInstance = axios.create({
        baseURL: VITE_NODE_ENV === 'development' ? VITE_BASE_URL : VITE_BASE_URL__P,
        headers: {
            common: {
                'X-Requested-With': 'XMLHttpRequest',
            },
        },
        withCredentials: true,
        withXSRFToken: true
    })

    axiosInstance.interceptors.request.use( middlewareCSRF, err => Promise.reject(err))
    axiosInstance.interceptors.response.use(resp => resp, middleware401)

    return axiosInstance

}
