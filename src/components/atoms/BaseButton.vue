<script setup>
defineProps({
  variant: { type: String, default: 'primary' }, // primary | outline | ghost | white-outline
  size: { type: String, default: 'md' }, // sm | md | lg
  type: { type: String, default: 'button' },
  as: { type: String, default: 'button' },
  href: { type: String, default: undefined },
})

const variants = {
  primary: 'bg-brand-700 text-white hover:bg-brand-800 shadow-[0_8px_24px_-12px_rgba(10,24,179,0.6)]',
  outline: 'border border-brand-700 text-brand-700 hover:bg-brand-50',
  ghost: 'text-brand-700 hover:bg-brand-50',
  'white-outline': 'border border-white/80 text-white hover:bg-white/10',
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}
</script>

<template>
  <component
    :is="as === 'a' || href ? 'a' : 'button'"
    :type="as === 'a' || href ? undefined : type"
    :href="href"
    :class="[
      'inline-flex items-center justify-center gap-2 px-4 rounded-full font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50',
      variants[variant],
      sizes[size],
    ]"
  >
    <slot />
  </component>
</template>
