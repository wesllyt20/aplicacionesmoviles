<script setup>
import BaseButton from '@/components/atoms/BaseButton.vue'
import StoreBadge from '@/components/molecules/StoreBadge.vue'
</script>

<template>
  <section
    id="hero"
    class="hero-curve relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 pt-28 pb-40 lg:pt-36 lg:pb-56"
  >
    <!-- Topographic wave lines -->
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M-100 650C200 580 400 700 700 620S1100 500 1540 580" stroke="white" stroke-width="2" fill="none" />
      <path d="M-100 700C200 630 400 750 700 670S1100 550 1540 630" stroke="white" stroke-width="1.5" fill="none" />
      <path d="M-100 750C200 680 400 800 700 720S1100 600 1540 680" stroke="white" stroke-width="1.5" fill="none" />
      <path d="M-100 800C200 730 400 850 700 770S1100 650 1540 730" stroke="white" stroke-width="1" fill="none" />
      <path d="M-100 850C200 780 400 900 700 820S1100 700 1540 780" stroke="white" stroke-width="1" fill="none" />
      <path d="M-100 500C300 430 500 550 800 470S1200 350 1540 430" stroke="white" stroke-width="1" fill="none" />
      <path d="M-100 550C300 480 500 600 800 520S1200 400 1540 480" stroke="white" stroke-width="1.5" fill="none" />
      <path d="M-100 600C300 530 500 650 800 570S1200 450 1540 530" stroke="white" stroke-width="1" fill="none" />
    </svg>

    <!-- Soft glow circles -->
    <div class="absolute -left-40 bottom-[-120px] w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-[100px]" aria-hidden="true"></div>
    <div class="absolute right-[-80px] top-20 w-[400px] h-[400px] rounded-full bg-brand-500/15 blur-[80px]" aria-hidden="true"></div>

    <!-- Dot grid accent -->
    <div class="absolute top-32 right-[42%] w-40 h-40 bg-dots opacity-60 hidden lg:block" aria-hidden="true"></div>

    <div class="relative max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left -->
      <div class="text-white max-w-xl">
        <h1 class="font-extrabold leading-[1.05] tracking-tight">
          <span class="block text-5xl md:text-6xl lg:text-7xl">#IGP</span>
          <span class="block italic font-bold text-3xl md:text-4xl lg:text-5xl mt-2">
            App Institucional
          </span>
        </h1>
        <p class="mt-7 text-base md:text-lg text-white/80 leading-relaxed max-w-lg">
          Accede a la información geofísica más reciente sobre sismos,
          volcanes y otros fenómenos, generada por el IGP, entidad oficial
          del Estado peruano encargada de su monitoreo y difusión.
        </p>

        <div class="mt-8">
          <BaseButton variant="white-outline" size="md" as="a" href="#about">
            Conoce más
          </BaseButton>
        </div>

        <div class="mt-12">
          <p class="text-sm font-semibold text-white mb-4">Disponible en:</p>
          <div class="flex flex-wrap items-center gap-3">
            <StoreBadge store="google" />
            <StoreBadge store="apple" />
          </div>
        </div>
      </div>

      <!-- Right: phones -->
      <div class="relative flex justify-center lg:justify-end">
        <img
          :src="`${$baseUrl}images/herophones.png`"
          alt="Vista de la app móvil del IGP en dos dispositivos"
          width="640"
          height="700"
          fetchpriority="high"
          decoding="async"
          class="w-full max-w-[520px] lg:max-w-[620px] drop-shadow-[0_30px_50px_rgba(0,0,0,0.35)]"
        />
      </div>
    </div>
  </section>
</template>
