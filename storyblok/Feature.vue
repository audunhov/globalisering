<template>
  <div v-editable="blok">
    {{blok.name}} 
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: Object
}>();
</script>
