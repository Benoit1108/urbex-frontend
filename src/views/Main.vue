<template>
  <div class="flex flex-col h-full">
    <Nav />
    <div class="h-full w-full bg-gray-100">
      <router-view />
    </div>
    <nav-group
      :size="36"
      class="
        md:hidden
        bottom-0
        fixed
        z-10
        w-full
        bg-white
        p-2
        justify-around
        flex
      "
    />
  </div>
</template>

<script>
import Nav from "@/components/navbar/Nav.vue";
import NavGroup from "@/components/navbar/NavGroup.vue";

export default {
  components: {
    Nav,
    NavGroup,
  },
};
</script>