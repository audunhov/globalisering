<template>
  <footer
    class="grid grid-rows-3 gap-10 bg-green-dark text-pink-default min-h-[400px] p-20"
  >
    <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div class="min-h-[200px]">
        <h3 class="text-2xl">Info:</h3>
        <ul class="space-y-2">
          <li v-for="link in links" :key="link._uid">
            <a class="underline hover:opacity-80" :href="link.link.story.url">{{link.link.story.name}}</a>
          </li>
        </ul>
      </div>
      <div class="min-h-[200px]">
        <h3 class="text-2xl">Sosiale medier:</h3>
        <ul class="space-y-2">
          <li v-for="link in links" :key="link._uid">
            <a class="underline hover:opacity-80" :href="link.link.story.url">{{link.link.story.name}}</a>
          </li>
        </ul>
      </div>
      <div class="min-h-[200px]">
        <h3 class="text-2xl">Mer fra NSF:</h3>
        <ul class="space-y-2">
          <li v-for="link in links" :key="link._uid">
            <a class="underline hover:opacity-80" :href="link.link.story.url">{{link.link.story.name}}</a>
          </li>
        </ul>
      </div>
    </div>

    <h3 class="text-vanilla text-3xl text-center">En annen verden er mulig!</h3>

    <p class="text-green-default">
      Design: Sunniva Prytz Sandnes
      <br />
      Nettside: Audun Hammer Hovda
    </p>
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
