<template>
  <div v-editable="blok">
    <h1>{{ blok.title }}</h1>
    <StoryblokComponent v-for="b in blok.body" :key="b._uid" :blok="b" />
  </div>
</template>

<script setup lang="ts">
import { SbBlokData } from "@storyblok/js";

defineProps<{
  blok: {
    title: string;
    image: Object;
    body: SbBlokData[];
  };
}>();
</script>
