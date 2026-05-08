<script setup>
import ReviewCard from '@/components/molecules/ReviewCard.vue'

const reviews = [
  { name: 'Carlos Zúñiga Rendón', comment: 'Es una excelente aplicación, la gente debe entender que esta app es informativa y no preventiva...', color: '#ef4444' },
  { name: 'Luis Gonzales Tanaka', comment: 'un aplicativo que te informa de movimientos telúricos rápido y con exactitud, excelente', color: '#f59e0b' },
  { name: 'Guillermo Ernesto Villanueva Sánchez', comment: 'Es una exelente aplicación porque nos informa la magnitud detectada de cada cismo que ocurre ..', color: '#84cc16' },
  { name: 'Aristides Fernández García', comment: 'Está aplicación es un instrumento que nos permite saber la magnitud, dónde y que hora se ha registrado el sismo y también nos Previene para la emergencia correspondiente, según el caso...', color: '#3b82f6' },
  { name: 'VICTOR RICARDO OBLITAS DIAZ', comment: 'Muy buena y recomendable paro los que estamos al pendiente de estos movimientos sísmicos.', color: '#06b6d4' },
  { name: 'Maximo Espinoza', comment: 'Es una aplicación de mucha importancia,yo desearía que tenga alarma.', color: '#a855f7' },
  { name: 'Lucia Torres Odiaga', comment: 'recién la instale y se abrió de inmediato, muchas gracias, así estaremos mejor informados❤', color: '#ec4899' },
  { name: 'dennis victtorio mino madueño', comment: 'útil, necesaria y muy seria, permite estar sobre aviso ante cualquier movimiento sísmico, tsunami u otro evento de la naturaleza en nuestro país', color: '#64748b' },
  { name: 'Luciana Cárdenas Acuña', comment: 'La aplicación me pareció muy buena ya que nos informa sobre magnitudes de sismos que suceden e incluso cuenta con alertas de volcanes, nos brinda conocimiento de que es y para qué sirve el IGP.', color: '#dc2626' },
  { name: 'raul higa hurtado', comment: 'Muy bien que estén actualizando, para usar más funcionalidades.', color: '#ea580c' },
  { name: 'Yanesa Yumbato', comment: 'Muy buen aplicativo gracias a todos ustedes', color: '#d946ef' },
  { name: 'YAKOSTA ELISA GALAVIS', comment: 'Muy completa la aplicación . Los felicito', color: '#facc15' },
]
</script>

<template>
  <section id="reviews" class="py-16 lg:py-20">
    <div class="max-w-7xl mx-auto px-6 lg:px-10">
      <p class="text-center text-sm md:text-base text-ink-700 max-w-4xl mx-auto leading-relaxed">
        <strong>Esto es lo que dicen los peruanos sobre la app #IGP:</strong>
        una herramienta confiable y útil que les permite acceder a información geofísica actualizada en tiempo
        real, mantenerse informados sobre sismos y actividad volcánica, y tomar decisiones oportunas para su seguridad y la de sus familias.
      </p>

      <div class="mt-12 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5">
        <ReviewCard
          v-for="review in reviews"
          :key="review.name"
          :name="review.name"
          :comment="review.comment"
          :color="review.color"
        />
      </div>
    </div>
  </section>
</template>
