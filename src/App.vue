<script setup lang="ts">
import {RouterView} from 'vue-router'
</script>

<template>
    <main>
        <RouterView class="router-view"/>
    </main>

</template>

<style scoped>

.router-view {
    flex-grow: 1;
    min-height: 0;
}
</style>
