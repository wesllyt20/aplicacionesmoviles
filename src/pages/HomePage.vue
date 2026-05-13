<script setup>
import { defineAsyncComponent } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation.js'
import LandingTemplate from '@/components/templates/LandingTemplate.vue'
import HeroSection from '@/components/organisms/HeroSection.vue'
import StatsBar from '@/components/organisms/StatsBar.vue'
import AboutSection from '@/components/organisms/AboutSection.vue'

// Below-the-fold organisms loaded asynchronously for better LCP.
const ServicesSection = defineAsyncComponent(() => import('@/components/organisms/ServicesSection.vue'))
const ReviewsSection = defineAsyncComponent(() => import('@/components/organisms/ReviewsSection.vue'))
const AppDownloadSection = defineAsyncComponent(() => import('@/components/organisms/AppDownloadSection.vue'))
const FaqSection = defineAsyncComponent(() => import('@/components/organisms/FaqSection.vue'))

useScrollAnimation()
</script>

<template>
  <LandingTemplate>
    <HeroSection />
    <StatsBar />
    <AboutSection />
    <Suspense>
      <template #default>
        <ServicesSection />
      </template>
      <template #fallback>
        <div class="py-20 text-center text-ink-400">Cargando…</div>
      </template>
    </Suspense>
    <ReviewsSection />
    <FaqSection />
    <AppDownloadSection />
  </LandingTemplate>
</template>
