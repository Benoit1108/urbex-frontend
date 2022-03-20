<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="login">Login</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {login} from "../services/auth.api";

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  methods: {
    login: () => {
      login('urbex@urbex.com', 'urbex').then(response => {
        console.log(response);
      });
    }
  }
}
</script>
