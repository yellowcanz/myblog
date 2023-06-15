<script setup>
import { RouterView } from 'vue-router'
import NavBar from './views/componentes/NavBar.vue'
import FooterPage from './views/componentes/FooterPage.vue'

</script>

<template>
  <NavBar></NavBar>
  <RouterView />
  <FooterPage></FooterPage>
</template>

<style scoped>

</style>
