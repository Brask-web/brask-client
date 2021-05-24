<template>
    <main role="main" class="pb-3">
        <h1>Details</h1>
        <div>
            <h4>City</h4>
            <hr />
            <dl class="row">
                <dt class="col-sm-2">City Name</dt>
                <dd class="col-sm-10">{{city.cityName}}</dd>
                <dt class="col-sm-2">Country Code</dt>
                <dd class="col-sm-10">{{showCountryCode(city.countryId)}}</dd>
                <dt class="col-sm-2">CreatedBy</dt>
                <dd class="col-sm-10">{{city.createdBy}}</dd>
                <dt class="col-sm-2">CreatedAt</dt>
                <dd class="col-sm-10">{{city.createdAt}}</dd>
                <dt class="col-sm-2">ChangedBy</dt>
                <dd class="col-sm-10">{{city.changedBy}}</dd>
                <dt class="col-sm-2">ChangedAt</dt>
                <dd class="col-sm-10">{{city.changedAt}}</dd>
            </dl>
        </div>
        <div>
            <a @click="goBackOnClick">Back to List</a>
        </div>
    </main>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICity } from "@/domain/ICity";
import store from "@/store";
import router from "@/router";

@Component
export default class CitiesDetails extends Vue {
    @Prop()
    private id!: string;

    get city(): ICity {
        return store.state.city!;
    }

    goBackOnClick(): void {
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
        // store.dispatch("getGpsSessions");
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
