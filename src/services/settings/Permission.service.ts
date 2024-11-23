import {useApi} from "../index.ts";

const api = useApi()

export default {
    getPermissions() {
        return api.get(`/api/v1/permissions`)
    },
    createPermission(payload) {
        return api.post(`/api/v1/permissions/store`, payload)
    },
    updatePermission(permissionId, payload) {
        return api.put(`/api/v1/permissions/update/${permissionId}`, payload)
    },
    deletePermission(permissionId) {
        return api.delete(`/api/v1/permissions/delete/${permissionId}`)
    },
}