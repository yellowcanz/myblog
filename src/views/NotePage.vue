<template>
    <div class="flex flex-col md:flex-row w-full">
        <div class="w-full">
            <div class="bg-white p-4 mx-auto max-w-2xl lg:max-w-5xl">
                <div class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mt-16">一些笔记的记录
                </div>
                <ul class="space-y-4 mt-16 sm:mt-20 max-w-3xl pl-6 relative">
                    <li v-for="article in articles" :key="article.name">
                        <div class="flex-col lg:flex-row flex justify-center items-center w-full my-24">
                            <div class="mr-12 self-start">
                                <p class="mt-1  mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                                    {{ article.date }} </p>
                            </div>
                            <div class="md:col-span-3 group relative flex flex-col items-start">
                                <h2 class="text-lg font-bold">{{ article.title }}</h2>
                                <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{{
                                    article.description }}</p>
                                <router-link :to="`/mdfile/${article.name}`"
                                    class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">阅读更多</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import { jsArray } from '@/getData/getArticle';
const articles = ref([]);

onMounted(async () => {
    articles.value = await jsArray()
})


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
  