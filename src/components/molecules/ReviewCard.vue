<script setup>
const props = defineProps({
  name: { type: String, required: true },
  source: { type: String, default: 'Google Play Store' },
  comment: { type: String, required: true },
  color: { type: String, default: '#6366f1' },
})

function initial(value) {
  return (value || '?').trim().charAt(0).toUpperCase()
}

function hexToRgba(hex, alpha) {
  const normalized = (hex || props.color).replace('#', '')
  const value = normalized.length === 3
    ? normalized.split('').map((char) => char + char).join('')
    : normalized
  const number = Number.parseInt(value, 16)
  const r = (number >> 16) & 255
  const g = (number >> 8) & 255
  const b = number & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}
</script>

<template>
  <article class="rounded-lg border p-4"
    :style="{ backgroundColor: hexToRgba(color, 0.03), borderColor: hexToRgba(color, 0.08) }">
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
