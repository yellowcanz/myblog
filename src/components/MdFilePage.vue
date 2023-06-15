<template>
  <div class="px-8 bg-white mx-auto max-w-7xl lg:px-16 pt-16 md:pt-32 pb-8">
    <p class="ml-3 order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
      {{ frontmatter.date }}
    </p>
    <p class="my-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {{ frontmatter.title }}
    </p>
    <component :is="dynamicComponent" v-highlight />
  </div>
</template>

<script setup>
import { shallowRef, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
// 接受路由传递的文件名字
const fileName = route.params.fileName
const dynamicComponent = shallowRef(null)
const frontmatter = ref('')
// 动态导入文件
import(`@/mdfile/${fileName}.md`).then((md) => {
  dynamicComponent.value = md.default
  // 获取md文件中的frontmatter信息
  frontmatter.value = md.frontmatter
})
</script>

<style lang="less" module></style>
