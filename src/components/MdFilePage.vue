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
// import MarkdownIt from 'markdown-it';
// import fm from 'front-matter';


const route = useRoute()
// 接受路由传递的文件名字
const fileSha = route.params.fileSha
const dynamicComponent = shallowRef(null)
const frontmatter = ref('')

// 动态导入文件
const mdFiles = async () => {

  const result = await getMdFiles(fileSha)
  frontmatter.value = [...result.frontmatterList][0]
  console.log(frontmatter);
  dynamicComponent.value = result.renderedHTML
  // const { content } = await fileData(fileSha);
  // const decoder = new TextDecoder('utf-8');
  // const decodedContent = decoder.decode(base64ToArrayBuffer(content));
  // const { attributes, body } = fm(decodedContent);
  // frontmatter.value = attributes
  // const md = new MarkdownIt();
  // const renderedHTML = md.render(body);
  // dynamicComponent.value = renderedHTML
}



onMounted(async () => {
  mdFiles()
})
// import(`@/mdfile/${fileName}.md`).then((md) => {
//   dynamicComponent.value = md.default
//   // 获取md文件中的frontmatter信息
//   frontmatter.value = md.frontmatter
// })
</script>

<style scoped>
:deep(.markdown-container h3) {
  @apply text-xl font-bold mt-4 mb-2;
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
