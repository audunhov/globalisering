<script setup lang="ts">
import { ISbRichtext } from "storyblok-js-client";

const props = defineProps<{
  blok: {
    text: ISbRichtext;
  };
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
