<script setup lang="ts">
import {fetchAppStatistics} from "@/backend-data/backend-api-queries.ts";
import AppSummary from "@/features/leader-board/app-summary.vue";
import type {AppStats} from "@/features/leader-board/statistics-schema.ts";
import {onMounted, ref} from "vue";

const stats = ref<AppStats | null>(null);
onMounted(async () => {
    stats.value = await fetchAppStatistics();
})
</script>
<template>
    <AppSummary v-if="stats !== null" :stats="stats"/>
</template>