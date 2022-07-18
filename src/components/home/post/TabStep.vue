<template>
  <TabGroup
    :selected-index="modelValue"
    @change="$emit('update:modelValue', modelValue)"
  >
    <TabList class="flex w-full space-x-6">
      <TabTitle title="Étape 1" step="Ajout d'un média" isActive />
      <TabTitle
        title="Étape 2"
        step="Description du post"
        :isActive="modelValue > 0"
      />
      <TabTitle
        title="Étape 3"
        step="Prévisualisation"
        :isActive="modelValue > 1"
      />
    </TabList>
    <TabPanels class="mt-2">
      <slot></slot>
    </TabPanels>
  </TabGroup>
</template>

<script setup>
import { TabGroup, TabList, TabPanels } from "@headlessui/vue";
import TabTitle from "@/components/home/post/TabTitle";
import { defineProps, defineEmits } from "vue";

defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});
defineEmits(["update:modelValue"]);
</script>