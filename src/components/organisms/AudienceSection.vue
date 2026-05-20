<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import AudienceCard from '@/components/molecules/AudienceCard.vue'

const items = [
  { icon: 'shield', text: 'Contribuye a la prevención y reducción del riesgo de desastres' },
  { icon: 'users', text: 'Fortalece la cultura de prevención en la población' },
  { icon: 'building', text: 'Refuerza la presencia digital del IGP a nivel nacional' },
  { icon: 'scales', text: 'Apoya la toma de decisiones de autoridades y ciudadanía' },
]
</script>

<template>
  <section id="audience" class="py-20 lg:py-28">
    <div class="max-w-400 mx-auto px-6 lg:px-10">
      <SectionHeading
        eyebrow="Público objetivo"
        title="¿A quien esta dirigido?"
        description="El App del IGP integra información geofísica oficial y los principales servicios de monitoreo que la institución brinda al país."
      />

      <div class="mt-14 grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        <AudienceCard
          v-for="item in items"
          :key="item.text"
          :icon="item.icon"
          :text="item.text"
        />
      </div>
    </div>
  </section>
</template>
