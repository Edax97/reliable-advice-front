<script setup lang="ts">
import {defineEmits, defineProps} from 'vue';

/* Properties and events exposed */
const {currentPage, totalPages} = defineProps<{
    currentPage: number;
    totalPages: number;
}>();
const emit = defineEmits<{
    (e: 'update_page', value: number): void;
}>();

function moveToPage(page: number) {
    if (page >= 1 && page <= totalPages) {
        emit('update_page', page);
    }
}

onkeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight' && currentPage < totalPages)
        return moveToPage(currentPage + 1);
    if (event.key === 'ArrowLeft' && currentPage > 1)
        return moveToPage(currentPage - 1);
    if (event.key === 'ArrowRight')
        return moveToPage(1);
    return moveToPage(totalPages);
}
</script>

<template>
    <div class="pagination">
        <button @click="moveToPage(currentPage - 1)"
                :disabled="currentPage === 1">
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6"/>
            </svg>
        </button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="moveToPage(currentPage + 1)"
                :disabled="currentPage === totalPages">
            <svg width="20" height="20" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6"/>
            </svg>
        </button>
    </div>
</template>

<style scoped>
.pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

button {
    background: none;
    border: none;
    cursor: pointer;
}

button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
}

svg {
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
}
</style>