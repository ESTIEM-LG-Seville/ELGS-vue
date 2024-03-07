<template>
    <v-container 
        align="center"
    >
        <v-card
           max-width="90%"
           variant="outlined"
        >
            <lets-get-a-job class="mt-4" alt="LGJ Logo" max-width=128 height=128></lets-get-a-job>
           <v-card-title>{{ props.event.name }}</v-card-title>
           <v-card-text>{{ props.event.description }}</v-card-text>
        </v-card>
        <v-card
            max-width="90%"
            variant="outlined"
        >
            <v-card-title>Primer día del evento</v-card-title>
            <v-card-text>{{ props.event.detail1 }}</v-card-text>
        </v-card>
        <v-card
            max-width="90%"
            variant="outlined"
        >
            <v-card-title>Segundo día del evento</v-card-title>
            <v-card-text>{{ props.event.detail2 }}</v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts" setup>
// Este archivo contendra lo necesario acerca del Let's get a job
import LetsGetAJob from '@/assets/LetsGetAJob.vue';
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

<style scoped>
.v-card {
    margin: 2%;
}
</style>