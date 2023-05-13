<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      ESTIEM LG SEVILLE
    </v-app-bar-title>
    <!-- Use the v-tabs in desktop mode -->
    <v-tabs v-model="tab">
      <v-tab value="H" :to="{name:'Home'}">Home</v-tab>
      <v-tab value="E" :to="{name:'Events'}">Events</v-tab>
    </v-tabs>
    <!-- Use navegation drawer for mobile -->
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
  >
    <v-list>
      <v-list-item prepend-icon="fas fa-house" title="Home" :active="$route.name == 'Home'" :to="{name:'Home'}"></v-list-item>
      <v-list-item prepend-icon="fas fa-passport" title="Events" :active="$route.name == 'Events'" :to="{name:'Events'}"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
  // Esta archivo de vue contiene el menu que siempre se muestra
  import { ref } from 'vue';
  const drawer = ref(false);
  const tab = ref(null)
</script>
<style scoped>
@media screen and (max-width: 1280px) {
  .v-slide-group {
    display: none !important;
  }
}
</style>
