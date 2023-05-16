<template>
    <v-timeline direction="horizontal">
        <v-timeline-item>
            <template v-slot:opposite>
                Opposite content
            </template>
            <div>
                <div class="text-h6">Content title</div>
            </div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite>
            Opposite content
          </template>
          <div>
            <div class="text-h6">Content title</div>
          </div>
        </v-timeline-item>

        <v-timeline-item>
          <template v-slot:opposite>
            Opposite content
          </template>
          <div>
            <div class="text-h6">Content title</div>
          </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.v-card {
    margin: 2%;
}
</style>