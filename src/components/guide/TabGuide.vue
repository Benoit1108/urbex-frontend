<template>
  <div>
    <TabGroup>
      <TabList class="flex p-1 space-x-1 bg-white rounded-xl">
        <TabList
          class="
            w-full
            py-2.5
            text-lg
            leading-5
            font-medium
            text-sky-800
            rounded-lg'
            ml-4
          "
        >
          Catégories :
        </TabList>
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full text-lg leading-5 font-medium text-sky-800 rounded-lg',
              'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
              selected ? 'bg-gray-100 shadow' : 'hover:text-sky-8 00',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <slot></slot>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels } from "@headlessui/vue";

const categories = ref({
  Tout: [],
  Communauté: [],
  Concours: [],
  Divers: [],
});
</script>