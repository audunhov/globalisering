<template>
  <NuxtLink
    v-editable="blok"
    class="p-3 text-xl inline-block w-full sm:w-auto hover:underline"
    :class="typeClasses[blok.style]"
    :to="blok.link?.cached_url"
    >{{ blok.text }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { ButtonLinkStoryblok } from "~/component-types-sb";

const typeClasses = {
  primary: "bg-primary text-secondary",
  secondary: "bg-secondary text-primary",
};

defineProps<{
  blok: ButtonLinkStoryblok;
}>();
</script>
