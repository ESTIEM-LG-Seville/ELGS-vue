<template>
  <HelloWorld />
  <Slogan />
  <HistoryLGS :data="OurHistory"></HistoryLGS>
</template>

<script lang="ts" setup>
// Este archivo de vue llama a los distntos componentes necesarios que tengan que ver con el home
import HelloWorld from '@/components/home/HelloWorld.vue'
import Slogan from '@/components/home/Slogan.vue'
import HistoryLGS from '@/components/home/HistoryLGS.vue';
import OurHistory from '@/components/helpers/history.json'
</script>
