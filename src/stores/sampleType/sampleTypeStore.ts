import {defineStore} from "pinia";
import SampleTypeService from "../../services/sampleTypes/SampleType.service.ts";

export const useSampleTypeStore = defineStore('sampleTypes', {
    state: () => ({
        sampleTypes: [],
        isLoadingSamplesTypes: false,
        error: null
    }),
    actions: {
        async fetchSampleTypes() {
            this.isLoadingSamplesTypes = true
            this.error = null
            try {
                const {data} = await SampleTypeService.getAllSampleTypes()
                this.sampleTypes = data.data
                this.isLoadingSamplesTypes = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingSamplesTypes = false
            } finally {
                this.isLoadingSamplesTypes = false
            }
        }
    }
})