<template>
  <v-carousel
    cycle
    :height="carouselHeight"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="getImageUrl(image)"
      :alt="info[i]"
    >
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import CM_01 from "@/assets/Slide/CM_01.webp";
import TIMES_01 from "@/assets/Slide/TIMES_01.webp";
import TIMES_02 from "@/assets/Slide/TIMES_02.webp";

const images = [CM_01, TIMES_01, TIMES_02];
const info = ["LXIII Council Meeting", "TIMES Final 2023 Photo", "TIMES Final 2023 Winner"];

const getImageUrl = (image: any) => image;

const carouselHeight = ref(window.innerHeight * 0.7);

onMounted(() => {
  const updateCarouselHeight = () => {
    carouselHeight.value = window.innerHeight * 0.7;
  };

  window.addEventListener("resize", updateCarouselHeight);

  // Limpia el event listener cuando el componente se desmonte
  onUnmounted(() => {
    window.removeEventListener("resize", updateCarouselHeight);
  });
});
</script>