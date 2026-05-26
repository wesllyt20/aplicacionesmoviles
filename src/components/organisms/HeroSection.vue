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
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
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
  <section id="hero" class="relative overflow-hidden min-h-screen flex items-center bg-brand-900">
    <!-- Background layers -->
    <div class="absolute inset-0 z-0">
      <!-- bg-principal.svg: always base layer (desktop and mobile) -->
      <img :src="`${base}images/bg-principal.svg`" alt="" aria-hidden="true"
        class="absolute inset-0 w-full h-full object-cover object-center" fetchpriority="high" />

      <!-- Desktop only: bg1-bg5 cycle with individual opacity transitions -->
      <!-- bg1 (i=0) is full-cover, hiding bg-principal when active            -->
      <!-- bg2-bg5 (i=1-4) overlay bg-principal, creating the combined look    -->
      <template v-if="!isMobile">
        <img v-for="(bg, i) in allBackgrounds" :key="bg" :src="`${base}images/${bg}`" alt="" aria-hidden="true"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
          :class="current === i ? 'opacity-100' : 'opacity-0'" :fetchpriority="i === 0 ? 'high' : undefined"
          loading="lazy" />
      </template>

      <!-- Dark overlay -->
    </div>

    <div
      class="relative z-10 max-w-360 mx-auto px-6 lg:px-10 w-full grid md:grid-cols-2 gap-8 lg:gap-16 items-center pt-28 pb-12 lg:pt-10 lg:pb-24">
      <!-- Left: Content with staggered entrance -->
      <div class="text-white">
        <!-- Hashtag title -->
        <h1 class="font-extrabold leading-[1.05] tracking-tight transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 0ms">
          <span class="block text-4xl sm:text-5xl md:text-7xl lg:text-[80px] font-bold">{{ hero.hashtag }}</span>
          <span class="block italic text-2xl sm:text-3xl md:text-4xl lg:text-[60px] mt-2 text-white font-medium">
            {{ hero.title }}
          </span>
        </h1>

        <!-- Description -->
        <p class="mt-10 lg:mt-10 text-sm sm:text-base md:text-[20px] text-white leading-normal max-w-[550px] transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 150ms">
          {{ hero.description }}
        </p>

        <!-- Store badges -->
        <div
          class="mt-7 lg:mt-11 flex sm:flow-root flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 280ms">
          <StoreBadge store="google" variant="white" class="w-full sm:w-auto    flex-1 justify-center"
            href="https://play.google.com/store/apps/details?id=app.igps.igpservicios&hl=es_PE" />
          <StoreBadge store="apple" variant="white" class="w-full sm:w-auto  sm:ml-6 flex-1 justify-center"
            href="https://apps.apple.com/pe/app/igp/id6748286605" />
        </div>

        <!-- Rating + downloads -->
        <div class="mt-6 lg:mt-15 flex items-center gap-4 transition-all duration-700 ease-out"
          :class="loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'" style="transition-delay: 380ms">
          <!-- Avatars -->
          <div class="flex  -space-x-4  flex-row-reverse space-x-reverse">
            <div v-for="(review, i) in reviews.items.slice(0, 4)" :key="review.name"
              class="w-15.5 h-15.5 rounded-full  grid place-items-center text-white text-[32px] font-medium shadow"
              :style="{ background: review.color, zIndex: 6 - i }">
              {{ initial(review.name) }}
            </div>
          </div>
          <!-- Stars + label -->
          <div class="flex flex-col gap-0.5">
            <div class="flex items-center gap-0.5">
              <svg v-for="n in 5" :key="n" class="w-5 sm:w-7 h-5 sm:h-7 text-yellow-400" viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27 5.23 15.71l.91-5.32L2.27 6.62l5.34-.78L10 1z" />
              </svg>
            </div>
            <span class="text-sm sm:text-lg text-white font-medium">{{ hero.rating }}</span>
          </div>
        </div>
      </div>

      <!-- Right: herophones — mobile only, with float animation -->
      <div v-if="isMobile" class="flex justify-center items-end transition-opacity duration-700 ease-out"
        :class="loaded ? 'opacity-100' : 'opacity-0'" style="transition-delay: 300ms">
        <img :src="`${base}images/herophones.png`" alt="App #IGP en dispositivos móviles" fetchpriority="high"
          class="w-full max-w-xs drop-shadow-2xl animate-hero-phones" />
      </div>
    </div>

    <!-- Curve Divider (desktop only, arch points down) -->
    <div class="hero-curve hidden md:block absolute inset-0 z-10 pointer-events-none" aria-hidden="true"></div>

    <!-- Scroll hint: teaser label + bouncing arrow -->
    <div
      class="absolute bottom-1 sm:bottom-30 left-0 right-0 z-20 flex flex-col items-center gap-1 transition-all duration-500 ease-out"
      :class="scrollY > 80 ? 'opacity-0 pointer-events-none' : loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'"
      style="transition-delay: 700ms">
      <button @click="scrollToAbout" aria-label="Ir a Acerca de #IGP"
        class="text-white/60 hover:text-white transition-colors cursor-pointer">
        <svg data-v-9bfeb311="" width="44" height="44" viewBox="0 0 44 44" fill="none"
          xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 animate-bounce drop-shadow-2xl cursor-pointer">
          <g>
            <path
              d="M9.16663 27.5C9.16663 30.9036 10.5188 34.168 12.9255 36.5747C15.3322 38.9815 18.5964 40.3332 22 40.3332C25.4035 40.3332 28.6678 38.9815 31.0746 36.5747C33.4812 34.168 34.8333 30.9036 34.8333 27.5V16.5C34.8333 13.0964 33.4812 9.83228 31.0746 7.42555C28.6678 5.01884 25.4035 3.66669 22 3.66669C18.5964 3.66669 15.3322 5.01884 12.9255 7.42555C10.5188 9.83228 9.16663 13.0964 9.16663 16.5V27.5Z"
              stroke="white" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M22.0011 20.0583L17.4728 15.528L15.5278 17.4721L22.0011 23.9481L28.4744 17.4721L26.5294 15.528L22.0011 20.0583Z"
              fill="white"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M22.0011 27.3917L17.4728 22.8613L15.5278 24.8054L22.0011 31.2815L28.4744 24.8054L26.5294 22.8613L22.0011 27.3917Z"
              fill="white"></path>
          </g>
          <defs>
            <clipPath id="clip0_156_2783">
              <rect width="44" height="44" fill="white"></rect>
            </clipPath>
          </defs>
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
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-16px);
  }
}
</style>
