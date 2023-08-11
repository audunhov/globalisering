<template>
  <div class="py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Artikler
        </h2>
      </div>
      <div
        class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <article
          v-for="post in data.stories"
          :key="post.uid"
          class="group relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
        >
          <nuxt-img
            :src="post.content.image.filename"
            :alt="post.content.image.alt"
            class="absolute transition duration-500 inset-0 -z-10 h-full w-full object-cover group-hover:scale-110"
          />
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"
          />
          <div
            class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"
          />

          <div
            class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
          >
            <time class="mr-8" :datetime="post.published_at">{{
              format(new Date(post.published_at), "PPp", {
                locale: nb,
              })
            }}</time>
          </div>
          <h3 class="mt-3 text-lg font-semibold leading-6 text-white">
            <a :href="post.full_slug">
              <span class="absolute inset-0" />
              {{ post.content.title }}
            </a>
          </h3>
        </article>
      </div>
    </div>
  </div>
  <NuxtLink
    class="bg-primary text-secondary hover:underline p-3 text-xl"
    to="/articles"
    >Les mer</NuxtLink
  >
</template>

<script setup lang="ts">
import { format } from "date-fns";
import { nb } from "date-fns/locale";

const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories/", {
  starts_with: "artikler/",
  version: "draft",
  resolve_links: "url",
  per_page: 3,
});
</script>
