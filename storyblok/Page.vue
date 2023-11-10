<template>
  <div v-editable="blok" class="flex flex-col justify-between min-h-screen">
    <div class="content">
      <StoryblokComponent v-for="b in blok.body" :key="b._uid" :blok="b" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PageStoryblok } from "~/component-types-sb";

defineProps<{
  blok: PageStoryblok;
}>();
</script>

<style>
.content,
.full {
  --gap: clamp(1rem, 6vw, 3rem);
  --full: minmax(var(--gap), 1fr);
  --content: min(75ch, 100% - var(--gap) * 2);
  --popout: minmax(0, 2rem);

  display: grid;
  grid-template-columns:
    [full-start] var(--full)
    [popout-start] var(--popout)
    [content-start] var(--content) [content-end]
    var(--popout) [popout-end]
    var(--full) [full-end];
}

.content > *,
.full > * {
  grid-column: content;
}
.popout {
  grid-column: popout;
}
.full {
  grid-column: full;
}
</style>
