<template>
  <div v-editable="blok">
    {{ blok.name }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    name: string;
  };
}>();
</script>
