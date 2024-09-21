<template>
    <header class="w-100 position-fixed" style="z-index: 1;">
    <MenuComponent />
  </header>
  
   <RouterView/> 
</template>

<script setup>
import { RouterView } from 'vue-router';
import MenuComponent from './components/Menu/MenuComponent.vue';
</script>


<style>
</style>