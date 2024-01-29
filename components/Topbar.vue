<template>
  <nav class="w-full bg-green-dark text-pink-default">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-28 justify-between items-center">
        <NuxtLink href="/" class="flex flex-shrink-0 items-center">
          <GlobkonfLogo class="h-full"/>
        </NuxtLink>

        <button class="p-3 hover:bg-pink-default hover:text-green-dark rounded-full transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
               stroke="currentColor"
               class="w-auto h-16 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
          </svg>
        </button>


      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const storyblokApi = useStoryblokApi();
const {data} = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});
</script>
