<template>
    <main role="main">
        <h1>Cities Index</h1>
        <p>
            <a @click="createModelOnClick">Create New</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>City Name</th>
                    <th>Country Code</th>
                    <th>Created by</th>
                    <th>Created At</th>
                    <th>Changed by</th>
                    <th>Changed At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="city in cities" :key="city.id">
                    <td>{{city.cityName}}</td>
                    <td>{{showCountryCode(city.countryId)}}</td>
                    <td>{{city.createdBy}}</td>
                    <td>{{city.createdAt.slice(0,19)}}</td>
                    <td>{{city.changedBy}}</td>
                    <td>{{city.changedAt.slice(0,19)}}</td>
                    <td>
                        <a @click="putModelOnClick(city)">Edit</a> |
                        <a @click="showModelOnClick(city)">Details</a> |
                        <a @click="deleteOnClick(city)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICity } from "../../domain/ICity";
import store from "@/store";
import router from "@/router";

@Component
export default class CitiesIndex extends Vue {
    get cities(): ICity[] {
        return store.state.cities;
    }

    deleteOnClick(city: ICity): void {
        store.dispatch("deleteCity", city.id);
    }

    putModelOnClick(city: ICity): void {
        store.dispatch("getCity", city.id);
        router.push("/cityedit/");
    }

    createModelOnClick(): void {
        router.push("/citycreate/");
    }

    showModelOnClick(city: ICity): void {
        store.dispatch("getCity", city.id);
        router.push("/citiesdetails/");
    }

    // ============ Lifecycle methods ==========
    beforeCreate(): void {
        console.log("beforeCreate");
    }

    created(): void {
        console.log("created");
    }

    beforeMount(): void {
        console.log("beforeMount");
        store.dispatch("getCities");
    }

    mounted(): void {
        console.log("mounted");
    }

    beforeUpdate(): void {
        console.log("beforeUpdate");
    }

    updated(): void {
        console.log("updated");
    }

    beforeDestroy(): void {
        console.log("beforeDestroy");
    }

    destroyed(): void {
        console.log("destroyed");
    }
}
</script>
