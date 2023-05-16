<template>
    <v-container>
        <v-card 
            max-width="90%"
            variant="outlined"
        >
            <v-card-title>{{ props.event.name }}</v-card-title>
            <v-card-text>{{ props.event.description }}</v-card-text>
        </v-card>
        <timelinetimes></timelinetimes>
    </v-container>
</template>

<script lang="ts" setup>
// Este archivo contendra lo necesario acerca del TIMES
import timelinetimes from "./timeLineTIMES.vue"
interface Event {
    name: string
    description: string
    detail1: string
    detail2: string
}
const props = defineProps<{
    event: Event
}>()
</script>