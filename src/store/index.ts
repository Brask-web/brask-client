
import { ICountry } from './../domain/ICountry';
import { ILoginDTO } from './../types/ILoginDTO';
import Vue from 'vue'
import Vuex from 'vuex'
import { AccountApi } from '@/services/AccountApi';
import { CountriesApi } from '@/services/CountriesApi';
import { ICity } from '@/domain/ICity';
import { CitiesApi } from '@/services/CitiesApi';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        jwt: null as string | null,
        countries: [] as ICountry[],
        country: {} as ICountry,
        cities: [] as ICity[],
        city: {} as ICity,

    },
    mutations: {
        setJwt(state, jwt: string | null) {
            state.jwt = jwt;
        },
        setCountries(state, countries: ICountry[]) {
            state.countries = countries;
        },
        setCountry(state, country: ICountry) {
            state.country = country;
        },
        setCities(state, cities: ICity[]) {
            state.cities = cities;
        },
        setCity(state, city: ICity) {
            state.city = city;
        }

    },
    getters: {
        isAuthenticated(context): boolean {
            return context.jwt !== null;
        }
    },
    actions: {
        async clearJwt(context): Promise<void> {
            context.commit('setJwt', null);
        },
        async authenticateUser(context, loginDTO: ILoginDTO): Promise<boolean> {
            const jwt = await AccountApi.getJwt(loginDTO);
            context.commit('setJwt', jwt);
            return jwt !== null;
        },
        async getCountries(context): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const countries = await CountriesApi.getAll(context.state.jwt);
                context.commit('setCountries', countries);
            }
        },
        async getCountry(context, id: string): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const country = await CountriesApi.get(id, context.state.jwt);
                context.commit('setCountry', country);
            }
        },
        async editCountry(context, countryModel: ICountry): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const country = await CountriesApi.edit(countryModel, countryModel.id!, context.state.jwt);
                context.commit('setCountry', country);
            }
        },
        async createCountry(context, countryModel: ICountry): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const country = await CountriesApi.create(countryModel, context.state.jwt);
                context.commit('setCountry', country);
            }
        },
        async deleteCountry(context, id: string): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                await CountriesApi.delete(id, context.state.jwt);
                await context.dispatch('getCountries');
            }
        },
        async getCities(context): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const cities = await CitiesApi.getAll(context.state.jwt);
                context.commit('setCities', cities);
            }
        },
        async getCity(context, id: string): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const city = await CitiesApi.get(id, context.state.jwt);
                context.commit('setCity', city);
            }
        },
        async editCity(context, cityModel: ICity): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const city = await CitiesApi.edit(cityModel, cityModel.id!, context.state.jwt);
                context.commit('setCity', city);
            }
        },
        async createCity(context, cityModel: ICity): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                const city = await CitiesApi.create(cityModel, context.state.jwt);
                context.commit('setCity', city);
            }
        },
        async deleteCity(context, id: string): Promise<void> {
            if (context.getters.isAuthenticated && context.state.jwt) {
                await CitiesApi.delete(id, context.state.jwt);
                await context.dispatch('getCities');
            }
        }
    },
    modules: {
    }
})
