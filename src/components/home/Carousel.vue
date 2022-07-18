<template>
  <Carousel
    :items-to-show="3"
    :transition="7200"
    :wrap-around="true"
    :autoplay="true"
  >
    <Slide v-for="slide in 5" :key="slide">
      <div class="carousel__item">Concours</div>
    </Slide>

    <template>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  components: {
    Carousel,
    Slide,
    Navigation,
  },
};
</script>

<style scoped>
.carousel__item {
  @apply min-h-[120px] w-full bg-white font-bold justify-center items-center flex rounded-lg;
}

.carousel__slide {
  @apply p-2;
}
</style>
