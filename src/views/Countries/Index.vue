<template>
    <main role="main">
        <h1>Countries Index</h1>
        <p>
            <a @click="createModelOnClick">Create New</a>
        </p>
        <table class="table">
            <thead>
                <tr>
                    <th>Country Name</th>
                    <th>Created by</th>
                    <th>Created At</th>
                     <th>Changed by</th>
                    <th>Changed At</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="country in countries" :key="country.id">
                    <td>{{country.countryName}}</td>
                    <td>{{country.createdBy}}</td>
                    <td>{{country.createdAt.slice(0,19)}}</td>
                    <td>{{country.changedBy}}</td>
                    <td>{{country.changedAt.slice(0,19)}}</td>
                    <td>
                        <a @click="putModelOnClick(country)">Edit</a> |
                        <a @click="showModelOnClick(country)">Details</a> |
                        <a @click="deleteOnClick(country)">Delete</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICountry } from "../../domain/ICountry";
import store from "../../store";
import router from "@/router";

@Component
export default class CountriesIndex extends Vue {
    @Prop()
    private id!: string;

    get countries(): ICountry[] {
        return store.state.countries;
    }

    deleteOnClick(country: ICountry): void {
        store.dispatch("deleteCountry", country.id);
    }

    putModelOnClick(country: ICountry): void {
        store.dispatch("getCountry", country.id);
        router.push("/countryedit/");
    }

    showModelOnClick(country: ICountry): void {
        store.dispatch("getCountry", country.id);
        router.push("/countrydetails/");
    }

    createModelOnClick(): void {
        router.push("/countrycreate/");
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
        store.dispatch("getCountries"); // weird update
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
