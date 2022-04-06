<template>
  <div id="nav" class="h-[10%]">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/map">Map</router-link>
    |
    <router-link to="/chat">Chat</router-link>
    |
    <button @click="logout">logout</button>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import jsCookie from 'js-cookie';
export default {
  components: {},
  methods: {
    logout() {
      jsCookie.remove('token');
      this.$router.push('/login');
    }
  }
}
</script>