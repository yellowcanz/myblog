<template>
  <div class="px-8 bg-white mx-auto max-w-7xl lg:px-16 pt-16 md:pt-32 pb-8">
    <p class="ml-3 order-first flex items-center text-base text-zinc-400 dark:text-zinc-500">
      {{ frontmatter.date }}
    </p>
    <p class="my-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
      {{ frontmatter.title }}
    </p>
    <div v-html="dynamicComponent" v-highlight></div>
  </div>
</template>

<script setup>
import { shallowRef, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { fileData,base64ToArrayBuffer } from '@/getData/getArticle.js'
import MarkdownIt from 'markdown-it';
import fm from 'front-matter';


const route = useRoute()
// 接受路由传递的文件名字
const fileSha = route.params.fileSha
const dynamicComponent = shallowRef(null)
const frontmatter = ref('')

// 动态导入文件

const mdFiles = async () => {
  const { content } = await fileData(fileSha);
  const decoder = new TextDecoder('utf-8');
  const decodedContent = decoder.decode(base64ToArrayBuffer(content));
  const md = new MarkdownIt();
  const { attributes, body } = fm(decodedContent);
  frontmatter.value = attributes
  const renderedHTML = md.render(body);
  dynamicComponent.value = renderedHTML


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

<style lang="less" module></style>
