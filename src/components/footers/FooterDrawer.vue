<template>
    <div class="pa-4">
        <LogoEstiemLgSeville alt="ESTIEM LG Seville Logo" aria-label="ESTIEM LG Seville Logo"</LogoEstiemLgSeville>
    </div>
    <v-footer class="justify-center">
        <a
            v-for="(ref, i) in info"
            :key="i"
            :href="ref"
            target="_blank"
            class="mx-2"
            aria-label="Social Media"
        >
            <v-btn
                :icon="icons[i]"
                variant="outlined"
                color="primary"
                aria-label="Social Media"
            >
            </v-btn>
        </a>
    </v-footer>
</template>

<script setup lang="ts">
import LogoEstiemLgSeville from '@/assets/LogoEstiemLgSeville.vue';
const icons = [
    "fab fa-linkedin",
    "fab fa-instagram",
    "fas fa-envelope"
]
const info = [
    "https://www.linkedin.com/company/estiemlgseville",
    "https://www.instagram.com/estiemlgseville/",
    "mailto:info@estiemlgseville.org"
]
</script>

<style scoped>
</style>