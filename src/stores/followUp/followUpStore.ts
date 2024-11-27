import {defineStore} from "pinia";
import FollowUpService from "@/services/followUp/FollowUp.service";



export const useFollowUpSample = defineStore('followSamplesHis', {
    state:() => ({
        patientWCI: [],
        isLoadingPatientWCI: false,
        error: null,
    }),
    actions: {
        async fetchFollowSample () {
            this.isLoadingPatientWCI = true
            this.error = null
            try {

                const {data} = await FollowUpService.getAllMuestrasProtocolo()
                this.patientWCI = data.data

                this.isLoadingPatientWCI = false

            } catch (error) {
                console.log(error)
                this.isLoadingPatientWCI = false
            } finally {
                this.isLoadingPatientWCI = false
            }
        }
    }
})