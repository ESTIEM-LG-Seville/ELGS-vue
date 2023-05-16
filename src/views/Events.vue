<template>
    <v-tabs
        v-model="tab"
        align-tabs="center"
    >
        <v-tab value="LGJpage">Let's Get a Job</v-tab>
        <v-tab value="TIMESpage">TIMES</v-tab>
    </v-tabs>
    <v-window v-model="tab">
        <v-window-item value="LGJpage">
            <LGJ :event="LGJData"></LGJ>
        </v-window-item>
        <v-window-item value="TIMESpage">
            <TIMES :event="TIMESData"></TIMES>
        </v-window-item>
    </v-window>
</template>

<script lang="ts" setup>
// Este archivo llama a los componentes necesarios para desplegar los distintos componentes
import { readonly, ref } from "vue";
import LGJ from '../components/events/LGJ.vue'
import TIMES from '../components/events/TIMES.vue'
import { AllEvents } from '../components/helpers/eventsInfo.json'
const tab = ref(null)
const LGJData = readonly(AllEvents[0])
const TIMESData = readonly(AllEvents[1])
</script>

<style>
</style>