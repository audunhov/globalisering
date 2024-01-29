<template>
  <nuxt-img
    v-if="blok.image && blok.image.filename"
    v-editable="blok"
    :src="blok.image.filename"
    :alt="blok.image.alt || 'image'"
  />
</template>

<script setup lang="ts">
import type {ImageStoryblok} from "~/sb";

defineProps<{
  blok: ImageStoryblok;
}>();
</script>
