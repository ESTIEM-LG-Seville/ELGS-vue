<template>
<v-card
    align="center"
>
    <v-card-title id="title-Slogan">
        WORK HARD PLAY HARD
    </v-card-title>
    <v-card-actions
    >
        <v-btn
        icon="fas fa-chevron-down"
        @click="showScroll"
        >
        </v-btn>
    </v-card-actions>
    <!-- <v-expand-transition> -->
    <v-scroll-y-transition>
        <mission-vision id="VMelement" v-show="show">
        </mission-vision>
    </v-scroll-y-transition>
    <!-- </v-expand-transition> -->
</v-card>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import MissionVision from '@/components/home/MissionVision.vue';
import { onMounted, onBeforeUnmount } from 'vue';
let show = ref(false);
async function showScroll() {
    if (!show.value) {
        show.value = true
        await nextTick()
        const VMel = document.getElementById('VMelement')
        if (VMel !== null) {
            const Pos = VMel.offsetTop + window.innerHeight
            window.scrollTo(0, Pos)
        }
    }
    else
        show.value = false
}
let resizeObserver: ResizeObserver;

onMounted(() => {
  const el = document.querySelector('#title-Slogan');
  if (el !== null) {
    resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        if (entry.contentRect.width >= 600 && entry.contentRect.width <= 1280) {
            el.classList.remove('text-h6','text-h2');
            el.classList.add('text-h4');
        } else if(entry.contentRect.width >1280) {
            el.classList.remove('text-h4','text-h6');
            el.classList.add('text-h2');
        }
        else {
            el.classList.remove('text-h2','text-h4');
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
.v-card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>