<template>
  <footer class="bg-slate-800">
    <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
      <nav
        class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
        aria-label="Footer"
      >
        <div v-for="item in links" :key="item._uid" class="pb-6">
          <NuxtLink
            class="text-gray-300 hover:text-gray-100"
            :to="item.link.story.url"
            >{{ item.link.story.name }}</NuxtLink
          >
        </div>
      </nav>

      <Nyhetsbrev class="w-max mx-auto" />

      <p class="mt-10 text-center text-xs leading-5 text-gray-500">
        Et arrangement av Norges Sosiale Forum
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Nyhetsbrev from "~/components/Nyhetsbrev.vue";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const links = ref(data.story.content.header_menu);
</script>
