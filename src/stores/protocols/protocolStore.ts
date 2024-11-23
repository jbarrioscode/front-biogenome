import {defineStore} from "pinia";
import ProtocolService from "../../services/protocols/Protocol.service.ts";

export const useProtocolStore = defineStore('protocols', {
    state: () => ({
        protocols: [],
        isLoadingProtocol: false,
        error: null
    }),
    actions: {
        async fetchActiveProtocols (headquartersId: number) {
            this.isLoadingProtocol = true
            this.error = null
            try {
                const {data} = await ProtocolService.getActiveProtocols(headquartersId)
                this.protocols = data.data.protocolos
                this.isLoadingProtocol = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingProtocol = false
            } finally {
                this.isLoadingProtocol = false
            }
        }
    }
})