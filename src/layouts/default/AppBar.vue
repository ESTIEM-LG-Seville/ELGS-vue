<template>
  <v-app-bar>
    <v-app-bar-nav-icon>

    </v-app-bar-nav-icon>
    <v-app-bar-title>
      ESTIEM LG SEVILLE
    </v-app-bar-title>
    <!-- Use the v-tabs in desktop mode -->
    <v-tabs>
      <v-tab :to="{name:'Home'}">Home</v-tab>
      <v-tab :to="{name:'Events'}">Events</v-tab>
    </v-tabs>
    <!-- Use navegation drawer for mobile -->
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
    >
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script lang="ts" setup>
  let drawer=false
  // Esta archivo de vue contiene el menu que siempre se muestra
</script>
<style>
</style>
