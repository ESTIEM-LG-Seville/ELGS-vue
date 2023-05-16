<template>
    <v-timeline direction="horizontal">
        <v-timeline-item>
            <template v-slot:opposite>
                <div class="font-italic">{{ props.fases.local }}</div>
            </template>
                <div class="text-h5">Fase Local</div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite>
            <div class="font-italic">{{ props.fases.semifinal }}</div>
          </template>
          <div>
            <div class="text-h5">Semifinal</div>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite>
            <div class="font-italic">{{ props.fases.final }}</div>
          </template>
          <div>
            <div class="text-h5">Final</div>
          </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script lang="ts" setup>
interface Fases {
    local: string
    semifinal: string
    final: string
}
const props = defineProps<{
    fases: Fases
}>()
</script>

<style scoped>
.v-card {
    margin: 2%;
}
</style>