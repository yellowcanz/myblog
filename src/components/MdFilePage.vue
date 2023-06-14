<template>
    <component :is="dynamicComponent" v-highlight />
</template>

<script setup>
import { shallowRef } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const fileName = route.params.fileName
const dynamicComponent = shallowRef(null);
import(`@/mdfile/${fileName}.md`).then(md => {
    dynamicComponent.value = md.default;
});

</script>

<style lang="less" module></style>
