<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const {options} = defineProps<{ options: any[] }>();
const emit = defineEmits<{ (e: 'optionSelected', option: string): void }>();

function selectOption(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit('optionSelected', target.value);
}
</script>

<template>
  <div>
    <select @change="selectOption">
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>

/* Add any styles you need here */
</style>