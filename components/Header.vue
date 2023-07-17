<template>
  <nav class="sticky w-full top-0 z-20 bg-primary">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-24 justify-between">
        <div class="flex">
          <NuxtLink href="/" class="flex flex-shrink-0 items-center">
            <img
              class="h-16 w-auto"
              src="https://a.storyblok.com/f/239618/81x81/9dea372b00/logo.webp"
              alt="Your Company"
            />
          </NuxtLink>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- TODO storyblok links -->
          </div>
        </div>
        <div class="-mr-2 flex items-center">
          <button
            class="inline-flex items-center justify-center p-2 text-secondary hover:bg-secondary hover:text-primary"
            @click="open = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-8 w-8" aria-hidden="true" />
            <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </nav>
  <Sidebar v-model="open">
    <NuxtLink
      v-for="link in links"
      :key="link[0]"
      :to="link[0]"
      active-class="font-bold"
      class="text-xl hover:underline"
      >{{ link[1] }}</NuxtLink
    >
  </Sidebar>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const open = ref(false);

const links = [
  ["/", "Hjem"],
  ["/om-oss", "Om oss"],
];
</script>
