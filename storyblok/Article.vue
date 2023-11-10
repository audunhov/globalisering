<template>
  <div v-editable="blok" class="grid grid-cols-1 lg:grid-cols-[400px_1fr]">
    <div class="bg-primary hidden lg:block">
      <nuxt-img
        v-if="blok.image && blok.image.filename"
        class="h-full overflow-hidden object-cover rounded-tr-2xl hidden lg:block"
        :src="blok.image.filename"
        :alt="blok.image.alt || 'background image'"
      />
    </div>
    <div>
      <div
        class="bg-primary relative h-64 isolate flex flex-col justify-end items-center"
      >
        <nuxt-img
          v-if="blok.image && blok.image.filename"
          class="w-full absolute -z-10 lg:hidden mx-auto h-64 object-cover"
          :src="blok.image.filename"
          :alt="blok.image.alt || 'background image'"
        />
        <div
          class="absolute inset-0 lg:hidden bg-gradient-to-t from-black/50 -z-10"
        />

        <h1 class="text-3xl font-bold text-white mb-10">
          {{ blok.title }}
        </h1>
      </div>

      <div class="p-5">
        <StoryblokComponent v-for="b in blok.body" :key="b._uid" :blok="b" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SbBlokData } from "@storyblok/js";
import { Image } from "~/types";
import { ArticleStoryblok } from "~/component-types-sb";

defineProps<{
  blok: ArticleStoryblok;
}>();
</script>
