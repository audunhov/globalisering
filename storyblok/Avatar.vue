<template>
  <div v-editable="blok">
    <img
      v-if="blok.image && blok.image.filename"
      class="inline-block h-6 w-6 rounded-full"
      :src="blok.image.filename"
      :alt="blok.image.alt"
    />
    <span
      v-else
      class="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500"
    >
      <span class="text-xs font-medium leading-none text-white">{{
        getPlaceHolder(blok.name)
      }}</span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { AvatarStoryblok } from "~/component-types-sb";

defineProps<{
  blok: AvatarStoryblok;
}>();

const getPlaceHolder = (name: string) => {
  const parts = name.split(" ");
  const first = parts[0].charAt(0);
  const last = parts[parts.length - 1].charAt(0);
  return [first, last].join("");
};
</script>
