<script setup>
import { ref, computed } from 'vue'
import BaseIcon from '@/components/atoms/BaseIcon.vue'

const base = import.meta.env.BASE_URL

const phoneImages = [
  base + 'images/leftphone.png',
  base + 'images/centerphone.png',
  base + 'images/rightphone.png',
]

const index = ref(0)

const currentSlide = computed(function () {
  const len = phoneImages.length
  return {
    left: phoneImages[(index.value + 0) % len],
    center: phoneImages[(index.value + 1) % len],
    right: phoneImages[(index.value + 2) % len],
  }
})

function prev() {
  index.value = (index.value - 1 + phoneImages.length) % phoneImages.length
}
function next() {
  index.value = (index.value + 1) % phoneImages.length
}
</script>

<template>
  <section class="py-12 lg:py-20">
    <div class="max-w-6xl mx-auto px-6 lg:px-10 relative">
      <button
        @click="prev"
        aria-label="Anterior"
        class="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border border-ink-100 shadow-md grid place-items-center text-ink-500 hover:text-brand-700 transition-colors z-10"
      >
        <BaseIcon name="arrow-left" :size="20" />
      </button>

      <div class="grid grid-cols-3 gap-4 md:gap-8 items-end px-12 md:px-16">
        <div class="opacity-70 scale-90 transition-all duration-500">
          <img :src="currentSlide.left" alt="App IGP - vista mapa" width="280" height="560" loading="lazy" decoding="async" class="w-full" />
        </div>
        <div class="relative z-10 transition-all duration-500">
          <div class="absolute -inset-2 rounded-[2.5rem] border-2 border-brand-700 -z-10"></div>
          <img :src="currentSlide.center" alt="App IGP - pantalla principal" width="320" height="640" loading="lazy" decoding="async" class="w-full drop-shadow-2xl" />
        </div>
        <div class="opacity-70 scale-90 transition-all duration-500">
          <img :src="currentSlide.right" alt="App IGP - red de volcanes" width="280" height="560" loading="lazy" decoding="async" class="w-full" />
        </div>
      </div>

      <button
        @click="next"
        aria-label="Siguiente"
        class="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-brand-700 text-white shadow-lg grid place-items-center hover:bg-brand-800 transition-colors z-10"
      >
        <BaseIcon name="arrow-right" :size="20" />
      </button>
    </div>
  </section>
</template>
