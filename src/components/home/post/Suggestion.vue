<template>
  <!-- Section main  -->
  <div
    class="rounded-lg bg-white flex top-20 sticky flex-col -mt-2 px-4 shadow-md"
  >
    <h2 class="text-lg font-semibold mt-4">Suggestions d'abonnements</h2>
    <div
      v-for="suggest in 5"
      :key="suggest"
      class="flex items-center pt-2 pb-4 w-full"
    >
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
        <f-icon class="text-white h-8 w-8" name="user" />
      </div>
      <span class="w-full pl-2">Camille Legrand</span>
      <button class="w-full text-sky-900 font-semibold text-right">
        S'abonner
      </button>
    </div>
  </div>
</template>