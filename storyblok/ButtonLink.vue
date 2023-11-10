<template>
  <NuxtLink
    v-editable="blok"
    class="p-2 text-xl inline-block tracking-widest rounded w-full hover:underline"
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
