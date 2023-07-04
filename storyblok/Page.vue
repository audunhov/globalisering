<template>
  <div v-editable="blok" class="flex flex-col justify-between min-h-screen">
    <Header/>
    <div class="grow">
      <StoryblokComponent
          v-for="blok in blok.body"
          :key="blok._uid"
          :blok="blok"
      />
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  blok: Object
}>();
</script>
