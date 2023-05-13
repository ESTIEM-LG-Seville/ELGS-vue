<template>
    <h1>{{ props.event.name }}</h1>
    <p>{{ props.event.description }}</p>
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