<template>
  <footer class="bg-slate-800">
    <div
      class="flex flex-col items-center mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8"
    >
      <nav
        class="w-full columns-2 sm:flex sm:justify-center text-center sm:space-x-12"
      >
        <div v-for="item in links" :key="item._uid" class="pb-6">
          <NuxtLink
            class="text-gray-300 hover:text-gray-100"
            :to="`/${item.link.cached_url}`"
          >
            {{ item.link.story.name }}
          </NuxtLink>
        </div>
      </nav>

      <!--      <Nyhetsbrev />-->
      <p class="mt-10 text-center text-xs leading-5 text-gray-500">
        Et arrangement av Norges Sosiale Forum
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const links = ref(data.story.content.header_menu);
</script>
