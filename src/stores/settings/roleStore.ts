import {defineStore} from "pinia";
import RoleService from "@/services/settings/Role.service.ts";

interface RolesState {
    roles: Array<any>  // Puedes reemplazar `any` por una interfaz específica si conoces la estructura
    isLoadingRoles: boolean
    error: string | null
}
export const useRoleStore = defineStore('roles', {
    state: (): RolesState => ({
        roles: [],
        isLoadingRoles: false,
        error: null,
    }),
    actions: {
        async fetchRoles() {
            this.isLoadingRoles = true
            this.error = null
            try {
                const {data} = await RoleService.getRoles()
                this.roles = data.data
                this.isLoadingRoles = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingRoles = false
            } finally {
                this.isLoadingRoles = false
            }
        },
        removeRoleFromList(roleId: number) {
            this.roles = this.roles.filter(role => role.id !== roleId)
        }
    }
})