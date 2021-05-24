import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import AccountLogin from '../views/Account/Login.vue'
import CountriesIndex from '../views/Countries/Index.vue'
import CountriesDetails from '../views/Countries/Details.vue'
import CitiesIndex from '../views/Cities/Index.vue'
import CountryEdit from '../views/Countries/Edit.vue'
import CountryCreate from '../views/Countries/Create.vue'
import CityEdit from '../views/Cities/Edit.vue'
import CityCreate from '../views/Cities/Create.vue'
import CitiesDetails from '../views/Cities/Details.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    { path: '/', name: 'Home', component: Home },
    { path: '/account/login', name: 'AccountLogin', component: AccountLogin },
    { path: '/countries/', name: 'CountriesIndex', component: CountriesIndex },
    { path: '/countryedit/', name: 'CountryEdit', component: CountryEdit },
    { path: '/countrycreate/', name: 'CountryCreate', component: CountryCreate },
    { path: '/countrydetails/', name: 'CountriesDetails', component: CountriesDetails },
    { path: '/cities/', name: 'CitiesIndex', component: CitiesIndex },
    { path: '/cityedit/', name: 'CitiesEdit', component: CityEdit },
    { path: '/citycreate/', name: 'CitiesCreate', component: CityCreate },
    { path: '/citiesDetails/', name: 'CitiesDetails', component: CitiesDetails },

]

const router = new VueRouter({
    routes
})

export default router
