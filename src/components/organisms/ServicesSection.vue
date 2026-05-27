<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import { services } from '@/data/siteContent.js'

const base = import.meta.env.BASE_URL

const overlayTitleLines = {
  1: [
    [{ text: 'Infórmate sobre' }],
    [{ text: 'el último sismo', emphasis: true }],
    [{ text: 'y más.' }],
  ],
  2: [
    [{ text: 'Conoce sobre la' }],
    [{ text: 'actividad volcánica', emphasis: true }],
    [{ text: 'reciente y más.' }],
  ],
  3: [
    [{ text: 'Explora las ' }, { text: 'últimas', emphasis: true }],
    [{ text: 'publicaciones', emphasis: true }],
    [{ text: 'científicas.', emphasis: true }],
  ],
  4: [
    [{ text: 'Conoce los' }],
    [{ text: 'próximos eventos', emphasis: true }],
    [{ text: 'del Planetario IGP.' }],
  ],
  5: [
    [{ text: 'Consulta' }],
    [{ text: 'reportes', emphasis: true }],
    [{ text: 'acelerométricos', emphasis: true }],
  ],
  6: [
    [{ text: 'Conoce toda la' }],
    [{ text: 'información', emphasis: true }],
    [{ text: 'geoespacial', emphasis: true }, { text: ' del IGP.' }],
  ],
}

function getOverlayTitleLines(card) {
  return overlayTitleLines[card.id] || [[{ text: card.overlayTitle }]]
}
</script>

<template>
  <section id="services" class="py-10 lg:pt-18 bg-white">
    <div class="max-w-360 mx-auto px-6 sm:px-12 lg:px-20 xl:px-9.5">
      <div data-animate class="animate-fade-up text-center">
        <SectionHeading :eyebrow="services.eyebrow" :title="services.title" :strongTitle="services.strongTitle" />
        <p class=" text-sm md:text-base text-ink-500 leading-relaxed mt-4">
          Descubre todo lo que podrás encontrar dentro del aplicativo.
        </p>
      </div>

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 md:gap-6">
        <div v-for="(card, idx) in services.cards" :key="card.id" data-animate :data-animate-delay="idx * 100"
          class="animate-fade-up service-card group relative rounded-2xl overflow-hidden cursor-pointer h-72.5 sm:h-87.5 border border-black/10">
          <!-- === CARA FRONTAL === -->
          <div class="front-face absolute inset-0">
            <img :src="`${base}images/${card.image}`" :alt="card.overlayTitle" class="w-full h-full object-cover"
              loading="lazy" />
            <div class="absolute inset-0 grid grid-cols-7 items-center text-white">
              <div :class="['col-span-5 pl-5 flex flex-col items-start', idx === 0 ? 'pr-6 sm:pr-12' : 'pr-3']">
                <h3 class="service-card-title">
                  <span v-for="(line, lineIndex) in getOverlayTitleLines(card)" :key="lineIndex"
                    class="block whitespace-nowrap">
                    <template v-for="(part, partIndex) in line" :key="partIndex">
                      <em v-if="part.emphasis" class="font-black italic">{{ part.text }}</em>
                      <span v-else>{{ part.text }}</span>
                    </template>
                  </span>
                </h3>
                <div
                  class="inline-flex w-fit mt-4 items-center gap-2 border border-white/80 rounded-lg px-4 py-2 text-sm font-semibold">
                  {{ card.cta }}
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- === CARA TRASERA (hover) === -->
          <div class="back-face absolute inset-0 bg-white flex">
            <!-- Left 7/12: info -->
            <div class="back-info" style="width: 58.33%">
              <div class="p-5 flex flex-col justify-center h-full">
                <img :src="`${base}icons/${card.icon}`" :alt="card.expandedTitle"
                  class="w-11 h-11 lg:w-16 lg:h-16 mb-3 border-black/10 border rounded-lg p-1" />
                <h3 class="text-base font-medium text-ink-900 leading-snug mb-2">{{ card.expandedTitle }}</h3>
                <p class="text-xs lg:text-sm text-ink-500 ">{{ card.expandedDescription1 }}
                  <strong>{{ card.strongDescription }}</strong>{{ card.expandedDescription2 }}
                </p>
              </div>
            </div>
            <!-- Right 5/12: 2 images with gap -->
            <div class="back-images flex flex-col gap-1.5 p-1.5" style="width: 41.67%">
              <img :src="`${base}images/${card.image1}`" :alt="card.expandedTitle"
                class="w-full flex-1 object-cover rounded-lg" loading="lazy" />
              <img :src="`${base}images/${card.image2}`" :alt="card.expandedTitle"
                class="w-full flex-1 object-cover rounded-lg" loading="lazy" />
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

.service-card-title {
  font-size: 22px;
  line-height: 1.12;
  font-weight: 400;
  letter-spacing: 0;
}

@media (min-width: 1024px) {
  .service-card-title {
    font-size: 28px;
  }
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
