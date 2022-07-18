<template>
  <TabPanel class="mt-12 mb-4">
    <h2 class="flex justify-center font-semibold text-xl">
      Visite de maison en ruine en Bretagne
    </h2>
    <span class="flex text-gray-500 justify-center text-sm font-medium"
      >le 24 mars 2021</span
    >
    <div class="flex items-center space-x-2 mt-5">
      <div
        class="
          bg-black
          w-full
          rounded-full
          items-center
          h-8
          w-8
          flex
          justify-center
        "
      >
        <f-icon class="text-white h-6 w-6" name="user" />
      </div>
      <div class="flex flex-col">
        <span class="font-semibold text-sm">Camille Legrand</span>
        <span class="text-xs text-gray-400">Publié le 26 mars 2021</span>
      </div>
    </div>
    <p class="text-sm mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum. Quisque eget elit in elit efficitur maximus vitae nec nunc.
      Mauris porttitor dolor neque, nec ornare dolor semper quis. Sed nec
      hendrerit arcu. Sed sagittis et massa a vulputate. Aenean imperdiet non mi
      eu rhoncus. Sed in mauris massa.
    </p>
    <img
      :src="require('@/assets/images/post.png')"
      alt="Post"
      class="my-2 mx-auto rounded-lg w-full"
    />
    <div class="flex sm:flex-nowrap flex-wrap my-4 space-x-2">
      <img
        v-for="image in 3"
        :key="image"
        class="w-60 flex h-40 bg-cover rounded-lg"
        :src="require('@/assets/images/login.png')"
        alt="image"
      />
    </div>
    <div class="flex flex-col">
      <button
        @click="$emit('nextStep')"
        class="
          mt-8
          rounded
          flex
          items-center
          font-semibold
          justify-center
          ml-auto
          h-8
          w-36
          bg-sky-700
          text-white
        "
      >
        Publier le post
      </button>
    </div>
  </TabPanel>
</template>
<script setup>
import { TabPanel } from "@headlessui/vue";
import { defineEmits } from "vue";

defineEmits(["nextStep"]);
</script>
