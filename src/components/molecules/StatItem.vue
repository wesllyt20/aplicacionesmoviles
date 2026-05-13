<script setup>
defineProps({
  value: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <div class="flex flex-col items-center text-center px-6 py-2">
    <span class=" text-3xl md:text-5xl font-extrabold text-ink-900 tracking-tight">{{ value }}</span>
  </div>
</template>
