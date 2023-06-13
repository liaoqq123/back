<template>
    <div class="menu"><Menu></Menu></div>
    <div class="content"><Content></Content></div>
</template>
<script setup>
import Content from './content/content.vue'
import Menu from './menu/menu.vue'
</script>
<style lang="scss" scoped>
.menu{
    width: 200px;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background: black;
}
</style>