<template>
  <div class="px-8 bg-white mx-auto max-w-7xl lg:px-16 pt-16 md:pt-32 pb-8">
    <p class="ml-3 order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
      {{ frontmatter.date }}
    </p>
    <p class="my-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {{ frontmatter.title }}
    </p>
    <div class="markdown-container" v-html="dynamicComponent" v-highlight></div>
  </div>
</template>

<script setup>
import { shallowRef, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getMdFiles } from '@/getData/getArticle.js'


const route = useRoute()
// 接受路由传递的文件名字
const fileSha = route.params.fileSha
console.log(fileSha);
const dynamicComponent = shallowRef(null)
const frontmatter = ref('')

// 动态导入文件
const mdFiles = async () => {

  const result = await getMdFiles(fileSha)
  frontmatter.value = [...result.frontmatterList][0]
  console.log(frontmatter);
  dynamicComponent.value = result.renderedHTML

}



onMounted(async () => {
  // mdFiles()
})

</script>

<style scoped>
:deep(.markdown-container h3) {
  @apply text-xl font-bold mt-4 mb-2;
}
:deep(.markdown-container h4) {
  @apply text-lg font-bold mt-4 mb-2;
}
:deep(.markdown-container h5) {
  @apply text-base font-bold mt-4 mb-2;
}
:deep(.markdown-container h6) {
  @apply text-sm font-bold mt-4 mb-2;
}

:deep(.markdown-container p) {
  @apply text-gray-700 mb-4 leading-relaxed;
}

:deep(.markdown-container a) {
  @apply text-blue-500 underline;
}
:deep(pre) {
  @apply mb-4
}
</style>
