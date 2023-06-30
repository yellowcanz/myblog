<template>
    <div class="flex justify-end items-center px-16 my-4">
        <svg @click="refreshData" t="1688104396768"
            :class="['icon', 'cursor-pointer', refreshState ? 'loading' : 'refresh-icon']" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11478" width="32" height="32">
            <path
                d="M603.136 883.566c-123.611 25.088-256.805-9.655-351.525-104.302a382.537 382.537 0 0 1-28.964-511.78v71.46a38.766 38.766 0 0 0 77.239 0V184.32c0-11.557-3.804-21.211-11.557-27.063a38.107 38.107 0 0 0-27.063-11.483H106.862a38.766 38.766 0 0 0-38.62 38.546c0 21.211 17.335 38.693 38.62 38.693h54.052C16.091 402.65 29.55 665.307 195.657 833.39c115.858 115.785 276.188 156.38 424.887 125.513a50.98 50.98 0 0 0 17.408-9.655 37.303 37.303 0 0 0 0-54.126 31.232 31.232 0 0 0-34.816-11.556z m339.895-94.647H890.88a463.58 463.58 0 0 0-38.62-612.206C744.083 68.535 597.359 26.04 456.412 45.35a34.011 34.011 0 0 0-25.088 11.702 37.303 37.303 0 0 0 0 53.98c9.655 9.655 23.187 13.531 36.718 9.655A384.731 384.731 0 0 1 796.38 228.864a382.537 382.537 0 0 1 28.892 511.78v-71.46a38.766 38.766 0 0 0-38.546-38.62 38.766 38.766 0 0 0-38.693 38.62v154.478c0 11.63 3.877 21.211 11.63 27.063a38.18 38.18 0 0 0 27.063 11.556h154.477a38.766 38.766 0 0 0 38.62-38.62c0-21.21-15.433-34.742-36.718-34.742z"
                p-id="11479" fill="#707070"></path>
        </svg>
    </div>
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
    <div class="flex items-center justify-center h-32" v-show="loading">
        <div class="spinner"></div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getMdFiles, MdData } from '@/getData/getArticle.js';
import { useRoute } from 'vue-router';
const route = useRoute();
const articles = ref([]);
// 存放MdData数据
const mdFilesData = ref([])
const refreshState = ref(false)
const loading = ref(false)

// localStorage
const lsMdFiles = async () => {
    // const cachedArticles = localStorage.getItem('articles');
    const cachedArticles = localStorage.getItem(route.name);
    if (cachedArticles) {
        articles.value = JSON.parse(cachedArticles);
    } else {
        await mdFiles()
    }
}

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
    const sortedArticles = []
    results.forEach(result => {
        sortedArticles.push(...result.frontmatterList)
    })
    articles.value = sortedArticles;
    // localStorage.setItem('articles', JSON.stringify(sortedArticles));
    localStorage.setItem(route.name, JSON.stringify(sortedArticles));
    return sortedArticles
}

// 刷新

const refreshData = async () => {
    console.time()
    refreshState.value = true
    // 从服务器获取更新的文章
    const updatedArticles = await mdFiles();
    // 更新localStorage缓存
    localStorage.setItem(route.name, JSON.stringify(updatedArticles));
    // 更新组件的articles引用
    articles.value = updatedArticles;
    refreshState.value = false
    console.timeEnd()
};



onMounted(async () => {
    loading.value = true
    mdFilesData.value = await MdData(route.name)
    console.time()
    await lsMdFiles()
    console.timeEnd()
    loading.value = false
})



</script>

<style lang="less" scoped>
.loading {
    animation: rotate 0.4s linear infinite;
}

.refresh-icon {
    animation: none;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}


.spinner {
    width: 4rem;
    height: 4rem;
    border: 0.4rem solid rgba(0, 0, 0, 0.1);
    border-left-color: #1f2937;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
