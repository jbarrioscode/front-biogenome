import axios from "axios";
import middleware401 from "@/middlewares/middleware401.ts";
import middlewareCSFR from "@/middlewares/middlewareCSRF.ts";

export const apiClient = (endpoint = 'api') => {

    const {VITE_NODE_ENV, VITE_BASE_URL, VITE_BASE_URL__P} = import.meta.env

    const axiosInstance = axios.create({
        baseURL: VITE_NODE_ENV === 'development' ? VITE_BASE_URL : VITE_BASE_URL__P,
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        },
        withXSRFToken: true,
        withCredentials: true
    })

    axiosInstance.interceptors.request.use(middlewareCSFR, error => Promise.reject(error))
    axiosInstance.interceptors.response.use(resp => resp, middleware401)

    return axiosInstance

}
