<template>
  <nav class="sticky w-full top-0 z-50 bg-primary">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 justify-between">
        <div class="flex">
          <NuxtLink href="/" class="flex flex-shrink-0 items-center">
            <GlobkonfLogo class="h-full" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});
</script>
