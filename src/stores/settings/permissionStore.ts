import {defineStore} from "pinia";
import PermissionService from "@/services/settings/Permission.service.ts";

interface PermissionsState {
    permissions: Array<any>  // Puedes reemplazar `any` por una interfaz específica si conoces la estructura
    isLoadingPermissions: boolean
    error: string | null
}
export const usePermissionStore = defineStore('permissions', {
    state: (): PermissionsState => ({
        permissions: [],
        isLoadingPermissions: false,
        error: null,
    }),
    actions: {
        async fetchPermissions() {
            this.isLoadingPermissions = true
            this.error = null
            try {
                const {data} = await PermissionService.getPermissions()
                this.permissions = data.data
                this.isLoadingPermissions = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingPermissions = false
            } finally {
                this.isLoadingPermissions = false
            }
        },
        removePermissionFromList(permissionId: number) {
            this.permissions = this.permissions.filter(permission => permission.id !== permissionId)
        }
    }
})