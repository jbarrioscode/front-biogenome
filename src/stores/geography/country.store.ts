import {defineStore} from "pinia";
import UsersService from "@/services/settings/Users.service.ts";
import CountryService from "@/services/geography/country.service.ts";

interface CountriesState {
    countries: Array<any>
    isLoadingCountries: boolean
    error: string | null
}

export const useCountryStore = defineStore('countries', {
    state: (): CountriesState => ({
        countries: [],
        isLoadingCountries: false,
        error: null,
    }),
    actions: {
        async fetchCountries() {
            this.isLoadingCountries = true
            this.error = null
            try {
                const {data} = await CountryService.getCountries()
                this.countries = data.data

                this.isLoadingCountries = false
            } catch (error) {
                this.error = error.response.message
                this.isLoadingCountries = false
            } finally {
                this.isLoadingCountries = false
            }
        }
    }
})