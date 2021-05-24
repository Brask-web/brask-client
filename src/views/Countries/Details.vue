<template>
    <main role="main" class="pb-3">
        <h1>Details</h1>
        <div>
            <h4>Country</h4>
            <hr />
            <dl class="row">
                <dt class="col-sm-2">CountryName</dt>
                <dd class="col-sm-10">{{country.countryName}}</dd>
                <dt class="col-sm-2">CreatedBy</dt>
                <dd class="col-sm-10">{{country.createdBy}}</dd>
                <dt class="col-sm-2">CreatedAt</dt>
                <dd class="col-sm-10">{{country.createdAt}}</dd>
                <dt class="col-sm-2">ChangedBy</dt>
                <dd class="col-sm-10">{{country.changedBy}}</dd>
                <dt class="col-sm-2">ChangedAt</dt>
                <dd class="col-sm-10">{{country.changedAt}}</dd>
            </dl>
        </div>
        <div>
            <a @click="goBackOnClick">Back to List</a>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICountry } from "@/domain/ICountry";
import store from "@/store";
import router from "@/router";

@Component
export default class CountriesDetails extends Vue {
    @Prop()
    private id!: string;

    get country(): ICountry {
        return store.state.country!;
    }

    goBackOnClick(): void {
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
