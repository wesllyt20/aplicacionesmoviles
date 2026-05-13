<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import { services } from '@/data/siteContent.js'

const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="services" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 xl:px-32">
      <div data-animate class="animate-fade-up">
        <SectionHeading
          :eyebrow="services.eyebrow"
          :title="services.title"
          :description="services.description"
        />
      </div>

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <div
          v-for="(card, idx) in services.cards"
          :key="card.id"
          data-animate
          :data-animate-delay="idx * 100"
          class="animate-fade-up service-card group relative rounded-2xl overflow-hidden cursor-pointer h-[280px] md:h-[320px] shadow-lg"
        >
          <!-- === CARA FRONTAL === -->
          <div class="front-face absolute inset-0">
            <img
              :src="`${base}images/${card.image}`"
              :alt="card.overlayTitle"
              class="w-full h-full object-cover"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
              <h3
                class="text-base font-bold leading-snug"
                v-html="card.overlayTitle.replace(/(último sismo|actividad volcánica|últimas publicaciones científicas|próximos eventos|reportes acelerométricos|información geoespacial)/gi, '<em class=\'font-black italic\'>$1</em>')"
              ></h3>
              <div class="mt-3 inline-flex items-center gap-2 border border-white/80 rounded-full px-4 py-1.5 text-sm font-medium">
                {{ card.cta }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </div>
            </div>
          </div>

          <!-- === CARA TRASERA (hover) === -->
          <div class="back-face absolute inset-0 bg-white flex">
            <!-- Left 7/12: info -->
            <div class="back-info" style="width: 58.33%">
              <div class="p-5 flex flex-col justify-center h-full">
                <img
                  :src="`${base}icons/${card.icon}`"
                  :alt="card.expandedTitle"
                  class="w-9 h-9 mb-3"
                />
                <h3 class="text-sm font-bold text-ink-900 leading-snug mb-2">{{ card.expandedTitle }}</h3>
                <p class="text-xs text-ink-500 leading-relaxed">{{ card.expandedDescription }}</p>
              </div>
            </div>
            <!-- Right 5/12: 2 images with gap -->
            <div class="back-images flex flex-col gap-1.5 p-1.5" style="width: 41.67%">
              <img
                :src="`${base}images/${card.image1}`"
                :alt="card.expandedTitle"
                class="w-full flex-1 object-cover rounded-lg"
                loading="lazy"
              />
              <img
                :src="`${base}images/${card.image2}`"
                :alt="card.expandedTitle"
                class="w-full flex-1 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Card base ── */
.service-card {
  perspective: 800px;
}

/* ── Front face ── */
.front-face {
  transition: opacity 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: center bottom;
}
.service-card:hover .front-face {
  opacity: 0;
  transform: scale(1.06) translateY(-6px);
}

/* ── Back face: slides up from below ── */
.back-face {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.service-card:hover .back-face {
  transform: translateY(0);
  opacity: 1;
}

/* ── Back content staggered reveal ── */
.back-info {
  transform: translateX(-16px);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s,
              opacity 0.35s ease 0.1s;
}
.service-card:hover .back-info {
  transform: translateX(0);
  opacity: 1;
}

.back-images {
  transform: translateX(16px);
  opacity: 0;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.15s,
              opacity 0.35s ease 0.15s;
}
.service-card:hover .back-images {
  transform: translateX(0);
  opacity: 1;
}
</style>
