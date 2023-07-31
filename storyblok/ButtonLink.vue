<template>
  <NuxtLink
    v-editable="blok"
    class="p-3 text-xl"
    :class="typeClasses[blok.style]"
    :to="blok.link.cached_url"
    >{{ blok.text }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { Button } from "~/types";

const typeClasses = {
  primary: "bg-primary text-secondary hover:underline",
  secondary: "bg-secondary text-primary hover:underline",
};

defineProps<{
  blok: Button;
}>();
</script>
