<script setup>
import StatItem from '@/components/molecules/StatItem.vue'

const stats = [
  { value: '99k', label: 'Usuarios informados' },
  { value: '50k', label: 'Descargas' },
  { value: '24/7', label: 'Tiempo Real' },
]
</script>

<template>
  <section class="relative -mt-24 lg:-mt-32 z-10">
    <div class="max-w-6xl mx-auto px-6 lg:px-10">
      <div class="rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.18)] grid grid-cols-3 divide-x divide-ink-100 py-6 md:py-8">
        <StatItem
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
        />
      </div>
    </div>
  </section>
</template>
