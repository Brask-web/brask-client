<template>
    <div>
        <header class="bg-dark">
            <nav
                class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-dark border-bottom box-shadow mb-3"
            >
                <div class="container">
                    <router-link to="/" class="navbar-brand text-white font-weight-bold">/Brask</router-link>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
                        <Identity />
                        <ul class="navbar-nav flex-grow-1">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">TOP</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">Everyday routines</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">Professional skills</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">Hobbies and DIY</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">All categories</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">Q'n'A</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">Bulletin</router-link>
                            </li>
                             <li class="nav-item">
                                <router-link to="/" class="nav-link text-white">Workshops</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <div class="container">
            <main role="main" class="pb-3">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Identity from "./components/Identity.vue";
import store from "./store";

@Component({
    components: {
        Identity
    }
})
export default class App extends Vue {
    get isAuthenticated(): boolean {
        return store.getters.isAuthenticated;
    }
}
</script>
