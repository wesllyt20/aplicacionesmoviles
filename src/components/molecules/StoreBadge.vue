<script setup>
defineProps({
  store: { type: String, required: true }, // 'google' | 'apple'
  href: { type: String, default: '#' },
  variant: { type: String, default: 'dark' }, // 'dark' | 'white'
})
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    :aria-label="store === 'google' ? 'Descargar en Google Play' : 'Descargar en App Store'"
    class="inline-flex items-center gap-3 rounded-lg px-4 py-2.5 transition-all duration-200 hover:-translate-y-0.5 select-none"
    :class="variant === 'white'
      ? 'bg-white text-ink-900 border border-ink-200 shadow-sm hover:shadow-md'
      : 'bg-black/30 text-white border border-white/30 backdrop-blur-sm hover:bg-black/40'"
  >
    <!-- Google Play icon -->
    <svg v-if="store === 'google'" class="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.609 1.814 13.444 12 3.609 22.186a1.247 1.247 0 0 1-.609-1.08V2.894c0-.462.233-.868.609-1.08Z" fill="#4285F4" />
      <path d="m17.159 8.641-3.715 3.36 3.715 3.359 4.182-2.384c.6-.342.6-1.207 0-1.55l-4.182-2.385-.001.6Z" fill="#FBBC04" />
      <path d="M3.609 1.814 13.444 12l3.715-3.359L6.34.372C5.858.097 5.312.014 4.807.14a1.84 1.84 0 0 0-.564.216l-.001.001-.633 1.457Z" fill="#34A853" />
      <path d="M3.609 22.186 6.34 23.628l10.819-8.269L13.444 12 3.609 22.186Z" fill="#EA4335" />
    </svg>
    <!-- Apple icon -->
    <svg v-else class="w-6 h-6 shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" :fill="variant === 'white' ? '#000' : '#fff'">
      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97c-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.71.85-1.84 1.51-2.95 1.42-.15-1.24.41-2.35 1.05-3.11Z" />
    </svg>
    <div class="leading-tight">
      <template v-if="store === 'google'">
        <span class="block text-[10px] uppercase tracking-wider" :class="variant === 'white' ? 'text-ink-500' : 'text-white/70'">Disponible en</span>
        <span class="block text-sm font-bold">Google Play</span>
      </template>
      <template v-else>
        <span class="block text-[10px] uppercase tracking-wider" :class="variant === 'white' ? 'text-ink-500' : 'text-white/70'">Download on the</span>
        <span class="block text-sm font-bold">App Store</span>
      </template>
    </div>
  </a>
</template>
