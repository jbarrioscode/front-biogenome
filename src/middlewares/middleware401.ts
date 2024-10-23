import {useAuthStore} from "@/stores/authentication/authStore.ts";

/**
 * Middleware - if user lost authentication (401) it gets kicked out
 * FROM https://youtu.be/BWNcuB3LQz8?t=1119
 */
const middleware401 = async error => {
    const { status } = error.request

    console.log(status)

    if (status === 401 || status === 419) {
        const auth = useAuthStore()

        setTimeout(async () => await auth.logoutFunction(), 3000)
        return Promise.reject({
            name: 'Permiso Denegado!',
            message: 'Se han expirado las credenciales - Serás enviado al inicio de sesión.',
        })
    }
    return Promise.reject(error)
}

export { middleware401 as default }