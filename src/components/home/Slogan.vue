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
        @click="show = !show"
        >
        </v-btn>
    </v-card-actions>
    <v-expand-transition>
        <mission-vision v-show="show" :data="VM">
        </mission-vision>
    </v-expand-transition>
</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MissionVision from '@/components/home/MissionVision.vue';
import VM from "@/components/helpers/VM.json"
let show = ref(false);
</script>

<style scoped>
.v-card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>