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
      <div v-show="show">
        
      </div>
    </v-expand-transition>
</v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let show = ref(false);
</script>

<style scoped>
.v-card-actions {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>