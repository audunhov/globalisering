<template>
  <nav class="sticky w-full top-0 z-20 bg-primary">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 justify-between">
        <div class="flex">
          <NuxtLink href="/" class="flex flex-shrink-0 items-center">
            <GlobkonfLogo class="h-16" />
          </NuxtLink>
        </div>

        <div class="-mr-2 flex items-center">
          <NuxtLink
            v-if="button"
            :to="button.cached_url"
            class="p-3 h-12 mr-10 hover:underline bg-secondary text-primary justify-self-end"
          >
            Kjøp billett
          </NuxtLink>
          <button
            class="inline-flex items-center justify-center p-2 text-secondary"
            @click="open = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-8 w-8" aria-hidden="true" />
            <XMarkIcon v-else class="block h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </nav>
  <Sidebar v-if="links" v-model="open">
    <NuxtLink
      v-for="link in links"
      :key="link._uid"
      :to="link.link.cached_url"
      active-class="font-bold"
      class="text-xl hover:underline"
      @click="open = false"
      >{{ link.link.story.name }}</NuxtLink
    >
  </Sidebar>
</template>

<script setup lang="ts">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const open = ref(false);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const links = ref(data.story.content.header_menu);
const button = ref(data.story.content.header_button);
</script>
