<template>
  <div
    v-editable="blok"
    class="relative isolate"
  >
    <StoryblokComponent v-for="b in blok.content" :key="b._uid" :blok="b" />
  </div>
</template>

<script setup lang="ts">
import type {SectionStoryblok} from "~/sb";

defineProps<{
  blok: SectionStoryblok;
}>();
</script>
