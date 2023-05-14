<template>
    <v-container 
        align="center"
    >
        <v-card
           max-width="90%"
           variant="outlined"
           >
           <v-card-title>
               <v-img src="../../assets/LetsGetAJob.svg" max-width="128px"></v-img>
               {{ props.event.name }}
           </v-card-title>
           <v-card-text>
               {{ props.event.description }}
           </v-card-text>
        </v-card>
    </v-container>
</template>

<script lang="ts" setup>
// Este archivo contendra lo necesario acerca del Let's get a job
interface Event {
    name: string
    description: string
}
const props = defineProps<{
    event: Event
}>()
</script>