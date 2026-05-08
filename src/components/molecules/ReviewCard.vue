<script setup>
defineProps({
  name: { type: String, required: true },
  source: { type: String, default: 'Google Play Store' },
  comment: { type: String, required: true },
  color: { type: String, default: '#6366f1' },
})

function initial(value) {
  return (value || '?').trim().charAt(0).toUpperCase()
}
</script>

<template>
  <article class="break-inside-avoid mb-5 rounded-2xl border border-ink-100 bg-white p-5 shadow-[0_2px_8px_-6px_rgba(15,23,42,0.1)]">
    <header class="flex items-center gap-3 mb-3">
      <div
        class="w-10 h-10 rounded-full grid place-items-center text-white font-semibold"
        :style="{ background: color }"
      >
        {{ initial(name) }}
      </div>
      <div class="flex flex-col leading-tight">
        <span class="text-sm font-semibold text-ink-900">{{ name }}</span>
        <span class="text-xs text-ink-400">{{ source }}</span>
      </div>
    </header>
    <p class="text-sm text-ink-500 leading-relaxed">{{ comment }}</p>
  </article>
</template>
