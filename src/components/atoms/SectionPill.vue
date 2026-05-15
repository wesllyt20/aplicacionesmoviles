<script setup>
defineProps({
  label: { type: String, required: true },
  tone: { type: String, default: 'brand' }, // brand | success | warning | violet | indigo
})

const tones = {
  brand: 'bg-brand-50 text-brand-700',
  success: 'bg-emerald-50 text-emerald-700',
  warning: 'bg-orange-50 text-orange-600',
  violet: 'bg-violet-50 text-violet-700',
  indigo: 'bg-indigo-50 text-indigo-700',
}
</script>

<template>
  <span
    :class="[
      'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium tracking-wide',
      tones[tone],
    ]"
  >
    <slot name="icon" />
    {{ label }}
  </span>
</template>
