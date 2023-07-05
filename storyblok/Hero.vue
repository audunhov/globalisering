<template>
  <div v-editable="blok" class="flex items-center relative min-h-[500px]">
    <div class="z-10 w-full text-center relative">
      <h1 class="uppercase text-6xl text-white font-bold">{{ blok.headline }}</h1>
      <h2 class="text-4xl text-white font-light">{{ blok.subheadline }}</h2>
    </div>
    <nuxt-img class="absolute z-0 inset-0 w-full h-full object-cover" :src="blok.image.filename" :alt="blok.image.alt" />
  </div>
</template>

<script setup lang="ts">
import {Image} from "~/types";

const props = defineProps<{
  blok: {
    headline: string
    subheadline: string
    image: Image
  }
}>();
</script>
