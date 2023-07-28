<template>
  <nuxt-img
    v-if="blok.image.filename"
    v-editable="blok"
    :src="blok.image.filename"
    :alt="blok.image.alt"
  />
</template>

<script setup lang="ts">
import { Image } from "~/types";

defineProps<{
  blok: {
    image: Image;
  };
}>();
</script>
