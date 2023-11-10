<script setup lang="ts">
import { TextStoryblok } from "~/component-types-sb";

const props = defineProps<{
  blok: TextStoryblok;
}>();

const richText = computed(() => renderRichText(props.blok.text));
</script>

<template>
  <div v-editable="blok" v-html="richText" />
</template>

<style scoped>
:deep(h1) {
  @apply text-6xl;
}
</style>
