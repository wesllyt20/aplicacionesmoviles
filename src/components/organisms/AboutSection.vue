<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import FeatureItem from '@/components/molecules/FeatureItem.vue'

const features = [
  {
    icon: 'refresh',
    title: 'Actualización Permanente',
    description: 'Información en tiempo real sobre eventos y fenómenos geofísicos del territorio nacional emitidos por el IGP',
    badge: 'Tiempo Real',
    badgeTone: 'brand',
    tone: 'brand',
  },
  {
    icon: 'triangle-alert',
    title: 'Prevención y Gestión del Riesgo',
    description: 'Herramienta fundamental para la reducción del riesgo de desastres naturales en el país',
    badge: 'Seguridad',
    badgeTone: 'warning',
    tone: 'warning',
  },
  {
    icon: 'globe',
    title: 'Acceso Universal',
    description: 'Disponible para todos los peruanos en iOS, Huawei y Android sin costo alguno',
    badge: 'iOS     Android',
    badgeTone: 'brand',
    tone: 'brand',
  },
]
</script>

<template>
  <section id="about" class="py-20 lg:py-28">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeading
        eyebrow="Acerca de #IGP"
        title="¿Qué es el app movil institucional #IGP?"
        description="El aplicativo institucional del IGP reúne en un solo lugar la información de todos sus servicios, de forma actualizada y confiable, para que la población, las autoridades y los profesionales se informen, prevengan riesgos y tomen decisiones oportunas."
      />

      <div class="mt-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- Phone with concentric rings -->
        <div class="relative flex justify-center items-center min-h-[500px] md:min-h-[640px]">
          <!-- Concentric circles -->
          <div class="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-ink-100/80" aria-hidden="true"></div>
          <div class="absolute w-[380px] h-[380px] md:w-[500px] md:h-[500px] rounded-full border border-ink-100/60" aria-hidden="true"></div>
          <div class="absolute w-[480px] h-[480px] md:w-[620px] md:h-[620px] rounded-full border border-ink-100/40" aria-hidden="true"></div>
          <div class="absolute w-[580px] h-[580px] md:w-[740px] md:h-[740px] rounded-full border border-ink-100/20" aria-hidden="true"></div>
          <img
            :src="`${$baseUrl}images/infophone.svg`"
            alt="App IGP - Pantalla principal"
            width="380"
            height="700"
            loading="lazy"
            decoding="async"
            class="relative z-10 w-[260px] md:w-[320px] drop-shadow-2xl"
          />
        </div>

        <!-- Features -->
        <div class="flex flex-col gap-5">
          <FeatureItem
            v-for="f in features"
            :key="f.title"
            :icon="f.icon"
            :title="f.title"
            :description="f.description"
            :badge="f.badge"
            :badge-tone="f.badgeTone"
            :tone="f.tone"
          />
        </div>
      </div>
    </div>
  </section>
</template>
