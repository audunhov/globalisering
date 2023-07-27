<template>
  <TransitionRoot as="template" :show="modelValue">
    <Dialog
      as="div"
      class="relative z-10"
      @close="emit('update:modelValue', false)"
    >
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
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
              <DialogPanel
                class="mt-20 pointer-events-auto w-screen max-w-screen-md"
              >
                <div
                  class="flex h-full flex-col overflow-y-scroll bg-primary text-secondary py-6"
                >
                  <div
                    class="relative mt-6 flex-1 px-4 sm:px-6 flex flex-col items-center md:items-start"
                  >
                    <slot />
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();
</script>
