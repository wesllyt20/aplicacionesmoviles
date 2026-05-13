<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  align: { type: String, default: 'center' }, // center | left
  htmlTitle: { type: Boolean, default: false },
})

import SectionPill from '@/components/atoms/SectionPill.vue'
</script>

<template>
  <div :class="['flex flex-col gap-4', align === 'center' ? 'items-center text-center' : 'items-start text-left']">
    <SectionPill v-if="eyebrow" :label="eyebrow" tone="brand" />
    <h2
      v-if="htmlTitle"
      class="text-2xl md:text-4xl font-bold text-brand-700 tracking-tight"
      v-html="title"
    ></h2>
    <h2 v-else class="text-2xl md:text-4xl font-bold text-brand-700 tracking-tight">
      {{ title }}
    </h2>
    <p v-if="description" class="max-w-3xl text-sm md:text-base text-ink-500 leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
