<template>
  <!-- Section main  -->
  <div
    v-for="post in 3"
    :key="post"
    class="rounded-lg shadow-md bg-white w-full flex flex-col px-4 mt-4"
  >
    <!-- Section header  -->
    <div class="flex w-full justify-between items-center mt-4">
      <h2 class="text-lg font-semibold">
        Visite de maison en ruine en Bretagne
      </h2>
      <f-icon class="text-gray-600" name="more-horizontal" />
    </div>
    <div class="flex py-2">
      <f-icon name="user" />
      <p class="pl-2">Camille Legrand</p>
    </div>
    <!-- Section description  -->
    <p
      :class="getEllipsisClass"
      class="flex flex-wrap text-sm line-clamp-4"
      ref="description"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a faucibus
      tortor. Maecenas et tortor posuere, placerat purus sit amet, consectetur
      sapien. Sed consequat nulla eros, id semper magna eleifend at. Nullam
      consequat euismod libero, ut accumsan sapien ornare sit amet. Praesent
      aliquam placerat porta. Phasellus felis erat, ornare non ultrices a,
      condimentum non diam. In sit amet convallis leo. Fusce id convallis orci,
      sit amet mattis elit. In ullamcorper tellus urna, a aliquet sapien
      sagittis a. Vestibulum sem ligula, ullamcorper sit amet ultrices nec,
      porta vel justo.
    </p>
    <button
      v-show="displayButtonMore"
      @click="displayMore = !displayMore"
      class="text-sky-700 self-start"
    >
      Continuer à lire
    </button>
    <img
      :src="require('@/assets/images/post.png')"
      alt="Post"
      class="my-2 mx-auto w-auto rounded-lg"
    />
    <div class="flex items-center mb-2 w-full">
      <div
        class="
          bg-green-500
          rounded-full
          w-7
          h-7
          items-center
          flex
          justify-center
        "
      >
        <f-icon class="text-white" name="heart" />
      </div>
      <span class="pl-2">30</span>
      <span class="w-full text-right">5 commentaires</span>
    </div>
    <hr />
    <div class="flex justify-between px-8 py-4">
      <div class="flex">
        <f-icon name="heart" class="mr-2" />
        J'aime
      </div>
      <div class="flex">
        <f-icon name="message-square" class="mr-2" />
        Commmenter
      </div>
      <div class="flex">
        <f-icon name="share" class="mr-2" />
        Partager
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMore: false,
      displayButtonMore: false,
    };
  },
  computed: {
    getEllipsisClass() {
      return this.displayMore ? "line-clamp-none" : "line-clamp-5";
    },
  },
  mounted() {
    this.getLineNumber();
    window.addEventListener("resize", this.getLineNumber, { passive: true });
  },
  unmounted() {
    window.removeEventListener("resize", this.getLineNumber, { passive: true });
  },
  methods: {
    getLineNumber() {
      this.displayButtonMore =
        this.$refs.description.clientHeight <
        this.$refs.description.scrollHeight;
    },
  },
};
</script>