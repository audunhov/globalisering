<template>
  <div class="relative flex items-center min-h-[500px]">
  <div v-editable="blok" class="z-10 w-full text-center relative" :class="widths[blok.width]">
    <StoryblokComponent v-for="b in blok.content" :key="b._uid" :blok="b" />
  </div>
  <nuxt-img v-if="blok.background.filename" class="absolute z-0 inset-0 w-full h-full object-cover" :src="blok.background.filename" :alt="blok.background.alt" />
    </div>
</template>

<script setup lang="ts">
import {SbBlokData} from "@storyblok/js";
import {Image} from "~/types";

const widths = {
  standard: "max-w-prose m-auto",
  full: ""
}

defineProps<{
  blok: {
    background: Image
    width: any
    content: SbBlokData[]
  }
}>()
</script>