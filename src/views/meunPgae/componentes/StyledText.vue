<template>
    <div class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl mt-16">{{ props.value }}</div>
</template>

<script setup>
import { defineProps } from "vue"

const props = defineProps(['value'])


</script>

<style lang="less" module></style>
