<script setup>
import StoreBadge from '@/components/molecules/StoreBadge.vue'
import { cta } from '@/data/siteContent.js'

const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="download" class="mb-12">

    <!-- ── DESKTOP: rounded card with horizontal margins ── -->
    <div class="hidden lg:block mx-8 xl:mx-16 rounded-3xl overflow-hidden relative h-85">
      <!-- Background contained inside card -->
      <div class="absolute inset-0 bg-brand-800"></div>
      <div class="absolute inset-0 opacity-25"
        :style="`background-image: url('${base}images/rayas.png'); background-size: cover; background-position: center;`">
      </div>

      <!-- Phone image: top-anchored → upper half visible, bottom overflows -->
      <div data-animate class="animate-fade-right absolute top-0 left-40 z-10 animate-download-float">
        <img :src="`${base}images/herophones.png`" alt="App #IGP en dispositivos móviles" loading="lazy"
          decoding="async" class="w-105 xl:w-125 object-contain drop-shadow-2xl pt-10 pl-5" />
      </div>

      <!-- Text + badges: right half, vertically centred -->
      <div data-animate data-animate-delay="120"
        class="animate-fade-left absolute inset-y-0 right-0 w-[50%] z-20 flex items-center pr-12 xl:pr-20">
        <div class="text-white">
          <h2 class="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
            Descarga Ahora
            <span class="font-black">#IGP</span>
          </h2>
          <p class="mt-4 text-base text-white/80 italic">
            {{ cta.subtitle }}
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <StoreBadge store="apple" variant="white" href="https://apps.apple.com/pe/app/igp/id6748286605" />
            <StoreBadge store="google" variant="white"
              href="https://play.google.com/store/apps/details?id=app.igps.igpservicios&hl=es_PE" />
          </div>
        </div>
      </div>
    </div>

    <!-- ── MOBILE: rounded card with horizontal margins ── -->
    <div class="lg:hidden mx-4 sm:mx-6 rounded-3xl overflow-hidden relative">
      <!-- Background contained inside card -->
      <div class="absolute inset-0 bg-brand-800"></div>
      <div class="absolute inset-0 opacity-25"
        :style="`background-image: url('${base}images/rayas.png'); background-size: cover; background-position: center;`">
      </div>

      <div class="relative z-10 flex flex-col items-center text-center text-white px-8 sm:px-16 py-14 sm:py-16">
        <h2 data-animate class="animate-fade-up text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
          Descarga Ahora
          <span class="font-black">#IGP</span>
        </h2>

        <p data-animate data-animate-delay="100" class="animate-fade-up mt-4 text-base text-white/80 italic max-w-sm">
          {{ cta.subtitle }}
        </p>

        <div data-animate data-animate-delay="200" class="animate-fade-up mt-8 flex flex-col gap-3 w-full max-w-xs">
          <a href="https://apps.apple.com/pe/app/igp/id6748286605" target="_blank" rel="noopener"
            aria-label="Descargar en App Store"
            class="flex items-center gap-3 rounded-xl px-5 py-3 bg-white text-ink-900 border border-ink-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 select-none">
            <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000">
              <path
                d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97c-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.71.85-1.84 1.51-2.95 1.42-.15-1.24.41-2.35 1.05-3.11Z" />
            </svg>
            <div class="leading-tight text-left">
              <span class="block text-[10px] uppercase tracking-wider text-ink-500">Disponible en</span>
              <span class="block text-sm font-bold">Apple Store</span>
            </div>
          </a>

          <a href="https://play.google.com/store/apps/details?id=app.igps.igpservicios&hl=es_PE" target="_blank"
            rel="noopener" aria-label="Descargar en Google Play"
            class="flex items-center gap-3 rounded-xl px-5 py-3 bg-white text-ink-900 border border-ink-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 select-none">
            <svg class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.609 1.814 13.444 12 3.609 22.186a1.247 1.247 0 0 1-.609-1.08V2.894c0-.462.233-.868.609-1.08Z"
                fill="#4285F4" />
              <path d="m17.159 8.641-3.715 3.36 3.715 3.359 4.182-2.384c.6-.342.6-1.207 0-1.55l-4.182-2.385-.001.6Z"
                fill="#FBBC04" />
              <path
                d="M3.609 1.814 13.444 12l3.715-3.359L6.34.372C5.858.097 5.312.014 4.807.14a1.84 1.84 0 0 0-.564.216l-.001.001-.633 1.457Z"
                fill="#34A853" />
              <path d="M3.609 22.186 6.34 23.628l10.819-8.269L13.444 12 3.609 22.186Z" fill="#EA4335" />
            </svg>
            <div class="leading-tight text-left">
              <span class="block text-[10px] uppercase tracking-wider text-ink-500">Disponible en</span>
              <span class="block text-sm font-bold">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-download-float {
  animation: download-float 2s ease-in-out infinite alternate;
}

@keyframes download-float {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-14px);
  }
}
</style>
