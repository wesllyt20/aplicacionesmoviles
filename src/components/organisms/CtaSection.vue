<script setup>
import StoreBadge from '@/components/molecules/StoreBadge.vue'
import { cta } from '@/data/siteContent.js'
</script>

<template>
  <section
    id="download"
    class="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-900 text-white py-16 md:py-20"
  >
    <!-- Topographic wave lines -->
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none opacity-[0.1]"
      preserveAspectRatio="none"
      viewBox="0 0 1440 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M-100 100C200 60 500 140 800 100S1200 20 1540 80" stroke="white" stroke-width="2" fill="none" />
      <path d="M-100 150C200 110 500 190 800 150S1200 70 1540 130" stroke="white" stroke-width="1.5" fill="none" />
      <path d="M-100 200C200 160 500 240 800 200S1200 120 1540 180" stroke="white" stroke-width="1.5" fill="none" />
      <path d="M-100 250C200 210 500 290 800 250S1200 170 1540 230" stroke="white" stroke-width="1" fill="none" />
      <path d="M-100 300C200 260 500 340 800 300S1200 220 1540 280" stroke="white" stroke-width="1" fill="none" />
      <path d="M-100 350C200 310 500 390 800 350S1200 270 1540 330" stroke="white" stroke-width="1" fill="none" />
      <path d="M-100 400C200 360 500 440 800 400S1200 320 1540 380" stroke="white" stroke-width="1" fill="none" />
    </svg>

    <div class="relative max-w-4xl mx-auto px-6 text-center" data-animate>
      <div class="animate-fade-up">
        <h2 class="text-3xl md:text-5xl font-extrabold tracking-tight">
          {{ cta.title.replace('#IGP', '') }}<span class="italic font-black">#IGP</span>
        </h2>
        <p class="mt-4 text-base md:text-lg text-white/85 italic">
          {{ cta.subtitle }}
        </p>
      </div>
      <div class="mt-8 flex flex-wrap justify-center items-center gap-5">
        <StoreBadge store="google" variant="white" />
        <StoreBadge store="apple" variant="white" />
      </div>
    </div>
  </section>
</template>
