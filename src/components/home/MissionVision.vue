<template>
<v-container>
    <v-card
        id="Mission"
        color="primary"
    >
        <v-card-title>{{ props.data.VM[0].name }}</v-card-title>
        <v-card-text>{{ props.data.VM[0].description }}</v-card-text>
    </v-card>
    <v-card
        id="Vision"
        color="secondary"
    >
        <v-card-title>{{ props.data.VM[1].name }}</v-card-title>
        <v-card-text>{{ props.data.VM[1].description }}</v-card-text>
    </v-card>
</v-container>
</template>

<script setup lang="ts">
import { MeasureMemoryMode } from 'vm';

interface Data {
    VM: Array<{
        name: string,
        description: string
    }>
}
const props = defineProps<{
    data: Data
}>()
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
