import {defineStore} from "pinia";
import UsersService from "@/services/settings/Users.service.ts";

export const useUsersStore = defineStore('users', {
    state: () => ({
        users: [],
        isLoadingUsers: false,
        error: null
    }),
    actions: {
        async fetchActiveUsers() {
            this.isLoadingUsers = true
            this.error = null
            try {

                const {data} = await UsersService.getActiveUsers()
                this.users = data.data
                this.isLoadingUsers = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingUsers = false
            } finally {
                this.isLoadingUsers = false
            }
        },
        removeUserFromList(userId: number) {
            this.users = this.users.filter(user => user.id !== userId)
        }
    }
})