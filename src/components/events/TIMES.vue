<template>
    <v-container align="center">
        <v-card 
            max-width="90%"
            variant="outlined"
        >
            <v-card-title>{{ props.event.name }}</v-card-title>
            <v-card-text>{{ props.event.description }}</v-card-text>
        </v-card>
        <timelinetimes :fases="FasesData"></timelinetimes>
        <v-card
            max-width="90%"
            variant="outlined"
        >
            <v-card-title>{{ props.event.name + '\xa0' + 'Local Sevilla' }}</v-card-title>
            <v-card-text>{{ props.event.detail1 }}</v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts" setup>
// Este archivo contendra lo necesario acerca del TIMES
import timelinetimes from "./timeLineTIMES.vue"
import { FasesTIMES } from "../helpers/eventsInfo.json"
import { readonly } from "vue"
interface Event {
    name: string
    description: string
    detail1: string
    detail2: string
}
const props = defineProps<{
    event: Event
}>()
const FasesData = readonly(FasesTIMES)
</script>

<style scoped>
.v-card {
    margin: 2%;
}
</style>