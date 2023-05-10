<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      ESTIEM LG SEVILLE
    </v-app-bar-title>
    <!-- Use the v-tabs in desktop mode -->
    <v-tabs>
      <v-tab :to="{name:'Home'}">Home</v-tab>
      <v-tab :to="{name:'Events'}">Events</v-tab>
    </v-tabs>
    <!-- Use navegation drawer for mobile -->
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item title="Home" :to="{name:'Home'}"></v-list-item>
      <v-list-item title="Events" :to="{name:'Events'}"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  // Esta archivo de vue contiene el menu que siempre se muestra
  import { ref } from 'vue';
  const drawer = ref(false);
</script>
<style>
@media screen and (max-width: 1280px) {
  .v-slide-group {
    display: none !important;
  }
}
</style>
