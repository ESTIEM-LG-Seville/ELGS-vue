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
  import AppBar from '@/components/AppBar.vue';
  import BackToTopBtn from '@/components/BackToTopBtn.vue';
</script>
