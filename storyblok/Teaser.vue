<template>
  <div v-editable="blok">
    {{ blok.headline }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    headline: string;
  };
}>();
</script>
