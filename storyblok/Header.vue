<script setup lang="ts">
import type {HeaderStoryblok} from "~/sb";

defineProps<{
  blok?: HeaderStoryblok
}>()
</script>

<template>
  <div class="isolate min-h-[400px] relative flex flex-col justify-between gap-y-20 bg-green-dark text-pink-default p-responsive">
    <div class="space-y-5">
      <h1 class="font-bold uppercase hyphens-auto">Globaliserings-<br>konferansen</h1>
      <h3 class="text-2xl">Fra krise til håp</h3>
    </div>

    <div class="flex flex-col sm:flex-row text-center gap-y-5 gap-x-10 min-w-0">
      <NuxtLink to="/program"
                class="text-lg px-10 text-black brightness-125 tracking-wide font-semibold rounded-full p-3 bg-green-default hover:opacity-80 uppercase">
        Program
      </NuxtLink>
      <a href="/billetter"
         class="text-lg px-10 text-black tracking-wide brightness-125 font-semibold rounded-full p-3 bg-green-default hover:opacity-80  uppercase">Billetter</a>
    </div>

    <img src="/vanilla/Due.svg" class="absolute left-1/2 bottom-0 h-[500px] pointer-events-none -z-10" alt="Due">

  </div>
</template>

<style scoped>
h1 {
  font-size: clamp(2rem, 5vw + 1rem, 6rem);
  line-height: clamp(2.25rem, 5vw + 1rem, 6.25rem);
}

h3 {
  font-size: clamp(1.5rem, 10vw + 1rem, 2.25rem);
}
</style>