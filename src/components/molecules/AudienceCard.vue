<script setup>
import BaseIcon from '@/components/atoms/BaseIcon.vue'

defineProps({
  icon: { type: String, required: true },
  text: { type: String, required: true },
})
</script>

<template>
  <article class="flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-5">
    <div class="shrink-0 w-12 h-12 rounded-xl bg-brand-700 text-white grid place-items-center">
      <BaseIcon :name="icon" :size="22" />
    </div>
    <p class="text-sm md:text-base text-ink-700 leading-snug font-medium">{{ text }}</p>
  </article>
</template>
