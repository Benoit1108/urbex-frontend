<template>
  <Tab class="flex flex-col w-full">
    <div
      :class="isActive ? 'bg-sky-900' : 'bg-gray-300'"
      class="h-1 w-full"
    ></div>
    <span class="text-sky-900 font-semibold uppercase mt-2">{{ title }}</span>
    <span class="font-semibold">{{ step }}</span>
  </Tab>
</template>

<script setup>
import { Tab } from "@headlessui/vue";
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  step: {
    type: String,
    required: false,
  },
  isActive: {
    type: Boolean,
    required: true,
  },
});
</script>