<template>
    <v-img src="@/assets/logo.svg" alt="ESTIEM LG Seville Logo"></v-img>
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