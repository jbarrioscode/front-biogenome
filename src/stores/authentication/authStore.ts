import {defineStore} from "pinia";
/** Importing router */
import {useRouter} from "vue-router";
/** Importing stores */
import {useUserStore} from "@/stores/authentication/userStore.ts";

/** Importing services */
import {useApi} from "@/services/index.ts";
/** Importing interfaces */
import {ILoginParams} from "@/utils/interfaces/authentication/authentication.ts";

const api = useApi()

export const useAuthStore = defineStore('auth', {
    state: () =>
        JSON.parse(localStorage.getItem('AUTH_STATE')) ?? {
            email: null,
            isLoggedIn: false
        },
    actions: {
        updateState(payload: any) {
            let newUserState = {...this.$state, ...payload}
            localStorage.removeItem('AUTH_STATE')
            localStorage.setItem('AUTH_STATE', JSON.stringify(newUserState))
            this.$reset()
        },
        async loginFunction(params: ILoginParams) {
            const {email, password} = params
            const user = useUserStore()

            try {

                await api.post('/login', {email, password})
                this.updateState({email, isLoggedIn: true})
                await user.storeInfo()

            } catch (error) {
                console.error('Error al iniciar sesión', error)
            }
        },
        async forgotPasswordFunction({email}: { email: string }) {
            try {
                await api.post('/forgot-password', {email})
            } catch (error) {
                console.error('Error al enviar el correo de recuperación: ', error.message)
                throw error
            }
        },
        async logoutFunction() {
            const user = useUserStore()
            const router = useRouter()
            localStorage.clear() // always clean localStorage before reset the state
            this.$reset()
            user.$reset()

            try {
                await api.post('/logout')
                await router.push({name: 'login'})
            } catch (error) {
                window.location.pathname = '/'
            }
        }
    }

})