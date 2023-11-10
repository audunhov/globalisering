<script setup lang="ts">
import { HeroStoryblok } from "~/component-types-sb";

defineProps<{
  blok: HeroStoryblok;
}>();
</script>

<template>
  <div v-editable="blok" class="flex full items-center relative min-h-[800px]">
    <div class="z-10 w-full text-center relative">
      <h1
        class="uppercase text-6xl font-bold"
        :class="[blok.image && 'text-white']"
      >
        {{ blok.headline }}
      </h1>
      <h2 class="text-4xl text-white font-light">{{ blok.subheadline }}</h2>
      <div class="mt-20 grid gap-5">
        <ButtonLink
          v-for="(button, i) in blok.buttons"
          :key="i"
          :blok="button"
        />
      </div>
    </div>
    <nuxt-img
      v-if="blok.image && blok.image.filename"
      class="full absolute z-0 inset-0 w-full h-full object-cover"
      :src="blok.image.filename"
      :alt="blok.image.alt || 'hero image'"
    />
  </div>
</template>
