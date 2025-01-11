<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const {options} = defineProps<{ options: any[] }>();
const emit = defineEmits<{ (e: 'optionSelected', option: string): void }>();

function selectOption(option: string) {
    emit('optionSelected', option);
}
</script>

<template>
    <div>
        <div class="custom-dropdown">
            <div v-for="option in options" :key="option" class="custom-option" @click="selectOption(option)">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<style scoped>

.custom-dropdown {
    display: flex;
    flex-direction: row;
}

.custom-option {
    padding: 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    margin-right: 5px;
}

.custom-option:hover {
    background-color: #f0f0f0;
}
</style>
