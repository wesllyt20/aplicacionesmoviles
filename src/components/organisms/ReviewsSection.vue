<script setup>
import { ref, computed } from 'vue'
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import ReviewCard from '@/components/molecules/ReviewCard.vue'
import { reviews } from '@/data/siteContent.js'

const PER_PAGE = 3
const currentPage = ref(0)
const totalPages = computed(() => Math.ceil(reviews.items.length / PER_PAGE))
const pageReviews = computed(() =>
  reviews.items.slice(currentPage.value * PER_PAGE, (currentPage.value + 1) * PER_PAGE)
)

function prev() {
  if (currentPage.value > 0) currentPage.value--
}
function next() {
  if (currentPage.value < totalPages.value - 1) currentPage.value++
}
function goTo(page) {
  currentPage.value = page
}

// ── Touch / swipe ──────────────────────────────────────────
const touchStartX = ref(0)

function onTouchStart(e) {
  touchStartX.value = e.touches[0].clientX
}

function onTouchEnd(e) {
  const delta = touchStartX.value - e.changedTouches[0].clientX
  if (Math.abs(delta) < 40) return   // ignore tiny taps
  if (delta > 0) next()
  else prev()
}
</script>

<template>
  <section id="reviews" class="py-5 lg:py-2">
    <div class="max-w-400 mx-auto px-6 lg:px-10">
      <div data-animate class="animate-fade-up text-center">
        <SectionHeading :eyebrow="reviews.eyebrow" />
        <h2 class="text-2xl md:text-3xl text-[#0F00DB] tracking-tight font-normal">
          Descubre la
          <span class="text-[#0F00DB] font-semibold italic">
            experiencia de los usuarios
          </span>
          con #IGP
        </h2>
      </div>

      <!-- ── DESKTOP: all reviews in 4-column masonry layout ── -->
      <div class="hidden lg:block mt-10 columns-4 gap-5" data-animate data-animate-delay="100">
        <ReviewCard v-for="review in reviews.items" :key="review.name" :name="review.name" :source="review.source"
          :comment="review.comment" :color="review.color" />
      </div>

      <!-- ── MOBILE: paginated carousel ── -->
      <div class="lg:hidden max-w-2xl mx-auto mt-10"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd">
        <Transition name="slide-fade" mode="out-in">
          <div :key="currentPage" class="flex flex-col gap-4">
            <ReviewCard v-for="review in pageReviews" :key="review.name" :name="review.name" :source="review.source"
              :comment="review.comment" :color="review.color" />
          </div>
        </Transition>

        <!-- Navigation row -->
        <div class="mt-8 flex items-center justify-between">
          <button @click="prev" :disabled="currentPage === 0"
            class="p-2 rounded-full border border-ink-200 text-ink-500 hover:text-ink-900 hover:border-ink-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Anterior">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <div class="flex items-center gap-2">
            <button v-for="i in totalPages" :key="i" @click="goTo(i - 1)" :aria-label="`Página ${i}`"
              class="h-2 rounded-full transition-all duration-300"
              :class="currentPage === i - 1 ? 'w-6 bg-brand-700' : 'w-2 bg-ink-200 hover:bg-ink-400'" />
          </div>

          <button @click="next" :disabled="currentPage === totalPages - 1"
            class="p-2 rounded-full border border-ink-200 text-ink-500 hover:text-ink-900 hover:border-ink-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Siguiente">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
