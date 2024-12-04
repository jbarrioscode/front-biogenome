import {defineStore} from "pinia";
import SampleTypeService from "@/services/sampleTypes/SampleType.service.ts";

export const useBioBankLocationStore = defineStore('bioBankLocation', {
    state: () => ({
        bioBankLocations: [],
        isLoadingBioBankLocations: false,
        error: null,
    }),
    actions: {
        async fetchBioBankLocations() {
            this.isLoadingBioBankLocations = true
            this.error = null
            try {
                const response = await SampleTypeService.getAllBioBankLocations()
                this.bioBankLocations = response.data.data
            } catch (error) {
                this.error = error.message || "Error al conectar con el servicio"
                this.isLoadingBioBankLocations = false
                console.error("Error en fetchBioBankLocations:", error)
            } finally {
                this.isLoadingBioBankLocations = false
            }
        }
    }
})