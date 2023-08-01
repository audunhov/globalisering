<template>
  <nav class="sticky w-full top-0 z-50 bg-primary">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-20 justify-between">
        <div class="flex">
          <NuxtLink
            href="/"
            class="flex flex-shrink-0 items-center"
            @click="open = false"
          >
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
            @click="open = !open"
          >
            <span class="sr-only">Open main menu</span>
            <XMarkIcon
              class="block h-8 w-8 transition"
              :class="open ? 'rotate-0' : 'rotate-45'"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  </nav>
  <TransitionRoot as="template" :show="open">
    <div class="relative z-20">
      <TransitionChild
        as="template"
        enter="transform transition ease-in-out duration-500 sm:duration-700"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transform transition ease-in-out duration-500 sm:duration-700"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 lg:backdrop-blur-sm" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden" @click="open = false">
        <div class="absolute inset-0 overflow-hidden">
          <div
            class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full"
          >
            <TransitionChild
              as="template"
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enter-from="translate-x-full"
              enter-to="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leave-from="translate-x-0"
              leave-to="translate-x-full"
            >
              <div
                class="mt-20 pointer-events-auto w-screen lg:max-w-[50%] ml-auto"
                @click.stop
              >
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-primary text-secondary py-6"
                >
                  <div
                    class="relative mt-6 flex-1 space-y-6 px-4 sm:px-6 flex flex-col items-center lg:items-start"
                  >
                    <HeaderLink v-for="link in links" :blok="link" />
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </div>
      </div>
    </div>
  </TransitionRoot>
</template>

<script setup lang="ts">
import { XMarkIcon } from "@heroicons/vue/24/outline";
import { TransitionChild, TransitionRoot } from "@headlessui/vue";

const open = ref(false);

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/config", {
  version: "draft",
  resolve_links: "url",
});

const links = ref(data.story.content.header_menu);
const button = ref(data.story.content.header_button);
</script>
