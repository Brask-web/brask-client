<template>
    <div class="row">
        <div class="col-md-4">
            <form>
                <div class="form-group">
                    <label class="control-label">City Name</label>
                    <input class="form-control" type="text" maxlength="128" v-model="cityName" />
                    <div class="dropdown">
                        <button
                            class="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >{{countryName}}</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li
                                v-for="country in countries"
                                :key="country.id"
                                @click=" selectOnClick(country)"
                            >{{country.countryName}}</li>
                        </div>
                    </div>
                </div>

                <div class="form-group">
                    <input
                        type="button"
                        value="Create"
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
export default class CitiesСreate extends Vue {
    cityName = "";
    countryId = "";
    private countryName = "Select country";

    selectOnClick(country: ICountry): void {
        this.countryId = country.id!;
        this.countryName = country.countryName;
    }

    get countries(): ICountry[] {
        return store.state.countries!;
    }

    createOnClick(): void {
        store.dispatch("createCity", {
            cityName: this.cityName,
            countryId: this.countryId
        });
        store.dispatch("getCities");
        router.push("/cities/");
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
        store.dispatch("getCountries");
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
