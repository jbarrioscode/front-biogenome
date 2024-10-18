import {defineStore} from "pinia";
import {computed, ref} from "vue";
import AuthService from "@/services/authentication/Auth.service.ts";
import {useRouter} from "vue-router";

export const useAuthStore = defineStore('auth', () => {

    const route = useRouter()

    const user = ref(null)
    const passwordExpired = ref<boolean | undefined>(false)
    const userLoading = ref<boolean | undefined>(false)
    const errors = ref<object | string | null>(null)
    const permissions = ref([])
    const loggingOut = ref<boolean | undefined>(false)

    const authUser = computed(() => user.value)
    const isAdmin = computed(() => !!(user.value && user.value.roles[0].id === 1))
    const pwExpired = computed(() => passwordExpired.value)
    const user_loading = computed(() => userLoading.value)
    const error = computed(() => errors.value)
    const loggedIn = computed(() => !!user.value)
    const logging_out = computed(() => loggingOut.value)
    const guest = computed(() => {
        const storageItem = window.localStorage.getItem('guest')
        if (!storageItem) return false
        if (storageItem === 'isGuest') return true
        if (storageItem === 'isNotGuest') return false
        return null
    })
    const can = computed((permission) => {
        permissions.value.find(todo => todo.name === permission)
    })

    const logoutFunction = async () => {
        loggingOut.value = true
        try {
            await AuthService.logout()
            user.value = null
            setGuest('isGuest')
            window.localStorage.clear()
            loggingOut.value = false
            if (route.currentRoute.value.name !== 'login') {
                await route.push({name: 'auth'})
            }
        } catch (error) {
            loggingOut.value = false
            error.value = error
        }
    }

    const getAuthUserFunction = async () => {
        userLoading.value = true
        passwordExpired.value = false

        try {

            const dateCurrent = new Date()
            const today = dateCurrent.getFullYear() + '-' + String(dateCurrent.getMonth() + 1).padStart(2, '0') + '-' + dateCurrent.getDate()

            const response = await AuthService.getAuthUser()
            if (response.data.passwordExpirationDate >= today) passwordExpired.value = true
            user.value = response.data
            userLoading.value = false

            return response.data

        } catch (e) {
            userLoading.value = false
            user.value = null
            errors.value = e
        }

    }

    const updateUserLoadingState = (value: boolean) => {
        userLoading.value = value
    }

    const setGuest = (value: any) => {
        window.localStorage.setItem('guest', value)
    }

    return {
        authUser,
        userLoading,
        guest,
        logoutFunction,
        getAuthUserFunction,
        updateUserLoadingState,
        setGuest
    }

})