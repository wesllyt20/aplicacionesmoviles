<script setup>
defineProps({
  store: { type: String, required: true }, // 'google' | 'apple'
  href: { type: String, default: '#' },
  variant: { type: String, default: 'dark' }, // 'dark' | 'white'
})
</script>

<template>
  <a :href="href" target="_blank" rel="noopener"
    :aria-label="store === 'google' ? 'Descargar en Google Play' : 'Descargar en App Store'"
    class="inline-flex items-center  rounded-2xl px-4 py-1.5 h- transition-all duration-200 hover:-translate-y-0.5 select-none  w-auto sm:w-52.25  h-fit sm:h-14.25"
    :class="variant === 'white'
      ? 'bg-white text-ink-900 border border-ink-200 shadow-sm hover:shadow-md'
      : 'bg-black/30 text-white border border-white/30 backdrop-blur-sm hover:bg-black/40'">
    <!-- Google Play icon -->
    <svg v-if="store === 'google'" class="w-8 h-8 shrink-0" viewBox="0 0 29 33" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M27.5967 13.9407L22.042 10.7324L16.3553 16.4191L22.0416 22.1054L27.6156 18.8865C28.4848 18.3584 29.0034 17.4359 29.0034 16.4191C29.0034 15.4023 28.4844 14.4798 27.5967 13.9407Z"
        fill="#FFCE00" />
      <path
        d="M16.3553 16.4193L0.86592 0.818359C0.32718 1.3571 0 2.08813 0 2.89624V29.8947C0 30.7028 0.32718 31.4339 0.86592 31.973L16.3553 16.4193Z"
        fill="url(#paint0_linear_3924_2290)" />
      <path
        d="M16.3556 16.4194L22.0423 10.7327L22.0513 10.7237L14.4319 6.33666L4.3877 0.433477C3.48324 -0.124533 2.38649 -0.143803 1.46276 0.375667C1.2512 0.510147 1.0585 0.645037 0.866211 0.818057L16.3556 16.4194Z"
        fill="#00F076" />
      <path
        d="M0.866211 31.9728C1.0585 32.1458 1.2512 32.2807 1.46276 32.4152C1.92442 32.6653 2.40576 32.8002 2.88669 32.8002C3.40616 32.8002 3.90636 32.6464 4.36843 32.377L14.4315 26.5022L22.0509 22.1152L22.0419 22.1061L16.3556 16.4194L0.866211 31.9728Z"
        fill="#F63448" />
      <defs>
        <linearGradient id="paint0_linear_3924_2290" x1="-6.92244" y1="24.1843" x2="8.65469" y2="8.60672"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#00E2FF" />
          <stop offset="1" stop-color="#00C5FF" />
        </linearGradient>
      </defs>
    </svg>

    <!-- Apple icon -->
    <svg v-else class="w-8 h-8 shrink-0" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg"
      :fill="variant === 'white' ? '#000' : '#fff'">
      <g clip-path="url(#clip0_3924_2280)">
        <path
          d="M24.2352 0C24.3166 0 24.3981 0 24.4841 0C24.6839 2.46827 23.7418 4.31256 22.5968 5.64814C21.4733 6.97449 19.9349 8.26088 17.4466 8.06569C17.2806 5.63277 18.2243 3.92526 19.3678 2.59276C20.4282 1.35094 22.3724 0.245905 24.2352 0Z"
          fill="#222222" />
        <path
          d="M31.7676 25.691C31.7676 25.7156 31.7676 25.7371 31.7676 25.7601C31.0683 27.878 30.0709 29.6931 28.8537 31.3775C27.7425 32.9067 26.3808 34.9647 23.9494 34.9647C21.8484 34.9647 20.4529 33.6137 18.2997 33.5768C16.022 33.54 14.7694 34.7065 12.6869 35C12.4487 35 12.2105 35 11.9769 35C10.4476 34.7787 9.21351 33.5676 8.31442 32.4764C5.66325 29.252 3.61455 25.087 3.2334 19.757C3.2334 19.2344 3.2334 18.7134 3.2334 18.1909C3.39477 14.3763 5.24828 11.2748 7.71195 9.77168C9.01217 8.97248 10.7996 8.29163 12.7899 8.59594C13.6429 8.72812 14.5143 9.02013 15.2781 9.30907C16.002 9.58725 16.9073 10.0806 17.7649 10.0545C18.3458 10.0376 18.9237 9.73479 19.5093 9.52116C21.2244 8.90179 22.9058 8.19173 25.122 8.52524C27.7855 8.92791 29.6759 10.1113 30.8439 11.9372C28.5908 13.3711 26.8096 15.532 27.1139 19.2221C27.3844 22.5741 29.3332 24.5352 31.7676 25.691Z"
          fill="#222222" />
      </g>
      <defs>
        <clipPath id="clip0_3924_2280">
          <rect width="35" height="35" fill="white" />
        </clipPath>
      </defs>
    </svg>

    <div class="leading-tight px-3">
      <template v-if="store === 'google'">
        <span class="block text-[10px]  tracking-wider "
          :class="variant === 'white' ? 'text-ink-500' : 'text-white/70'">Disponible en</span>
        <span class="block text-sm font-medium">Google Play</span>
      </template>
      <template v-else>
        <span class="block text-[10px]  tracking-wider"
          :class="variant === 'white' ? 'text-ink-500' : 'text-white/70'">Disponible en</span>
        <span class="block text-sm font-medium">App Store</span>
      </template>
    </div>
  </a>
</template>
