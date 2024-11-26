import {defineStore} from "pinia";
import PatientClinicalInformationService from "@/services/patients/PatientClinicalInformation.service.ts";

export const usePatientClinicalInformationStore = defineStore('patientClinicalInformation', {
    state:() => ({
        patientWCI: [],
        isLoadingPatientWCI: false,
        error: null,
    }),
    actions: {
        async fetchPatientsWithOutClinicalInformation () {
            this.isLoadingPatientWCI = true
            this.error = null
            try {

                const {data} = await PatientClinicalInformationService.getPatientWithOutClinicalInformation()
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