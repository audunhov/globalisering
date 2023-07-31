<template>
  <nuxt-img :src="img.filename" :alt="img.alt" />
</template>

<script setup lang="ts">
import { Image } from "~/types";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const img: Image = data.story.content.logo;
</script>
