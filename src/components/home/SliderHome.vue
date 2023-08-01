<template>
  <v-carousel
    cycle
    height="750"
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
import CM_01 from "@/assets/Slide/CM_01.jpg";
import TIMES_01 from "@/assets/Slide/TIMES_01.png";
import TIMES_02 from "@/assets/Slide/TIMES_02.png";

const images = [CM_01, TIMES_01, TIMES_02];
const info = ["LXIII Council Meeting", "TIMES Final 2023 Photo", "TIMES Final 2023 Winner"];

const getImageUrl = (image: any) => image;
</script>