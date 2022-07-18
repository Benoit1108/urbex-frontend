<template>
  <!-- Section main  -->
  <div
    class="
      rounded-lg
      bg-white
      w-4/6
      ml-auto
      flex
      top-20
      sticky
      flex-col
      py-1
      px-4
      mt-2
      shadow-md
    "
  >
    <div class="flex justify-center">
      <div
        class="
          bg-black
          w-full
          rounded-full
          items-center
          h-10
          w-10
          flex
          justify-center
          mt-4
        "
      >
        <f-icon class="text-white h-8 w-8" name="user" />
      </div>
    </div>
    <span class="w-full font-semibold mt-2 flex justify-center"
      >Camille Legrand</span
    >
    <div class="flex justify-between mt-2 flex-wrap">
      <div class="text-sm"><span class="font-semibold">130</span> abonnés</div>
      <div class="text-sm">
        <span class="font-semibold">20</span> abonnements
      </div>
    </div>
    <button
      class="
        rounded
        mt-8
        mb-3
        justify-center
        items-center
        flex
        mx-auto
        h-8
        min-x-36
        w-36
        bg-sky-700
        text-white
      "
    >
      Voir mon profil
    </button>
  </div>
</template>