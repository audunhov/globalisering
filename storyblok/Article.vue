<template>
  <div v-editable="blok">
    <div
      class="bg-primary relative h-64 isolate flex flex-col justify-end items-center"
    >
      <nuxt-img
        class="w-full absolute -z-10 mx-auto h-64 object-cover"
        :src="blok.image.filename"
        :alt="blok.image.alt"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/50 -z-10" />
      <Transition
        enter-from-class="-translate-y-full"
        enter-active-class="transition ease-in-out duration-300"
        appear
      >
        <h1 class="text-3xl font-bold text-white mb-10">
          {{ blok.title }}
        </h1>
      </Transition>
    </div>

    <StoryblokComponent v-for="b in blok.body" :key="b._uid" :blok="b" />
  </div>
</template>

<script setup lang="ts">
import { SbBlokData } from "@storyblok/js";
import { Image } from "~/types";

defineProps<{
  blok: {
    title: string;
    image: Image;
    body: SbBlokData[];
  };
}>();
</script>
