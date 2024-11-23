import {defineStore} from "pinia";
import UsersService from "@/services/settings/Users.service.ts";
import HeadquartersService from "@/services/settings/Headquarters.service.ts";

interface HeadquartersState {
    headquarters: Array<any>
    isLoadingHeadquarters: boolean,
    error: string | null
}

export const useHeadquartersStore = defineStore('headquarters', {
    state: (): HeadquartersState => ({
        headquarters: [],
        isLoadingHeadquarters: false,
        error: null,
    }),
    actions: {
        async fetchHeadquarters() {
            this.isLoadingHeadquarters = true
            this.error = null
            try {
                const {data} = await HeadquartersService.getHeadquarters()
                this.headquarters = data.data

                this.isLoadingHeadquarters = false
            } catch (error) {
                this.isLoadingHeadquarters = false
            } finally {
                this.isLoadingHeadquarters = false
            }
        }
    }
})