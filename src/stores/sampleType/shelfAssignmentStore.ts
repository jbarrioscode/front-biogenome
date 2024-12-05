import {defineStore} from "pinia";
import SampleTypeService from "@/services/sampleTypes/SampleType.service.ts";

export const useShelfAssignmentStore = defineStore('shelfAssignment', {
    state: () => ({
        latestSamplesSent: [],
        isLoadingLatestSamples: false,
        error: null,
    }),
    actions: {
        async fetchLatestSamplesSent() {
            this.isLoadingLatestSamples = true
            this.error = null
            try {
                const {data} = await SampleTypeService.getAllSampleTypes()
                this.latestSamplesSent = data.data
                this.isLoadingLatestSamples = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingLatestSamples = true
            } finally {
                this.isLoadingLatestSamples = false
            }
        }
    }
})