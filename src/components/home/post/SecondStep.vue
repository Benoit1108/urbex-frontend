<template>
  <TabPanel class="mt-12 mb-4">
    <div class="flex flex-col">
      <label class="font-semibold mb-2" for="title"
        >Titre de la publication :</label
      >
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Titre de la publication..."
        class="
          border
          w-full
          shadow-sm
          sm:text-sm
          border-gray-300
          rounded-md
          bg-gray-100
          h-10
        "
      />
      <label class="font-semibold my-2" for="date"
        >Date de l'expédition :</label
      >
      <input
        type="date"
        name="date"
        id="date"
        class="
          border
          w-2/6
          shadow-sm
          sm:text-sm
          border-gray-300
          bg-gray-100
          rounded-md
          h-10
        "
      />
      <label class="font-semibold mt-2" for="description">Description :</label>
      <span class="text-sm italic text-gray-500 my-1"
        >Décrivez en détail votre expérience d'urbex.</span
      >
      <textarea
        id="description"
        name="description"
        rows="7"
        class="shadow-sm w-full border border-gray-300 rounded-md bg-gray-100"
        placeholder="Écrire votre description..."
      />

      <button
        @click="$emit('nextStep')"
        class="
          mt-20
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
    </div>
  </TabPanel>
</template>
<script setup>
import { TabPanel } from "@headlessui/vue";
import { defineEmits } from "vue";

defineEmits(["nextStep"]);
</script>
