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
    <div class="flex flex-col space-y-4 mt-8 mb-4">
      <button
        class="flex space-x-2 focus:bg-gray-100 py-2 w-full focus:rounded-md"
      >
        <f-icon class="text-sky-800 h-6 w-6" name="user" />
        <span>Aperçu du profil</span>
      </button>
      <button
        class="flex space-x-2 focus:bg-gray-100 py-2 w-full focus:rounded-md"
      >
        <f-icon class="text-sky-800 h-6 w-6" name="user" />
        <span>Modifier le profil profil</span>
      </button>
      <button
        class="flex space-x-2 focus:bg-gray-100 py-2 w-full focus:rounded-md"
      >
        <f-icon class="text-sky-800 h-6 w-6" name="lock" />
        <span>Modifier le mot de passe</span>
      </button>
      <button
        class="flex space-x-2 focus:bg-gray-100 py-2 w-full focus:rounded-md"
      >
        <f-icon class="text-sky-800 h-6 w-6" name="key" />
        <span>Autre</span>
      </button>
    </div>
  </div>
</template>