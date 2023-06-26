<template>
    <div class="container mx-auto px-4 pb-4 bg-white">
        <!-- 自我介绍和关注链接 -->
        <div class="py-8 max-w-2xl">
            <h1 class="text-5xl font-bold">Yellowcan</h1>
            <div class="mb-6 text-lg text-zinc-600 dark:text-zinc-400">
                <p class="text-3xl my-4">真好.又活了一天。</p>
                <p>这个没什么用的项目使用了</p>
                <ul>
                    <li><a href="">vue3</a></li>
                    <li><a href="">vite-plugin-md</a></li>
                    <li><a href="">highlight</a></li>
                    <li><a href="">tailwindcss</a></li>
                </ul>
            </div>
            <div class="flex space-x-4">
                <a href="#" class="text-blue-500">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                        <path
                            d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z">
                        </path>
                    </svg>
                </a>
                <a href="#" class="text-blue-500">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z">
                        </path>
                    </svg>
                </a>
                <a href="#" class="text-blue-500">
                    <svg viewBox="0 0 24 24" aria-hidden="true"
                        class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300">
                        <path
                            d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z">
                        </path>
                    </svg>
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
            <h2 class="text-2xl font-bold mb-4">部分文章</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div class="bg-white rounded shadow p-4" v-for="item of mdfileList" :key="item.sha">
                    <p class="mb-4 text-sm text-zinc-400 dark:text-zinc-500">{{ item.date }}</p>
                    <h3 class="text-lg font-bold mb-2">{{ item.title }}</h3>
                    <p class="mb-4 overflow-hidden text-gray-600 line-clamp-2">{{ item.description }}</p>
                    <router-link :to="`/mdfile/${item.sha}`" class="text-blue-500">阅读更多</router-link>
                </div>
            </div>
        </div>

        <!-- 一些想做的事情 -->
        <div class="mt-8">
            <div class="text-2xl font-bold my-4">一些想做的事情</div>
            <ul role="list" class="divide-y divide-gray-100">
                <li v-for="person in people" :key="person.email" class="flex justify-between gap-x-6 py-5">
                    <div class="flex gap-x-4">
                        <img class="h-12 w-12 flex-none rounded-full bg-gray-50" :src="person.imageUrl" alt="" />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">{{ person.name }}</p>
                            <p class="mt-1 truncate text-xs leading-5 text-gray-500">{{ person.email }}</p>
                        </div>
                    </div>
                    <div class="hidden sm:flex sm:flex-col sm:items-end">
                        <p class="text-sm leading-6 text-gray-900">{{ person.role }}</p>
                        <p v-if="person.lastSeen" class="mt-1 text-xs leading-5 text-gray-500">
                            Last seen <time :datetime="person.lastSeenDateTime">{{ person.lastSeen }}</time>
                        </p>
                        <div v-else class="mt-1 flex items-center gap-x-1.5">
                            <div class="flex-none rounded-full bg-emerald-500/20 p-1">
                                <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                            </div>
                            <p class="text-xs leading-5 text-gray-500">Online</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>


        <!-- 往来经历 -->
        <div class="bg-white">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">往来经历</h2>
                    <p class="mt-4 text-gray-500">家人们谁懂啊，都说00后在整顿职场，结果一个比一个卷。真好，又活了一天。</p>
                    <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
                            <dt class="font-medium text-gray-900">{{ feature.name }}</dt>
                            <dd class="mt-2 text-sm text-gray-500">{{ feature.description }}</dd>
                        </div>
                    </dl>
                </div>
                <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        class="rounded-lg bg-gray-100 " />
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        class="rounded-lg bg-gray-100 " />
                    <img src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        class="rounded-lg bg-gray-100 " />
                    <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        class="rounded-lg bg-gray-100 " />
                </div>
            </div>
        </div>

        <div class="bg-gray-100">
            <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 class="text-2xl font-bold text-gray-900">Collections</h2>

                    <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        <div v-for="callout in callouts" :key="callout.name" class="group relative">
                            <div
                                class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                <img :src="callout.imageSrc" :alt="callout.imageAlt"
                                    class="h-full w-full object-cover object-center" />
                            </div>
                            <h3 class="mt-6 text-sm text-gray-500">
                                <a :href="callout.href">
                                    <span class="absolute inset-0" />
                                    {{ callout.name }}
                                </a>
                            </h3>
                            <p class="text-base font-semibold text-gray-900">{{ callout.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { MdData, getMdFiles } from '../../getData/getArticle.js';

const people = [
    {
        name: '音乐/Music',
        email: 'Spotify.com',
        role: 'Yellowcan',
        imageUrl: '/assets/favicon32.b64ecc03.png',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-06-01T13:23Z',
    },
    {
        name: '看剧/Netflix',
        email: 'Netflix.com',
        role: 'Yellowcan',
        imageUrl: '/assets/nficon2016.png',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: '彩票/Lottery',
        email: 'http://www.cwl.gov.cn/',
        role: 'Fantasy',
        imageUrl: '/assets/n_logo.png',
        lastSeen: null,
    },
    {
        name: '学英语/LearningEnglish',
        email: 'English?.com',
        role: 'Students',
        imageUrl: '/assets/favicon_32x32.png',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
    {
        name: '起床起码/Code',
        email: 'github.com',
        role: 'Yellowcan',
        imageUrl: '/assets/fluidicon.png',
        lastSeen: '3h ago',
        lastSeenDateTime: '2023-01-23T13:23Z',
    },
]
const features = [
    { name: '工作', description: '2021-04-2023-04 深圳' },
    { name: '大专', description: '2018-2021 肇庆' },
    { name: '高中', description: '2015-2018 信宜' },
    { name: '初中', description: '2012-2015 深圳 信宜' },
    { name: '小学', description: '2006-2012 阳春 深圳' },
    { name: '学前班', description: '2005-2006? 阳春' },
]
const callouts = [
    {
        name: 'Desk and Office',
        description: 'Work from home accessories',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Journals and note-taking',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'Travel',
        description: 'Daily commute essentials',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]

// 首页就放三篇js文章吧
const mdfileList = ref([]);

// 存放MdData数据
const mdFilesData = ref([])

const mdFiles = async () => {
    await Promise.all(
        mdFilesData.value.map(async obj => {
            const { sha } = obj
            const result = await getMdFiles(sha)
            mdfileList.value.push(...result.frontmatterList)
        }))
}

onMounted(async () => {
    mdFilesData.value = await MdData('js')
    mdFiles()
});


</script>

<style lang="less" module></style>
