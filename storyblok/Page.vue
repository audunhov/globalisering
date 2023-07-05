<template>
  <div v-editable="blok" class="flex flex-col justify-between min-h-screen">
    <div class="grow">
      <StoryblokComponent
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: Object
}>();
</script>
