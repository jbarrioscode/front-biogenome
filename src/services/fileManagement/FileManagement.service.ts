import {useApi} from "../index.ts";

const api = useApi()

export default {

    listFilesBySampleCode(sampleCode: string) {
        return api.get(`/api/v1/muestra/upload-attachment/${sampleCode}`)
    },
    uploadFilesBySampleCode(payload) {
        return api.post(`/api/v1/muestra/upload-attachment`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
    }

}