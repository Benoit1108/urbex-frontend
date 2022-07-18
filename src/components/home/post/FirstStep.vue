<template>
  <TabPanel class="mt-12 mb-4">
    <div>
      <label class="block text-sm font-semibold">
        Ajouter des photos ou une vidéo
      </label>
      <p class="text-sm font-medium py-2 text-gray-600">
        Description nombre limite de photos et vidéos possible à ajouter
      </p>
      <div
        class="
          mt-1
          flex
          justify-center
          px-6
          pt-5
          pb-6
          border-2 border-gray-300 border-dashed
          rounded-md
        "
      >
        <div class="space-y-1 text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label
              for="file-upload"
              class="
                relative
                cursor-pointer
                bg-white
                rounded-md
                font-medium
                text-indigo-600
                hover:text-indigo-500
                focus-within:outline-none
                focus-within:ring-2
                focus-within:ring-offset-2
                focus-within:ring-indigo-500
              "
            >
              <span>Ajouter un fichier</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                class="sr-only"
              />
            </label>
            <p class="pl-1">ou glissez-le</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex sm:flex-nowrap flex-wrap my-4 space-x-2">
      <img
        v-for="image in 5"
        :key="image"
        class="h-36 w-36 rounded-lg"
        :src="require('@/assets/images/login.png')"
        alt="image"
      />
    </div>
    <button
      @click="$emit('nextStep')"
      class="
        mt-24
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
      Continuer
    </button>
  </TabPanel>
</template>
<script setup>
import { TabPanel } from "@headlessui/vue";
import { defineEmits } from "vue";

defineEmits(["nextStep"]);
</script>
