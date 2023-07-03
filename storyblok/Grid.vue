<template>
  <div v-editable="blok" class="grid grid-cols-3">
    <StoryblokComponent
        v-for="blok in blok.columns"
        :key="blok._uid"
        :blok="blok"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: Object
}>();
</script>
