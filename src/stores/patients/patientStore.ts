import {defineStore} from "pinia";
import {IPatients} from "@/utils/interfaces/patients/patients.ts";
import PatientService from "@/services/patients/Patient.service.ts";

interface PatientState {
    patients: Array<IPatients>,
    isLoadingPatients: boolean,
    error: String | null,
}
export const usePatientStore = defineStore('patient', {
    state:(): PatientState => ({
        patients: [],
        isLoadingPatients: false,
        error: null
    }),
    actions: {
        async fetchPatientsList () {
            this.isLoadingPatients = true
            this.error = null
            try {

                const {data} = await PatientService.getAllPatients()
                this.patients = data.data

                this.isLoadingPatients = false

            } catch (error) {
                console.log(error.response.message)
                this.isLoadingPatients = false
            } finally {
                this.isLoadingPatients = false
            }
        },
        removePatient(patientId: number) {
            this.patients = this.patients.filter(patient => patient.id !== patientId);
        }
    }
})