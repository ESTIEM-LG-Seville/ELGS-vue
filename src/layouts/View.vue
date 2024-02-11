<template>
  <v-app>
    <app-bar />
    <v-main>
      <router-view />
    </v-main>
    <back-to-top-btn />
  </v-app>
  </template>

<script lang="ts" setup>
  // Este archivo de vue contiene el router para poder cambiar el conteido de la web
  import AppBar from './AppBar.vue';
  import BackToTopBtn from '@/components/helpers/BackToTopBtn.vue';
</script>
