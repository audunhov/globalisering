<template>
  <div v-editable="blok">
     {{blok.headline}} 
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    blok: {
      headline: string
    }
  }>();
</script>
