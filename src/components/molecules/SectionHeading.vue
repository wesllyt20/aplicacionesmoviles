<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: false },
  titleHighlight: { type: String, default: '' },
  strongTitle: { type: String, default: '' },
  align: { type: String, default: 'center' }, // center | left
  htmlTitle: { type: Boolean, default: false },
})

import SectionPill from '@/components/atoms/SectionPill.vue'
</script>

<template>
  <div :class="['flex flex-col gap-4', align === 'center' ? 'items-center text-center' : 'items-start text-left']">
    <SectionPill v-if="eyebrow" :label="eyebrow" tone="brand" />
    <h2 v-if="htmlTitle" class="text-2xl md:text-3xl font-bold text-[#0F00DB] tracking-tight" v-html="title"></h2>
    <h2 v-else class="text-2xl md:text-3xl text-[#0F00DB] tracking-tight font-normal">
      <span class="text-[#0F00DB] font-semibold" v-if="strongTitle">{{ strongTitle }}</span> {{ title }} <span
        v-if="titleHighlight" class="text-[#0F00DB] font-semibold italic">{{ titleHighlight }}</span>
    </h2>

  </div>
</template>
