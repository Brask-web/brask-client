<template>
    <div class="row">
        <div class="col-md-4">
            <form>
                <div class="form-group">
                    <label class="control-label">City Name</label>
                    <input class="form-control" type="text" maxlength="128" v-model="city.cityName" />
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
                    <input type="button" value="Edit" class="btn btn-primary" @click="editOnClick" />
                </div>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IContactType } from "../../domain/IContactType";
import { ICountry } from "../../domain/ICountry";
import store from "@/store";
import router from "../../router";
import { ICity } from "../../domain/ICity";

@Component
export default class CitiesEdit extends Vue {
    @Prop()
    private id!: string;

    private countryName = "Select country";

    get country(): ICountry {
        return store.state.country!;
    }

    get countries(): ICountry[] {
        return store.state.countries!;
    }

    get city(): ICity {
        return store.state.city!;
    }

    editOnClick(): void {
        const result = store.dispatch("editCity", this.city);
        store.dispatch("getCities");
        router.push("/cities/");
    }

    selectOnClick(country: ICountry): void {
        this.city.countryId = country.id!;
        this.countryName = country.countryName;
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
        console.log("Mounted");
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
