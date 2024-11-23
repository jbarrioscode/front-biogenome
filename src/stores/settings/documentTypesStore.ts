import {defineStore} from "pinia";
import DocumentTypeService from "@/services/settings/DocumentType.service.ts";

interface DocumentTypesState {
    documentTypes: Array<any>  // Puedes reemplazar `any` por una interfaz específica si conoces la estructura
    isLoadingDocumentTypes: boolean
    error: string | null
}
export const useDocumentTypesStore = defineStore('documentTypes', {
    state: (): DocumentTypesState => ({
        documentTypes: [],
        isLoadingDocumentTypes: false,
        error: null,
    }),
    actions: {
        async fetchDocumentTypes() {
            this.isLoadingDocumentTypes = true
            this.error = null
            try {
                const {data} = await DocumentTypeService.getDocumentTypes()
                this.documentTypes = data.data
                this.isLoadingDocumentTypes = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingDocumentTypes = false
            } finally {
                this.isLoadingDocumentTypes = false
            }
        }
    }
})