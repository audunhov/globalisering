<template>
  <div v-editable="blok" class="flex flex-col justify-between min-h-screen">
    <div class="grow">
      <StoryblokComponent v-for="b in blok.body" :key="b._uid" :blok="b" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  blok: {
    body: any[];
  };
}>();
</script>
