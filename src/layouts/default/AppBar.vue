<template>
  <v-app-bar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-app-bar-title>
      ESTIEM LG SEVILLE
    </v-app-bar-title>
    <!-- Use the v-tabs in desktop mode -->
    <v-tabs>
      <v-tab :to="{name:'Home'}">Home</v-tab>
      <v-tab :to="{name:'Events'}">Events</v-tab>
    </v-tabs>
    <!-- Use navegation drawer for mobile -->
    <!-- <v-navigation-drawer
      v-model="drawer"
      location="left"
      temporary
    >
      <v-list>
        <v-list-item title="Home" :to="{name:'Home'}"></v-list-item>
        <v-list-item title="Events" :to="{name:'Events'}"></v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  </v-app-bar>
</template>

<script lang="ts" setup>
  // Esta archivo de vue contiene el menu que siempre se muestra

  // let drawer=false
</script>
<style>
</style>
