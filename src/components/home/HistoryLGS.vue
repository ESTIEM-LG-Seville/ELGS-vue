<template>

</template>

<script setup lang="ts">
interface Data {
    OurHistory: Array<{
        year: number,
        description: string
    }>
}
const props = defineProps<{
    data: Data
}>()
</script>

<style>
</style>