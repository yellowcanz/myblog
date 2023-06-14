<template>
    <div class="container mx-auto px-4">
        <!-- 自我介绍和关注链接 -->
        <div class="py-8 max-w-2xl">
            <h1 class="text-4xl font-bold mb-4">Yellowcan</h1>
            <div class="mb-6 text-base text-zinc-600 dark:text-zinc-400">
                <p class=" ">真好.又活了一天。这个没什么用的项目使用了</p>
                <ul>
                    <li><a href="">vue3.0</a></li>
                    <li><a href="">vite+vite-plugin-md</a></li>
                    <li><a href="">highlight</a></li>
                    <li><a href="">tailwindcss</a></li>
                </ul>
            </div>
            <div class="flex space-x-4">
                <a href="#" class="text-blue-500">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="text-blue-500">
                    <i class="fab fa-github"></i>
                </a>
                <a href="#" class="text-blue-500">
                    <i class="fab fa-linkedin"></i>
                </a>
            </div>
        </div>

        <!-- 图片展示 -->
        <div class="flex justify-center gap-5 overflow-hidden xl:overflow-visible py-4 sm:gap-8">
            <div
                class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img class="absolute inset-0 h-full w-full object-cover"
                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-1.c5d2141c.jpg&w=640&q=75"
                    alt="Image" />
            </div>
            <div
                class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img class="absolute inset-0 h-full w-full object-cover"
                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-2.3c6c01cf.jpg&w=640&q=75"
                    alt="Image" />
            </div>
            <div
                class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img class="absolute inset-0 h-full w-full object-cover"
                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-3.454151b1.jpg&w=640&q=75"
                    alt="Image" />
            </div>
            <div
                class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl rotate-2">
                <img class="absolute inset-0 h-full w-full object-cover"
                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-4.5c6d0ed6.jpg&w=640&q=75"
                    alt="Image" />
            </div>
            <div
                class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl -rotate-2">
                <img class="absolute inset-0 h-full w-full object-cover"
                    src="https://spotlight.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimage-5.6c6f2784.jpg&w=640&q=75"
                    alt="Image" />
            </div>

        </div>

        <!-- 卡片文章 -->
        <div class="mt-8">
            <h2 class="text-2xl font-bold mb-4">卡片文章</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-white rounded shadow p-4" v-for="item of mdfileList" :key="item.name">
                    <!-- <ceshi v-highlight></ceshi> -->
                    <h3 class="text-xl font-bold mb-2">{{ item.title }}</h3>
                    <p class="mb-4">{{ item.description }}</p>
                    <p class="mb-4">{{ item.date.slice(0, 10) }}</p>
                    <router-link :to="`/mdfile/${item.name}`" class="text-blue-500">阅读更多</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup >
// eslint-disable-next-line no-unused-vars
import { onMounted, ref } from 'vue';
import jsonData from '@/api/mdList.js'
const mdfileList = ref([]);
const openMdFile = (filePath) => {
    return import(/* @vite-ignore */ filePath).then(md => {
        return {
            title: md.frontmatter.title,
            description: md.frontmatter.description,
            name: md.frontmatter.name,
            date: md.frontmatter.date.slice(0, 10)
        };
    });
};


onMounted(async () => {
    const homeArray = await Promise.all(jsonData.home.map(item => openMdFile(`/src/mdfile/${item.name}`)));
    const jsArray = await Promise.all(jsonData.js.map(item => openMdFile(`/src/mdfile/${item.name}`)));
    mdfileList.value = [...homeArray, ...jsArray];
});

</script>

<style lang="less" module></style>
