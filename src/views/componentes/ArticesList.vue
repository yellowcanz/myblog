<template>
    <ul class="space-y-4 mt-16 sm:mt-20 max-w-3xl pl-6 relative">
        <li v-for="article in articles" :key="article.name">
            <div class="flex-col lg:flex-row flex justify-center items-center w-full my-24">
                <div class="mr-12 self-start">
                    <p class="mt-1  mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500">
                        {{ article.date }} </p>
                </div>
                <div class="md:col-span-3 group relative flex flex-col items-start">
                    <h2 class="text-lg font-bold text-zinc-950 dark:text-zinc-400">{{ article.title }}</h2>
                    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{{
                        article.description }}</p>
                    <router-link :to="`/mdfile/${article.sha}`"
                        class="relative z-10 mt-4 flex items-center text-sm font-medium text-teal-500">阅读更多</router-link>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getMdFiles, MdData } from '@/getData/getArticle.js';
import { useRoute } from 'vue-router';
const route = useRoute();
const articles = ref([]);
// 存放MdData数据
const mdFilesData = ref([])

// 获取md文件内容
const mdFiles = async () => {
    const results = await Promise.all(
        mdFilesData.value.map(async obj => {
            const { sha } = obj
            const result = await getMdFiles(sha)
            // articles.value.push(...result.frontmatterList)
            return { frontmatterList: result.frontmatterList, index: mdFilesData.value.findIndex(item => item.sha === sha) }
        }))
    // 根据索引排序结果
    results.sort((a, b) => b.index - a.index)
    
    // 将排序后的内容添加到 articles 数组
    results.forEach(result => {
        articles.value.push(...result.frontmatterList)
    })
}

onMounted(async () => {
    mdFilesData.value = await MdData(route.name)
    mdFiles()
})
</script>

<style lang="less" module></style>
