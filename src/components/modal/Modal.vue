<template>
  <TransitionRoot appear :show="props.isOpen" as="template">
    <Dialog as="div" @close="$emit('close', false)" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="
                w-full
                max-w-md
                transform
                overflow-hidden
                rounded-2xl
                bg-white
                p-6
                text-left
                align-middle
                shadow-xl
                transition-all
              "
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900"
              >
                Ajouter un lieu
              </DialogTitle>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                  >Lieu</label
                >
                <input
                  type="text"
                  name="lieu"
                  id="lieu"
                  autocomplete="Lieu"
                  class="
                    mt-1
                    focus:ring-indigo-500 focus:border-indigo-500
                    block
                    w-full
                    shadow-sm
                    sm:text-sm
                    border-gray-300
                    rounded-md
                  "
                />
              </div>

              <div class="mt-4 justify-between flex">
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    bg-blue-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-900
                    hover:bg-blue-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                  "
                  @click="$emit('close', false)"
                >
                  Fermer
                </button>
                <button
                  type="button"
                  class="
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    bg-blue-100
                    px-4
                    py-2
                    text-sm
                    font-medium
                    text-blue-900
                    hover:bg-blue-200
                    focus:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-blue-500
                    focus-visible:ring-offset-2
                  "
                  @click="$emit('close', false)"
                >
                  Enregistrer
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { defineProps } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";

const props = defineProps({
  isOpen: Boolean,
});
</script>
