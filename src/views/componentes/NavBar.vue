<template>
    <div class="bg-gray-800">
        <!-- 大屏幕时展开的菜单栏 -->
        <nav class="hidden md:flex md:items-center md:justify-between p-4">
            <!-- 头像 -->
            <router-link to="/">
                <img src="https://avatars.githubusercontent.com/u/75051323?s=400&u=17be729876407a08c16d0b2eaf5775c3eaf1f4af&v=4"
                    alt="Avatar" class="w-8 h-8 rounded-full" />
            </router-link>
            <!-- 搜索框 -->
            <div class="flex items-center">
                <input type="text" placeholder="还没做功能" class="mr-4 px-2 py-1 rounded-lg focus:outline-none" />
                <button class="text-white">Search</button>
            </div>

            <!-- 菜单项 -->
            <div class="flex justify-center">
                <router-link to="/js"
                    class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">JS</router-link>
                <router-link to="/vue"
                    class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">Vue</router-link>
                <router-link to="/note"
                    class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">笔记</router-link>
                <router-link to="/other"
                    class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">其他</router-link>
            </div>
        </nav>

        <!-- 小屏幕时折叠的菜单栏 -->
        <div class="md:hidden text-center">
            <div class="flex justify-between items-center px-4 py-2">
                <!-- 头像 -->
                <router-link to="/">
                    <img src="https://avatars.githubusercontent.com/u/75051323?s=400&u=17be729876407a08c16d0b2eaf5775c3eaf1f4af&v=4"
                        alt="Avatar" class="w-8 h-8 rounded-full" />
                </router-link>

                <!-- 搜索框 -->
                <div class="flex-grow">
                    <input type="text" placeholder="Search" class="px-2 py-1 rounded-lg focus:outline-none" />
                </div>

                <!-- 折叠按钮 -->
                <button @click="toggleMenu" class="p-4 focus:outline-none">
                    <svg v-if="isOpen" class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <svg v-else class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <div v-if="isOpen" class="p-4">

                <!-- 菜单项 -->
                <div class="flex flex-col justify-center">
                    <router-link to="/js"
                        class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">JS</router-link>
                    <router-link to="/vue"
                        class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">Vue</router-link>
                    <router-link to="/note"
                        class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">笔记</router-link>
                    <router-link to="/other"
                        class="text-white mx-4 hover:bg-gray-300 hover:text-black px-2 py-1 rounded-lg">其他</router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script setup>
import { ref } from 'vue';
const isOpen = ref(false)
const toggleMenu = () => {
    isOpen.value = !isOpen.value;
}
</script>
  
<style>
/* 样式可以根据你的需求进行调整 */
</style>
  