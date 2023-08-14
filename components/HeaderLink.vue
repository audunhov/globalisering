<template>
  <div v-if="blok.link.story">
    <div class="text-center flex">
      <NuxtLink
        :to="blok.link.story.url"
        active-class="font-bold"
        class="text-4xl hover:underline"
        >{{ blok.link.story.name }}</NuxtLink
      >
      <ChevronRightIcon
        v-if="blok.sublink?.length"
        tabindex="0"
        class="h-8 cursor-pointer transition-transform"
        :class="expand && 'rotate-90'"
        @click="expand = !expand"
      />
    </div>
    <transition-group v-bind="transition">
      <div v-if="expand" class="my-3">
        <HeaderLink v-for="sub in blok.sublink" :key="sub._uid" :blok="sub" />
      </div>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";

interface Link {
  story: {
    url: string;
    name: string;
  };
}

const transition = {
  "enter-from-class": "translate-y-5 opacity-0",
  "leave-to-class": "translate-y-5 opacity-0",
  "enter-active-class": "transition duration-300",
  "leave-active-class": "transition duration-300",
};

const expand = ref(false);

defineProps<{
  blok: {
    link: Link;
    sublink: Link[];
  };
}>();
</script>
