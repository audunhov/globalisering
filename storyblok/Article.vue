<template>
  <div v-editable="blok">
    <h1>{{blok.title}}</h1>
    <StoryblokComponent
    v-for="blok in blok.body"
    :key="blok._uid"
    :blok="blok"
    />
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    blok: {
      title: string
      image: Object
      body: Object[]
    }
  }>();
</script>
