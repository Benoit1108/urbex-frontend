<template>
  <div
    id="navbar"
    class="
      h-[6%]
      md:justify-evenly
      justify-between
      items-center
      text-lg
      flex
      shadow-md
      bg-white
      px-4
      py-8
      md:fixed
      w-full
      md:z-[500]
    "
  >
    <div class="flex w-1/5">
      <img
        :src="require('@/assets/images/logoTxt.png')"
        alt="Logo"
        class="max-h-10"
      />
    </div>
    <nav-group class="md:flex hidden" />
    <div class="flex space-x-6 w-1/5 justify-end">
      <f-icon :size="size" name="bell" />
      <router-link class="flex" to="/login">
        <f-icon :size="size" name="user" />
      </router-link>
    </div>
  </div>
</template>

<script>
import NavGroup from "@/components/navbar/NavGroup";

export default {
  components: {
    NavGroup,
  },
  data() {
    return {
      isMobile: false,
    };
  },
  computed: {
    size() {
      return this.isMobile ? 36 : 24;
    },
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize, { passive: true });
  },
  unmounted() {
    window.removeEventListener("resize", this.resize, { passive: true });
  },
  methods: {
    resize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
};
</script>