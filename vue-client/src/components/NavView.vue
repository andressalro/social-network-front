<template>

<nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Red social asalgado</a>
    
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" href="javascript:void(0)" @click="logout">Cerrar sesion</a>
      </li>
    </ul>
  </nav>

</template>

<script>
import {useRouter} from "vue-router";

export default {
    name: "NavView",
    setup() {
      const router = useRouter();

      const logout = async () => {
        localStorage.removeItem("JWT");
        await router.push("/login");
      }

      return {
        logout
      }
    }
}

</script>