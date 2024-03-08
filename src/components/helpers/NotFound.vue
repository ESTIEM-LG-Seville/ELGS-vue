<script setup lang="ts">
</script>

<template>
    <v-container>
        <v-alert 
            type="error"
            class="d-flex justify-center"
        >
            <v-alert-title>Error 404 - Page Not Found</v-alert-title>
            <v-btn
                color="secondary"
                @click="$router.push({name: 'Home'})"
                class="ma-4"
            >
                go back home
            </v-btn>
        </v-alert>
    </v-container>
</template>