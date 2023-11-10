<template>
  <div v-editable="blok" class="grid grid-cols-3">
    <StoryblokComponent v-for="b in blok.columns" :key="b._uid" :blok="b" />
  </div>
</template>

<script setup lang="ts">
import { GridStoryblok } from "~/component-types-sb";

defineProps<{
  blok: GridStoryblok;
}>();
</script>
