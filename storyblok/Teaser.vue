<template>
  <div v-editable="blok">
    {{ blok.headline }}
  </div>
</template>

<script setup lang="ts">
import { TeaserStoryblok } from "~/component-types-sb";

defineProps<{
  blok: TeaserStoryblok;
}>();
</script>
