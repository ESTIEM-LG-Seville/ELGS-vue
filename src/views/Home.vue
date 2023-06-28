<template>
  <HelloWorld />
  <Slogan />
</template>

<script lang="ts" setup>
// Este archivo de vue llama a los distntos componentes necesarios que tengan que ver con el home
  import HelloWorld from '@/components/home/HelloWorld.vue'
  import Slogan from '@/components/home/Slogan.vue'
</script>
