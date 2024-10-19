import { defineStore } from "pinia"
import {useApi} from "@/services/index.ts"

const api = useApi()

export const useUserStore = defineStore('user', {
    state: () => JSON.parse(localStorage.getItem('USER_INFO')) ?? {
        id: null,
        name: 'guest',
        email: null,
    },
    actions: {
        updateState(payload: any) {
            let newUserState = {...this.$state, ...payload}
            localStorage.removeItem('USER_INFO')
            localStorage.setItem('USER_INFO', JSON.stringify(newUserState))
            this.$reset()
        },
        async storeInfo() {
            const { data: userInfo } = await api.get('/api/user')
            localStorage.setItem('USER_INFO', JSON.stringify(userInfo))
            this.$reset()
        }
    }
})
