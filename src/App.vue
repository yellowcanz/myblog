<script setup>
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
import FooterPage from '@/components/FooterPage.vue'

</script>

<template>
  <NavBar></NavBar>
  <RouterView />
  <FooterPage></FooterPage>
</template>

<style scoped>

</style>
