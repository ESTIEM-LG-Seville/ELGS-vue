<template>
  <v-app>
    <default-bar />

    <default-view />
    
    <back-to-top-btn />
  </v-app>
</template>

<script lang="ts" setup>
// Este archivo de vue contiene la web en general, para poder siempre mostrar el menu y el conteido
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import BackToTopBtn from '../../components/helpers/BackToTopBtn.vue'
</script>
