<template>
<v-container>
    <v-card
        id="Mission"
        color="primary"
    >
        <v-card-title>{{ VM[0].name }}</v-card-title>
        <v-card-text>{{ VM[0].description }}</v-card-text>
    </v-card>
    <v-card
        id="Vision"
        color="secondary"
    >
        <v-card-title>{{ VM[1].name }}</v-card-title>
        <v-card-text>{{ VM[1].description }}</v-card-text>
    </v-card>
</v-container>
</template>

<script setup lang="ts">
import { VM } from '@/components/helpers/VM';
</script>

<style scoped>
.v-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}
.v-card{
    margin: 1%;
}
#Mission {
    grid-column: 1;
}
#Vision {
    grid-column: 2;
}
</style>
