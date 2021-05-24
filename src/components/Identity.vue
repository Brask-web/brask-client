<template>
  <ul class="navbar-nav">
    <li v-if ="isAuthenticated" class="nav-item">
        <span class="nav-link text-white">{{userEmail}}</span>
    </li>
    <li v-if ="isAuthenticated" class="nav-item">
      <a @click="logoutOnClick" class="nav-link text-white" href="">Logout</a>
    </li>
    <li v-else class="nav-item">
        <router-link to="/account/login" class="nav-link text-white">Login</router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import store from '../store';
import router from '../router';
import JwtDecode from 'jwt-decode';

@Component
export default class Identity extends Vue {
    get isAuthenticated(): boolean {
        return store.getters.isAuthenticated
    }

    get userEmail(): string {
        if (store.state.jwt) {
            const decoded = JwtDecode(store.state.jwt) as Record<string, string>;
            return decoded["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        }
        return 'null';
    }

    logoutOnClick(): void {
        store.dispatch('clearJwt');
        router.push('/');
    }
}
</script>
