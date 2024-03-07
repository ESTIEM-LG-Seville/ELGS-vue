<template>
    <div class="pa-4">
        <logo-estiem alt="ESTIEM LG Seville Logo"></logo-estiem>
    </div>
    <v-footer class="justify-center">
        <a
            v-for="(ref, i) in info"
            :key="i"
            :href="ref"
            target="_blank"
            class="mx-2"
        >
            <v-btn
                :icon="icons[i]"
                variant="outlined"
                color="primary"
            >
            </v-btn>
        </a>
    </v-footer>
</template>

<script setup lang="ts">
import logoEstiem from '@/assets/Logo_ESTIEM_LG_Seville.vue';
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