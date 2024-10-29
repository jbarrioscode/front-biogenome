import {useApi} from "../index.ts";

const api = useApi()

export default {
    getActiveUsers() {
        return api.get(`/api/v1/users`)
    },
    createUser(payload) {
        return api.post(`/api/v1/users/store`, payload)
    },
    updateUser(userId, payload) {
        return api.put(`/api/v1/users/update/${userId}`, payload)
    },
    inactivateUser(userId) {
        return api.post(`/api/v1/users/inactivate/${userId}`)
    },
}