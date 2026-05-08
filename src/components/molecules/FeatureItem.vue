<script setup>
import BaseIcon from '@/components/atoms/BaseIcon.vue'

defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tone: { type: String, default: 'brand' }, // brand | success | warning
  badge: { type: String, default: '' },
  badgeTone: { type: String, default: 'brand' },
})

const iconBg = {
  brand: 'bg-brand-700 text-white',
  success: 'bg-emerald-500 text-white',
  warning: 'bg-orange-500 text-white',
}

const badgeStyles = {
  brand: 'text-brand-500',
  warning: 'text-orange-500',
  success: 'text-emerald-600',
}
</script>

<template>
  <article class="flex items-start gap-5 rounded-2xl border border-ink-100 bg-white p-6 shadow-[0_2px_10px_-6px_rgba(15,23,42,0.08)] transition-shadow duration-200 hover:shadow-[0_8px_30px_-12px_rgba(15,23,42,0.18)]">
    <div :class="['shrink-0 grid place-items-center w-12 h-12 rounded-full', iconBg[tone]]">
      <BaseIcon :name="icon" :size="22" />
    </div>
    <div class="flex flex-col gap-2">
      <h3 class="text-lg font-bold text-ink-900">{{ title }}</h3>
      <p class="text-sm text-ink-500 leading-relaxed">{{ description }}</p>
      <div v-if="badge" class="flex items-center gap-3 mt-1">
        <template v-if="badge.includes('iOS')">
          <span class="text-xs font-semibold text-brand-600 underline underline-offset-2 cursor-pointer">iOS</span>
          <span class="text-xs font-semibold text-brand-600 underline underline-offset-2 cursor-pointer">Android</span>
        </template>
        <template v-else>
          <BaseIcon name="sparkle" :size="14" :class="badgeStyles[badgeTone]" />
          <span :class="['text-xs font-semibold', badgeStyles[badgeTone]]">{{ badge }}</span>
        </template>
      </div>
    </div>
  </article>
</template>
