<template>
  <div v-if="blok.link.story">
    <NuxtLink
      :to="blok.link.story.url"
      active-class="font-bold"
      class="text-4xl hover:underline"
      >{{ blok.link.story.name }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
interface Link {
  story: {
    url: string;
    name: string;
  };
}

defineProps<{
  blok: {
    link: Link;
  };
}>();
</script>
