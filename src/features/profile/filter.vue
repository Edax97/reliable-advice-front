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
    <select @change="selectOption" class="option-selected">
      <option v-for="option in options" :key="option" :value="option" class="click-me">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<style scoped>
select {
    color: rgba(255,255,255,0.75);
    background-color: transparent;
    font-family: 'Courier New', Courier, monospace;
    border: 1px solid rgba(255,255,255,0.75);
}
option {
    background-color: #0a3d62;
    color: rgba(255,255,255,0.75);
}
</style>