<template>
  <div v-editable="blok" class="relative min-h-[500px] isolate">
    <div class="h-full" :class="widths[blok.width]">
      <StoryblokComponent v-for="b in blok.content" :key="b._uid" :blok="b" />
    </div>
    <nuxt-img
      v-if="blok.background.filename"
      class="absolute -z-10 inset-0 w-full h-full object-cover"
      :src="blok.background.filename"
      :alt="blok.background.alt"
    />
  </div>
</template>

<script setup lang="ts">
import { SbBlokData } from "@storyblok/js";
import { Image } from "~/types";

const widths = {
  standard: "max-w-prose m-auto",
  full: "",
};

defineProps<{
  blok: {
    background: Image;
    width: any;
    content: SbBlokData[];
  };
}>();
</script>
