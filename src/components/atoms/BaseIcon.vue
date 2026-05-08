<script setup>
defineProps({
  name: { type: String, required: true },
  size: { type: [Number, String], default: 24 },
  strokeWidth: { type: [Number, String], default: 1.8 },
  class: { type: String, default: '' },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    :class="$attrs.class"
  >
    <!-- Navigation / arrows -->
    <template v-if="name === 'arrow-right'">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </template>
    <template v-else-if="name === 'arrow-left'">
      <path d="M19 12H5M11 5l-7 7 7 7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </template>

    <!-- Refresh / update -->
    <template v-else-if="name === 'refresh'">
      <path d="M4 4v6h6M20 20v-6h-6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20 10A8 8 0 0 0 5.6 6.6L4 8M4 14a8 8 0 0 0 14.4 3.4L20 16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </template>

    <!-- Shield -->
    <template v-else-if="name === 'shield'">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
    </template>

    <!-- Globe -->
    <template v-else-if="name === 'globe'">
      <circle cx="12" cy="12" r="9" stroke="currentColor" :stroke-width="strokeWidth" />
      <path d="M3 12h18M12 3c2.8 3 2.8 15 0 18M12 3c-2.8 3-2.8 15 0 18" stroke="currentColor" :stroke-width="strokeWidth" />
    </template>

    <!-- Triangle warning -->
    <template v-else-if="name === 'triangle-alert'">
      <path d="M12 3 2.5 20h19L12 3Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
      <path d="M12 10v4M12 17h.01" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
    </template>

    <!-- Activity / pulse -->
    <template v-else-if="name === 'activity'">
      <path d="M3 12h4l3-9 4 18 3-9h4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </template>

    <!-- Volcano (hourglass-like) -->
    <template v-else-if="name === 'hourglass'">
      <path d="M6 3h12M6 21h12" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
      <path d="M7 3c0 5 10 5 10 10S7 13 7 21M17 3c0 5-10 5-10 10s10 0 10 8" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
    </template>

    <!-- Wave / accelerometer -->
    <template v-else-if="name === 'waveform'">
      <path d="M3 12h2l2-6 3 12 3-9 2 5 2-3h4" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </template>

    <!-- Book -->
    <template v-else-if="name === 'book'">
      <path d="M4 4h10a4 4 0 0 1 4 4v12H8a4 4 0 0 1-4-4V4Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
      <path d="M4 16a4 4 0 0 1 4-4h10" stroke="currentColor" :stroke-width="strokeWidth" />
    </template>

    <!-- Telescope / planetary -->
    <template v-else-if="name === 'telescope'">
      <path d="m3 14 6-2 8-7 4 4-7 8-2 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
      <path d="m12 9 3 3M5 19l3-3" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
    </template>

    <!-- Map / geospatial -->
    <template v-else-if="name === 'map'">
      <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
      <path d="M9 4v14M15 6v14" stroke="currentColor" :stroke-width="strokeWidth" />
    </template>

    <!-- Building / institutional -->
    <template v-else-if="name === 'building'">
      <rect x="4" y="3" width="16" height="18" rx="1.5" stroke="currentColor" :stroke-width="strokeWidth" />
      <path d="M9 8h2M13 8h2M9 12h2M13 12h2M9 16h2M13 16h2" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
    </template>

    <!-- Users / population -->
    <template v-else-if="name === 'users'">
      <circle cx="9" cy="8" r="3.5" stroke="currentColor" :stroke-width="strokeWidth" />
      <path d="M2.5 20c.5-3.5 3.3-5.5 6.5-5.5s6 2 6.5 5.5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
      <circle cx="17" cy="9" r="2.5" stroke="currentColor" :stroke-width="strokeWidth" />
      <path d="M15.5 14.5c2.5.3 5 1.8 5.5 5" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
    </template>

    <!-- Scales / authority -->
    <template v-else-if="name === 'scales'">
      <path d="M12 3v18M5 21h14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
      <path d="M5 7h14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
      <path d="M5 7 2 14h6L5 7Zm14 0-3 7h6l-3-7Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
    </template>

    <!-- Sparkle -->
    <template v-else-if="name === 'sparkle'">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
    </template>

    <!-- Menu -->
    <template v-else-if="name === 'menu'">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
    </template>

    <!-- Download -->
    <template v-else-if="name === 'download'">
      <path d="M12 4v12m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </template>

    <!-- Pin / location -->
    <template v-else-if="name === 'pin'">
      <path d="M12 22s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" :stroke-width="strokeWidth" />
    </template>

    <!-- Mail -->
    <template v-else-if="name === 'mail'">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" :stroke-width="strokeWidth" />
      <path d="m3 7 9 7 9-7" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
    </template>

    <!-- Phone -->
    <template v-else-if="name === 'phone'">
      <path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2Z" stroke="currentColor" :stroke-width="strokeWidth" stroke-linejoin="round" />
    </template>

    <!-- Chevron right -->
    <template v-else-if="name === 'chevron-right'">
      <path d="m9 6 6 6-6 6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" stroke-linejoin="round" />
    </template>

    <!-- Social: facebook, twitter, instagram, linkedin, youtube (simple monoline) -->
    <template v-else-if="name === 'facebook'">
      <path d="M14 8h2V5h-2a3 3 0 0 0-3 3v2H9v3h2v7h3v-7h2.2l.3-3H14V8.5c0-.3.2-.5.5-.5Z" fill="currentColor" />
    </template>
    <template v-else-if="name === 'twitter'">
      <path d="M4 4h4l4 6 4-6h4l-6 8 6 8h-4l-4-6-4 6H4l6-8L4 4Z" fill="currentColor" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" :stroke-width="strokeWidth" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" :stroke-width="strokeWidth" />
      <circle cx="17" cy="7" r="0.9" fill="currentColor" />
    </template>
    <template v-else-if="name === 'linkedin'">
      <rect x="4" y="4" width="16" height="16" rx="2.5" stroke="currentColor" :stroke-width="strokeWidth" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 11v6" stroke="currentColor" :stroke-width="strokeWidth" stroke-linecap="round" />
    </template>
    <template v-else-if="name === 'youtube'">
      <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" :stroke-width="strokeWidth" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </template>
  </svg>
</template>
