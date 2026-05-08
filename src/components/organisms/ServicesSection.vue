<script setup>
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import ServiceCard from '@/components/molecules/ServiceCard.vue'

const services = [
  { icon: 'activity', title: 'Último Sismo', description: 'Consulta información actualizada de eventos sísmicos en el Perú y la región con datos oficiales del IGP.', tone: 'blue' },
  { icon: 'hourglass', title: 'Última actividad volcanica', description: 'Accede a reportes y estados de alerta volcánica del monitoreo científico permanente.', tone: 'red' },
  { icon: 'waveform', title: 'Informaación acelerométrica', description: 'Visualiza el reporte acelerométrico despuesde ocurrido un sismo M>=4.5', tone: 'green' },
  { icon: 'book', title: 'Últimas publicaciones científicas', description: 'Interfaz optimizada para uso nocturno y situaciones de emergencia.', tone: 'pink' },
  { icon: 'telescope', title: 'Eventos en Planetario IGP', description: 'Infórmate sobre los próximos eventos y espectaculos que el planetario brinda al publico en general.', tone: 'indigo' },
  { icon: 'map', title: 'Consulta información geoespacial', description: 'Consulta Información geoespacial sobre fenómenos geofísicos a traves de nuestro portal IDE IGP', tone: 'amber' },
]
</script>

<template>
  <section id="services" class="py-20 lg:py-28 bg-white">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <SectionHeading
        eyebrow="Servicios y Funcionalidades"
        title="¿Qué puedes encontrar?"
        description="El App del IGP integra información geofísica oficial y los principales servicios de monitoreo que la institución brinda al país."
      />

      <div class="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        <ServiceCard
          v-for="s in services"
          :key="s.title"
          :icon="s.icon"
          :title="s.title"
          :description="s.description"
          :tone="s.tone"
        />
      </div>
    </div>
  </section>
</template>
