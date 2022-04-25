<template>
  <div class="flex flex-col h-full">
    <Nav/>
    <router-view class="h-[94%] w-full bg-gray-100"/>
    <nav-group :size="36" class="md:hidden p-2 justify-around flex"/>
  </div>
</template>

<script>
import Nav from '@/components/navbar/Nav.vue'
import NavGroup from '@/components/navbar/NavGroup.vue'

export default {
  components: {
    Nav,
    NavGroup
  }
}
</script>