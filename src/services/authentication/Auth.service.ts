import axios from "axios";
import {IUserLogin} from "@/types/authentication/UserTypes.ts";
import {IUserPasswordRecovery} from "@/types/authentication/UserTypes.ts";
import {useAuthStore} from "@/stores/authentication/authStore.ts";

export const authClient = axios.create({
    baseURL: import.meta.env.VITE_NODE_ENV === 'development' ? import.meta.env.VITE_BASE_URL : import.meta.env.VITE_BASE_URL__P,
    withCredentials: true,
    withXSRFToken: true,
})

//const authStore = useAuthStore()
authClient.interceptors.response.use(
    (response) => {
        return response
    },
    function(error) {
        if (
            error.response &&
            [401, 419].includes(error.response.status) //&&
            //store.getters['auth/authUser'] &&
            //authStore.authUser &&
            //!store.getters['auth/guest']
            //!authStore.guest
        ) {
            //store.dispatch('auth/logout')
            //authStore.logoutFunction()
        }
        return Promise.reject(error)
    }
)

export default {
    async login(payload: IUserLogin) {
        await authClient.get('/sanctum/csrf-cookie')
        return authClient.post('/login', payload)
    },
    logout() {
        return authClient.post('/logout')
    },
    async forgotPassword(payload: IUserPasswordRecovery) {
        await authClient.get('/sanctum/csrf-cookie')
        return authClient.post('/forgot-password', payload)
    },
    getAuthUser() {
        return authClient.get('/api/user')
    },
    async resetPassword(payload) {
        await authClient.get('/sanctum/csrf-cookie')
        return authClient.post('/reset-password', payload)
    },
    updatePassword(payload) {
        return authClient.put('/user/password', payload)
    },
    async registerUser(payload) {
        await authClient.get('/sanctum/csrf-cookie')
        return authClient.post('/register', payload)
    },
    sendVerification(payload) {
        return authClient.post('/email/verification-notification', payload)
    },
    updateUser(payload) {
        return authClient.put('/user/profile-information', payload)
    }
}