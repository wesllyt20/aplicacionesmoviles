<script setup>
import BaseIcon from '@/components/atoms/BaseIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tone: { type: String, default: 'blue' },
})

const palette = {
  blue: { card: 'bg-sky-50/80', icon: 'bg-blue-500 text-white' },
  red: { card: 'bg-rose-50/80', icon: 'bg-rose-500 text-white' },
  green: { card: 'bg-emerald-50/80', icon: 'bg-emerald-500 text-white' },
  pink: { card: 'bg-pink-50/80', icon: 'bg-fuchsia-500 text-white' },
  indigo: { card: 'bg-indigo-50/80', icon: 'bg-indigo-500 text-white' },
  amber: { card: 'bg-amber-50/80', icon: 'bg-amber-500 text-white' },
}
</script>

<template>
  <article :class="['rounded-2xl p-6 md:p-7 flex flex-col gap-4 transition-transform duration-200 hover:-translate-y-1', palette[tone].card]">
    <div :class="['w-11 h-11 rounded-xl grid place-items-center shadow-md', palette[tone].icon]">
      <BaseIcon :name="icon" :size="22" />
    </div>
    <h3 class="text-lg font-semibold text-ink-900">{{ title }}</h3>
    <p class="text-sm text-ink-500 leading-relaxed">{{ description }}</p>
  </article>
</template>
