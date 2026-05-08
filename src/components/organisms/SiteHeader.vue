<script setup>
import { ref } from 'vue'
import { useScroll, useWindowSize } from '@vueuse/core'
import BaseIcon from '@/components/atoms/BaseIcon.vue'
import BaseButton from '@/components/atoms/BaseButton.vue'

const { y } = useScroll(window)
const { width } = useWindowSize()
const isOpen = ref(false)

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Acerca de', href: '#about' },
  { label: 'Servicios y Funcionalidades', href: '#services' },
  { label: 'Público Objetivo', href: '#audience' },
  { label: 'Reseñas', href: '#reviews' },
]
</script>

<template>
  <header
    class="absolute inset-x-0 top-0 z-30"
    :class="[y > 40 ? 'fixed bg-brand-900/90 backdrop-blur-md shadow-lg' : '']"
  >
    <div class="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-6">
      <!-- Left logos -->
      <div class="flex items-center gap-4">
        <img
          :src="`${$baseUrl}logos/dark-minam.webp`"
          alt="Ministerio del Ambiente"
          width="120"
          height="36"
          class="h-9 w-auto"
        />
        <span class="h-8 w-px bg-white/20"></span>
        <img
          :src="`${$baseUrl}logos/dark-igp.webp`"
          alt="Instituto Geofísico del Perú"
          width="120"
          height="36"
          class="h-9 w-auto"
        />
      </div>

      <!-- Desktop nav -->
      <nav v-if="width >= 1024" class="flex items-center gap-7">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm text-white/90 hover:text-white transition-colors"
        >
          {{ link.label }}
        </a>
        <BaseButton variant="white-outline" size="sm" as="a" href="#download">
          DescargarApp
        </BaseButton>
      </nav>

      <!-- Mobile button -->
      <button
        v-else
        @click="isOpen = !isOpen"
        class="text-white p-2 rounded-md hover:bg-white/10"
        aria-label="Abrir menú"
      >
        <BaseIcon name="menu" :size="24" />
      </button>
    </div>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && width < 1024"
        class="lg:hidden bg-brand-900/95 backdrop-blur-md border-t border-white/10"
      >
        <nav class="px-6 py-4 flex flex-col gap-3">
          <a
            v-for="link in links"
            :key="link.href"
            :href="link.href"
            @click="isOpen = false"
            class="text-sm text-white/90 hover:text-white py-2"
          >
            {{ link.label }}
          </a>
          <BaseButton variant="white-outline" size="sm" as="a" href="#download">
            DescargarApp
          </BaseButton>
        </nav>
      </div>
    </Transition>
  </header>
</template>
