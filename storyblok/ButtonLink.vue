<template>
  <NuxtLink
    v-editable="blok"
    class="p-3 rounded text-xl"
    :class="typeClasses[blok.style]"
    :to="blok.link.cached_url"
    >{{ blok.text }}
  </NuxtLink>
</template>

<script setup lang="ts">
import { Button } from "~/types";

const typeClasses = {
  primary: "bg-primary text-secondary hover:bg-secondary hover:text-primary",
  secondary: "bg-secondary text-primary hover:bg-primary hover:text-secondary",
};

defineProps<{
  blok: Button;
}>();
</script>
