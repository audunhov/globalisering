<template>
  <div v-editable="blok" class="py-24 sm:py-32 max-w-full px-6 lg:px-8">
    <div :class="styles[blok.style]" class="flex flex-col">
      <p class="text-base font-semibold leading-7 text-primary">
        {{ blok.eyebrow }}
      </p>
      <h2
        class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
      >
        {{ blok.headline }}
      </h2>
      <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
        {{ blok.subheadline }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {HeaderSectionStoryblok} from "~/sb";

const styles = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

defineProps<{
  blok: HeaderSectionStoryblok;
}>();
</script>
