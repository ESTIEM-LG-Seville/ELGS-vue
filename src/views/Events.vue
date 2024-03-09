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
import { eventsESTIEM } from '@/components/data/eventsInfo'
const tab = ref(null)
const LGJData = readonly(eventsESTIEM[0])
const TIMESData = readonly(eventsESTIEM[1])
</script>

<style>
</style>../components/data/eventsInfo