<template>
    <v-btn
        v-scroll="onScroll"
        v-show="fab"
        fab
        dark
        fixed
        bottom
        right
        color="primary"
        @click="toTop"
    >
        <v-icon icon="fas fa-arrow-up" />
    </v-btn>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const fab = ref(false);
        function onScroll (e:any) {
            if (typeof window === 'undefined') return
                const top = window.pageYOffset ||   e.target.scrollTop || 0
                fab.value = top > 20
        };
        function toTop () {
            this.$vuetify.goTo(0)
        };
</script>