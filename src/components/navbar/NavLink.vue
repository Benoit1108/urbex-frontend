<template>
  <router-link class="flex" :to="to" v-slot="{ isExactActive }">
    <f-icon
      class="mr-2"
      :class="isExactActive ? 'text-sky-900' : ''"
      :name="icon"
      :size="size"
    />
    <span
      class="md:block hidden"
      :class="isExactActive ? 'text-sky-900' : ''"
      >{{ name }}</span
    >
  </router-link>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      required: false,
      default: 24,
    },
    name: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: false,
      default: "",
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>