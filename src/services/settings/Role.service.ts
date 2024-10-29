import {useApi} from "../index.ts";

const api = useApi()

export default {
    getRoles() {
        return api.get(`/api/v1/roles`)
    },
    createRole(payload) {
        return api.post(`/api/v1/roles/store`, payload)
    },
    updateRole(roleId, payload) {
        return api.put(`/api/v1/roles/edit/${roleId}`, payload)
    },
    deleteRole(roleId) {
        return api.delete(`/api/v1/roles/delete/${roleId}`)
    },
}