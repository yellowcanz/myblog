<template>
    <div class="flex flex-col md:flex-row w-full">
        <div class="w-full">
            <div class="bg-white p-4 mx-auto max-w-2xl lg:max-w-5xl">
                <div class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mt-16">一些笔记的记录
                </div>
                <articesList></articesList>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import articesList from './componentes/ArticesList.vue'

</script>
  
<style scoped>
ul::after {
    width: 1px;
    height: 100%;
    background: #f4f4f5;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
}
</style>
  