import axios from 'axios'

export const apiClient = axios.create({
    baseURL: import.meta.env.VITE_NODE_ENV === 'development' ? import.meta.env.VITE_BASE_URL : import.meta.env.VITE_BASE_URL__P,
    withCredentials: true,
    withXSRFToken: true,
})

console.log(import.meta.env.VITE_NODE_ENV)

apiClient.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (
            error.response &&
            [401, 419].includes(error.response.statusCode)
        ) {
            console.log('logout')
        }
        return Promise.reject(error)
    }
)