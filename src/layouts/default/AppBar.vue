<template>
  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer" icon="fas fa-bars" color="primary"></v-app-bar-nav-icon>
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
      <v-list-item prepend-icon="fas fa-house" color="primary" title="Home" :active="$route.name == 'Home'" :to="{name:'Home'}"></v-list-item>
      <v-list-item prepend-icon="fas fa-passport" color="primary" title="Events" :active="$route.name == 'Events'" :to="{name:'Events'}"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

const drawer = ref(false);
const tab = ref<string | null>(null); // Ahora permitimos que tab pueda ser de tipo 'string' o 'null'
const route = useRoute();

// Creamos una función para actualizar el valor de tab cuando estamos en la ruta principal '/'
function updateTabOnRootRoute() {
  if (route.path === '/') {
    tab.value = 'H';
  }
}

// Usamos el hook watch para observar cambios en la ruta y llamar a la función updateTabOnRootRoute
onMounted(() => {
  updateTabOnRootRoute();
});

onUnmounted(() => {
  // Limpia la observación cuando el componente se desmonta
  // Esto es opcional pero recomendado para evitar fugas de memoria
  stopWatchingRoute();
});

const stopWatchingRoute = watch(
  () => route.path,
  () => {
    updateTabOnRootRoute();
  }
);
</script>
<style scoped>
@media screen and (max-width: 1280px) {
  .v-slide-group {
    display: none !important;
  }
}
</style>
