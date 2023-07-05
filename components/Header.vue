<template>
  <Disclosure as="nav" class="sticky w-full top-0 z-30 shadow bg-primary" v-slot="{ open }">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 justify-between">
        <div class="flex">
          <NuxtLink href="/" class="flex flex-shrink-0 items-center">
            <img class="h-12 w-auto" src="https://a.storyblok.com/f/239618/81x81/9dea372b00/logo.webp" alt="Your Company" />
          </NuxtLink>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
            <!-- TODO storyblok links -->
          </div>
        </div>
        <div class="-mr-2 flex items-center">
          <DisclosureButton class="inline-flex items-center justify-center p-2 text-secondary hover:bg-secondary hover:text-primary">
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="fill-primary block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <Transition enter-from-class="translate-x-full" enter-active-class="transition-all duration-1000" enter-to-class="translate-x-0" leave-from-class="translate-x-0" leave-active-class="transition-all duration-1000" leave-to-class="translate-x-full">
    <DisclosurePanel>
      <div class="absolute h-screen w-full right-0 max-w-[800px] space-y-3 pb-3 pt-2 bg-primary">
        <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
        <DisclosureButton v-for="(link, i) in links" :key="i" class="block w-full md:text-left">
          <NuxtLink :href="link[0]" active-class="font-bold" class="hover:underline border-transparent py-2 pl-3 pr-4 text-xl text-secondary">{{link[1]}}</NuxtLink>
        </DisclosureButton>
      </div>
    </DisclosurePanel>
      </Transition>
  </Disclosure>
</template>

<script setup lang="ts">
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const links = [
    ["/", "Hjem"],
    ["/om-oss", "Om oss"]
]

</script>