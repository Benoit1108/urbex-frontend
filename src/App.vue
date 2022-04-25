<template>
  <router-view/>
</template>

<script>
import jsCookie from 'js-cookie';


export default {
  methods: {
    logout() {
      jsCookie.remove('token');
      this.$router.push('/login');
    }
  }
}
</script>