<template>
  <!-- Section main  -->
  <div class="grid gap-4 grid-cols-2 mt-6">
    <div v-for="card in 4" :key="card" class="bg-white rounded-lg">
      <img
        :src="require('@/assets/images/post.png')"
        alt="Post"
        class="mx-auto rounded-t-lg"
      />
      <div class="flex px-4 flex-col space-y-1 mb-4">
        <span class="text-sm mt-3">11 Mai 2022</span>
        <h2 class="text-sky-800 text-lg font-semibold">
          Concours de Juin 2022 : thème horreur
        </h2>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
          ligula id ligula viverra interdum et quis magna. Vestibulum non
          suscipit est. .
        </p>
      </div>
    </div>
  </div>
</template>

