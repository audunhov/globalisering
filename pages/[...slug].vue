<template>
  <StoryblokComponent v-if="story" :blok="story.content" class="min-h-screen" />
</template>

<script setup lang="ts">
import { useTitle } from "@vueuse/core";

const { slug } = useRoute().params as { slug: string[] };

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "hjem",
  {
    version: "draft",
  },
);

useTitle(`${story.value.name} - Globaliseringskonferansen`);
</script>
