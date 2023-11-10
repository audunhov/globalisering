<template>
  <NuxtLink
    v-if="blok.link?.cached_url"
    v-editable="blok"
    :href="blok.link.cached_url"
    class="p-10 block group transition-colors space-y-5 w-max border-4 border-gray-300 hover:border-primary"
  >
    <h1 class="text-3xl font-bold text-gray-900">
      {{ blok.heading }}
    </h1>
    <div class="flex text-gray-700 items-center gap-2">
      <h2 class="text-2xl">
        {{ blok.subheading }}
      </h2>
      <ChevronRightIcon
        class="h-5 group-hover:translate-x-2 transition-transform"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { BoxLinkStoryblok } from "~/component-types-sb";

defineProps<{
  blok: BoxLinkStoryblok;
}>();
</script>
