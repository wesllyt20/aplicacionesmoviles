<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import { about } from '@/data/siteContent.js'

const base = import.meta.env.BASE_URL
</script>

<template>
  <section id="about" class="py-15 lg:py-10 overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 lg:px-10 ">
      <div data-animate class="animate-fade-up flex flex-col items-center text-center">
        <SectionHeading :eyebrow="about.eyebrow" :title="about.title" :titleHighlight="about.titleHighlight" />
        <!-- description -->
        <p class=" text-sm md:text-base text-ink-500 leading-relaxed mt-4">
          <strong>#IGP</strong> es una aplicación móvil institucional del Instituto Geofísico del Perú que
          <strong>centraliza, en un solo lugar, la información de todos sus servicios</strong>, facilitando que la
          población, autoridades y profesionales se informen, prevengan riesgos y tomen decisiones oportunas.
        </p>
      </div>

      <div class="mt-8 lg:mt-16 grid lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-6 items-center">
        <!-- Left features -->
        <div class="flex flex-col gap-6 order-2 lg:order-1">
          <article v-for="(f, i) in about.features.slice(0, 2)" :key="f.title" data-animate
            :data-animate-delay="i * 150"
            class="animate-fade-right mt-0 lg:mt-16 flex items-start gap-4 bg-white rounded-2xl border border-ink-100 p-5 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)]">
            <div class="shrink-0 w-14 h-14 rounded-2xl bg-brand-700 grid place-items-center shadow-md">
              <img :src="`${base}icons/${f.icon}`" :alt="f.title" class="w-7 h-7 brightness-0 invert" />
            </div>
            <div>
              <h3 class="text-lg font-normal text-brand-700">{{ f.title }}</h3>
              <p class="text-sm text-ink-500 leading-relaxed mt-1">{{ f.description }}</p>
            </div>
          </article>
        </div>

        <!-- Center: Phone with epicenter pulse -->
        <div
          class="relative flex justify-center items-center min-h-90 sm:min-h-120 md:min-h-150 order-1 lg:order-2 animate-scale"
          data-animate data-animate-delay="200">
          <!-- Epicenter pulse rings -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <span class="epicenter-ring epicenter-ring--1"></span>
            <span class="epicenter-ring epicenter-ring--2"></span>
            <span class="epicenter-ring epicenter-ring--3"></span>
            <span class="epicenter-ring epicenter-ring--4"></span>
          </div>

          <!-- Phone image -->
          <img id="imagenCortada" :src="`${base}images/centerphone.png`" alt="App IGP - Pantalla principal" width="380"
            height="700" loading="lazy" decoding="async"
            class="relative z-10 w-40 sm:w-50 md:w-70 drop-shadow-2xl animate-phone-enter border-[#0000AF] border-2 rounded-2xl" />
        </div>

        <!-- Right features -->
        <div class="flex flex-col gap-6 order-3 mt-0 lg:mt-24">
          <article v-for="(f, i) in about.features.slice(2, 4)" :key="f.title" data-animate
            :data-animate-delay="i * 150 + 300"
            class="animate-fade-left mt-0 lg:mt-10 flex items-start gap-4 bg-white rounded-2xl border border-ink-100 p-5 shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)]">
            <div class="shrink-0 w-14 h-14 rounded-2xl bg-brand-700 grid place-items-center shadow-md">
              <img :src="`${base}icons/${f.icon}`" :alt="f.title" class="w-7 h-7 brightness-0 invert" />
            </div>
            <div>
              <h3 class="text-lg font-bold text-brand-700">{{ f.title }}</h3>
              <p class="text-sm text-ink-500 leading-relaxed mt-1">{{ f.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* ── Epicenter pulse animation ── */
.epicenter-ring {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(41, 55, 255, 0.25);
  animation: epicenter-pulse 3s ease-out infinite;
}

.epicenter-ring--1 {
  width: 120px;
  height: 120px;
  animation-delay: 0s;
}

.epicenter-ring--2 {
  width: 120px;
  height: 120px;
  animation-delay: 0.75s;
}

.epicenter-ring--3 {
  width: 120px;
  height: 120px;
  animation-delay: 1.5s;
}

.epicenter-ring--4 {
  width: 120px;
  height: 120px;
  animation-delay: 2.25s;
}

@keyframes epicenter-pulse {
  0% {
    transform: scale(0.5);
    opacity: 0.7;
    border-color: rgba(41, 55, 255, 0.4);
  }

  100% {
    transform: scale(2.2);
    opacity: 0;
    border-color: rgba(41, 55, 255, 0);
  }
}

/* ── Desktop: larger rings so they're visible behind the phone ── */
@media (min-width: 1024px) {
  .epicenter-ring--1 {
    width: 200px;
    height: 200px;
  }

  .epicenter-ring--2 {
    width: 200px;
    height: 200px;
  }

  .epicenter-ring--3 {
    width: 200px;
    height: 200px;
  }

  .epicenter-ring--4 {
    width: 200px;
    height: 200px;
  }

  @keyframes epicenter-pulse {
    0% {
      transform: scale(0.5);
      opacity: 0.7;
      border-color: rgba(41, 55, 255, 0.4);
    }

    100% {
      transform: scale(2.8);
      opacity: 0;
      border-color: rgba(41, 55, 255, 0);
    }
  }
}

/* ── Phone enter animation ── */
.animate-phone-enter {
  animation: phone-float 3s ease-in-out infinite alternate;
}

@keyframes phone-float {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-12px);
  }
}

#imagenCortada {
  object-view-box: inset(0 0 10% 0);
}
</style>
