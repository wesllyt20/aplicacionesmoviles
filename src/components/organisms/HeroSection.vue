<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import StoreBadge from '@/components/molecules/StoreBadge.vue'
import { reviews } from '@/data/siteContent.js'
import { hero } from '@/data/siteContent.js'

function initial(name) {
  return (name || '?').trim().charAt(0).toUpperCase()
}

const base = import.meta.env.BASE_URL
const intervalMs = Number(import.meta.env.VITE_HERO_INTERVAL_MS || 5000)

// Slide 0 = bg1.png full (covers bg-principal entirely)
// Slides 1-4 = bg2-bg5 layered on top of bg-principal
const allBackgrounds = ['bg1.png', ...hero.backgrounds]
const current = ref(0)
const loaded = ref(false)
const scrollY = ref(0)
const isMobile = ref(false)
let timer = null

function checkMobile() { isMobile.value = window.innerWidth < 1024 }

function startTimer() {
  timer = setInterval(() => {
    current.value = (current.value + 1) % allBackgrounds.length
  }, intervalMs)
}

function onScroll() { scrollY.value = window.scrollY }

function scrollToAbout() {
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
}

onMounted(() => {
  requestAnimationFrame(() => setTimeout(() => { loaded.value = true }, 60))
  checkMobile()
  startTimer()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', checkMobile, { passive: true })
})
onUnmounted(() => {
  clearInterval(timer)
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <section id="hero" class="relative overflow-hidden min-h-[80vh] flex items-center bg-brand-900">
    <!-- Background layers -->
    <div class="absolute inset-0 z-0">
      <!-- bg-principal.svg: always base layer (desktop and mobile) -->
      <img :src="`${base}images/bg-principal.svg`" alt="" aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover object-center" fetchpriority="high" />

      <!-- Desktop only: bg1-bg5 cycle with individual opacity transitions -->
      <!-- bg1 (i=0) is full-cover, hiding bg-principal when active            -->
      <!-- bg2-bg5 (i=1-4) overlay bg-principal, creating the combined look    -->
      <template v-if="!isMobile">
        <img
          v-for="(bg, i) in allBackgrounds"
          :key="bg"
          :src="`${base}images/${bg}`"
          alt="" aria-hidden="true"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          :class="current === i ? 'opacity-100' : 'opacity-0'"
          :fetchpriority="i === 0 ? 'high' : undefined"
          loading="lazy"
        />
      </template>

      <!-- Dark overlay -->
      <div class="absolute inset-0 bg-linear-to-r from-brand-950/70 via-brand-900/50 to-transparent"></div>
    </div>

    <div
      class="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center pt-28 pb-12 lg:pt-36 lg:pb-24">
      <!-- Left: Content with staggered entrance -->
      <div class="text-white">
        <!-- Hashtag title -->
        <h1 class="font-extrabold leading-[1.05] tracking-tight transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 0ms">
          <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl">{{ hero.hashtag }}</span>
          <span class="block italic font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-1 text-blue-200">
            {{ hero.title }}
          </span>
        </h1>

        <!-- Description -->
        <p class="mt-5 text-sm sm:text-base md:text-lg text-white/80 leading-relaxed max-w-lg transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 150ms">
          {{ hero.description }}
        </p>

        <!-- Store badges -->
        <div class="mt-7 flex flex-wrap gap-3 transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 280ms">
          <StoreBadge store="google" variant="white" class="flex-1 min-w-36 justify-center" />
          <StoreBadge store="apple" variant="white" class="flex-1 min-w-36 justify-center" />
        </div>

        <!-- Rating + downloads -->
        <div class="mt-6 flex items-center gap-4 transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 380ms">
          <!-- Avatars -->
          <div class="flex -space-x-3">
            <div v-for="(review, i) in reviews.items.slice(0, 4)" :key="review.name"
              class="w-10 h-10 rounded-full border-2 border-white grid place-items-center text-white text-sm font-bold shadow"
              :style="{ background: review.color, zIndex: 4 - i }">
              {{ initial(review.name) }}
            </div>
          </div>
          <!-- Stars + label -->
          <div class="flex flex-col gap-0.5">
            <div class="flex items-center gap-0.5">
              <svg v-for="n in 5" :key="n" class="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27 5.23 15.71l.91-5.32L2.27 6.62l5.34-.78L10 1z" />
              </svg>
            </div>
            <span class="text-sm text-white/70 font-medium">{{ hero.rating }}</span>
          </div>
        </div>
      </div>

      <!-- Right: herophones — mobile only, with float animation -->
      <div
        v-if="isMobile"
        class="flex justify-center items-end transition-opacity duration-700 ease-out"
        :class="loaded ? 'opacity-100' : 'opacity-0'"
        style="transition-delay: 300ms"
      >
        <img
          :src="`${base}images/herophones.png`"
          alt="App #IGP en dispositivos móviles"
          fetchpriority="high"
          class="w-full max-w-xs drop-shadow-2xl animate-hero-phones"
        />
      </div>
    </div>

    <!-- Scroll hint: teaser label + bouncing arrow -->
    <div
      class="absolute bottom-6 left-0 right-0 z-20 flex flex-col items-center gap-1 transition-all duration-500 ease-out"
      :class="scrollY > 80 ? 'opacity-0 pointer-events-none' : loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
      style="transition-delay: 700ms"
    >
      <span class="text-white/75 text-xs font-semibold tracking-[0.2em] uppercase select-none">Acerca de #IGP</span>
      <button
        @click="scrollToAbout"
        aria-label="Ir a Acerca de #IGP"
        class="text-white/60 hover:text-white transition-colors cursor-pointer"
      >
        <svg class="w-6 h-6 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
.animate-hero-phones {
  animation: hero-phones-float 3s ease-in-out infinite alternate;
}

@keyframes hero-phones-float {
  0%   { transform: translateY(0); }
  100% { transform: translateY(-16px); }
}
</style>
