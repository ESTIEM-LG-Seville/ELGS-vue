<template>
<v-card
    align="center"
>
    <v-card-title id="title-history">
        CONOCE NUESTRA HISTORIA
    </v-card-title>
    <v-card-text>
        <v-timeline density="compact" side="end" line-color="primary">
            <v-timeline-item
              v-for="info in OurHistory"
              :key="info.year"
              dot-color="secondary"
              size="small"
            >
                <v-alert 
                  class="text-left timeline-alert"
                  density="compact"
                  color="primary"
                  :title="info.year.toString()"
                  :text="info.description"
                >
                </v-alert>
            </v-timeline-item>
          </v-timeline>
    </v-card-text>
</v-card>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { OurHistory } from '@/components/data/history';

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
.v-card-text {
    display: flex;
    justify-content: center;
}
.timeline-alert {
  min-width: 1280px; /* Ancho mínimo */
  max-width: 1920px; /* Ancho máximo */
}

/* Media queries para ajustar el ancho máximo según la resolución */
@media screen and (max-width: 1280px) {
  .timeline-alert {
    min-width: 960px; /* Ancho máximo para resoluciones entre 600px y 959px */
  }
}

@media screen and (max-width: 960px) {
  .timeline-alert {
    min-width: 100%; /* Ancho máximo para resoluciones de 960px en adelante */
  }
}
</style>