<template>
    <v-timeline :direction="isPhone" line-color="#678ece">
        <v-timeline-item dot-color="#0c2b5e">
            <template v-slot:opposite>
                <div class="font-italic">{{ props.fases.local }}</div>
            </template>
                <div class="text-h5">Fase Local</div>
        </v-timeline-item>

        <v-timeline-item dot-color="#0c2b5e">
          <template v-slot:opposite>
            <div class="font-italic">{{ props.fases.semifinal }}</div>
          </template>
          <div>
            <div class="text-h5">Semifinal</div>
          </div>
        </v-timeline-item>

        <v-timeline-item dot-color="#0c2b5e">
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
import { onBeforeMount } from 'vue'
import { ref } from 'vue'
interface Fases {
    local: string
    semifinal: string
    final: string
}
const props = defineProps<{
    fases: Fases
    direction : string
}>()

const isPhone = ref()

onBeforeMount(() => {
  if (window.innerWidth > 1280) {
    isPhone.value = "horizontal"
  }
  else {
    isPhone.value = "vertical"
  }
})
</script>

<style scoped>
.v-card {
    margin: 2%;
}
</style>