<template>
<v-card
    align="center"
>
    <v-card-title id="title-history">
        CONOCE NUESTRA HISTORIA
    </v-card-title>
</v-card>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
interface Data {
    OurHistory: Array<{
        year: number,
        description: string
    }>
}
const props = defineProps<{
    data: Data
}>()

let resizeObserver: ResizeObserver;

onMounted(() => {
  const el = document.querySelector('#title-history');
  if (el !== null) {
    resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.contentRect.width >= 600 && entry.contentRect.width <= 1280) {
            el.classList.remove('text-h6','text-h3');
            el.classList.add('text-h5');
        } else if(entry.contentRect.width >1280) {
            el.classList.remove('text-h5','text-h6');
            el.classList.add('text-h3');
        }
        else {
            el.classList.remove('text-h3','text-h5');
            el.classList.add('text-h6');
        }
      }
    });
    resizeObserver.observe(el.parentNode as Element);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
  }
});
</script>

<style scoped>
</style>