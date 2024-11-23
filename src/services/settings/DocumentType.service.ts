import {useApi} from "../index.ts";

const api = useApi()

export default {
    getDocumentTypes() {
        return api.get(`/api/v1/document-types`)
    }
}