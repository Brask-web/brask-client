<template>
    <div class="row">
        <div class="col-md-4">
            <h1>Create Country</h1>
            <form>
                <div class="form-group">
                    <label class="control-label">Country Name</label>
                    <input class="form-control" type="text" maxlength="128" v-model="countryName" />
                    <label class="control-label">Country Code</label>
                    <input class="form-control" type="text" maxlength="2" v-model="countryCode" />
                </div>

                <div class="form-group">
                    <input
                        type="button"
                        value="Edit"
                        class="btn btn-primary"
                        @click="createOnClick"
                    />
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICountry } from "@/domain/ICountry";
import store from "@/store";
import router from "@/router";

@Component
export default class CountriesСreate extends Vue {
    countryName = "";
    countryCode = "";

    createOnClick(): void {
        store.dispatch("createCountry", {
            countryName: this.countryName
        });
        store.dispatch("getCountries");
        router.push("/countries/");
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
