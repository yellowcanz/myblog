<template>
    <div class="flex flex-col md:flex-row w-full">
        <div class="w-full">
            <div class="bg-white p-4 mx-auto max-w-2xl lg:max-w-5xl">
                <StyledText :value="msg"></StyledText>
                <articesList></articesList>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import articesList from './componentes/ArticesList.vue'
import StyledText from './componentes/StyledText.vue';
const msg = ref('记录一些Vue的问题')
import { ref } from 'vue';

</script>
  
<style scoped>
ul::after {
    width: 1px;
    height: 100%;
    background: #f4f4f5;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
}
</style>
  