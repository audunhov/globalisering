<template>
  <div>
    <Header />
    <StoryblokComponent v-if="story" :blok="story.content" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params as { slug: string[] };

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join("/") : "hjem",
  {
    version: "draft",
  },
);
</script>
