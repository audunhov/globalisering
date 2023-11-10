<template>
  <div
    v-editable="blok"
    :class="widths[blok.width]"
    :style="backgroundColor(blok.color.value)"
    class="relative isolate"
  >
    <StoryblokComponent v-for="b in blok.content" :key="b._uid" :blok="b" />
  </div>
</template>

<script setup lang="ts">
import { SectionStoryblok } from "~/component-types-sb";

const widths = {
  standard: "p-5",
  popout: "popout p-5",
  full: "full py-5",
};

defineProps<{
  blok: SectionStoryblok;
}>();

function backgroundColor(color?: string) {
  return {
    backgroundColor: color || "transparent",
  };
}
</script>
