<template>
<v-card
    align="center"
>
    <v-card-title>
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
        <mission-vision id="VMelement" v-show="show" :data="VM">
        </mission-vision>
    </v-scroll-y-transition>
    <!-- </v-expand-transition> -->
</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MissionVision from '@/components/home/MissionVision.vue';
import VM from "@/components/helpers/VM.json"
let show = ref(false);
function showScroll() {
    const VMel = document.getElementById('VMelement')
    console.log(VMel,'Elemento')
    if (show.value == false) {
        show.value = true
        if (VMel !== null) {
            console.log(VMel.offsetTop,'Posicion')
            window.scrollBy(0, VMel.offsetTop)
        }
    }
    else
        show.value = false
}
</script>

<style scoped>
.v-card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>