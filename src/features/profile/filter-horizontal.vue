<script setup lang="ts">
import {defineProps, defineEmits, ref} from 'vue';

const {options} = defineProps<{ options: any[] }>();
const selected = ref(0);
const emit = defineEmits<{ (e: 'optionSelected', option: string): void }>();

function selectOption(option: string, index: number) {
    emit('optionSelected', option);
    selected.value = index;
}
</script>

<template>
    <div>
        <div class="custom-filter">
            <div v-for="(option, i) in options" :key="i" :class="i==selected ? 'option-selected' : 'click-me'"
            @click="selectOption(option, i)">
                {{ option }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.custom-filter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    align-items: center;
}
</style>
