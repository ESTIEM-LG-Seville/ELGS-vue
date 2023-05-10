<template>
    <v-tabs
        v-model="tab"
        align-tabs="center"
    >
        <v-tab :value="LGJpage">Let's Get a Job</v-tab>
        <v-tab :value="TIMESpage">TIMES</v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item :value="LGJpage">
            <LGJ></LGJ>
        </v-window-item>
        <v-window-item :value="TIMESpage">
            <TIMES></TIMES>
        </v-window-item>
    </v-window>
</template>

<script lang="ts" setup>
// Este archivo llama a los componentes necesarios para desplegar los distintos componentes
import { ref } from "vue";
import LGJ from '../components/events/LGJ.vue'
import TIMES from '../components/events/TIMES.vue'

const tab = ref(null)
</script>

<style>
</style>