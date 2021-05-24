<template>
    <div class="row">
        <div class="col-md-4">
            <form>
                <div class="form-group">
                    <label class="control-label">Country Name</label>
                    <input
                        class="form-control"
                        type="text"
                        maxlength="128"
                        v-model="country.countryName"
                    />
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
import { ICountry } from "../../domain/ICountry";
import store from "@/store";
import router from "../../router";

@Component
export default class CountryEdit extends Vue {
    @Prop()
    private id!: string;

    private countryModel: ICountry = {
        id: this.country.id,
        countryName: this.country.countryName,
    };

    get country(): ICountry {
        return store.state.country!;
    }

    editOnClick(): void {
        const result = store.dispatch("editCountry", this.country);
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
        console.log("Mounted");
        this.countryModel = store.state.country!;
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
