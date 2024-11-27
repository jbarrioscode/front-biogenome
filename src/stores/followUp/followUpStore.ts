import {defineStore} from "pinia";
import FollowUpService from "@/services/followUp/FollowUp.service";



export const useFollowUpSampleStore = defineStore('followSamplesHis', {
    state:() => ({
        followUpPatients: [],
        isLoadingFollowUpPatients: false,
        error: null,
    }),
    actions: {
        async fetchFollowSample () {
            this.isLoadingFollowUpPatients = true
            this.error = null
            try {

                const {data} = await FollowUpService.getAllMuestrasProtocolo()
                this.followUpPatients = data.data

                this.isLoadingFollowUpPatients = false

            } catch (error) {
                console.log(error)
                this.isLoadingFollowUpPatients = false
            } finally {
                this.isLoadingFollowUpPatients = false
            }
        }
    }
})