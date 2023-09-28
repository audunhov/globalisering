<template>
  <div class="py-16 text-gray-100">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl text-center"
      >
        <h2 class="inline sm:block">Vil du vite hva som skjer?</h2>
        {{ " " }}
        <p class="inline sm:block">Abonner på vårt nyhetsbrev.</p>
      </div>
      <form class="mt-10 max-w-md">
        <div class="flex gap-x-4">
          <label for="email-address" class="sr-only">E-postadresse</label>
          <input
            id="email-address"
            v-model.trim="email"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="min-w-0 flex-auto border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
            placeholder="E-postaddresse"
          />
          <button
            type="submit"
            class="flex-none bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <ArrowRightIcon class="h-6" />
          </button>
        </div>
        <p class="mt-4 text-sm leading-6 text-center">
          Vi bryr oss om dataen din, les vår
          <a href="#" class="font-semibold text-primary hover:underline"
            >personvernserklæring</a
          >.
        </p>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";

const email = ref("");
</script>
