<script setup>
import { ref } from 'vue'
import SectionHeading from '@/components/molecules/SectionHeading.vue'
import { faq } from '@/data/siteContent.js'

const openIndex = ref(-1)

function toggle(i) {
  openIndex.value = openIndex.value === i ? -1 : i
}

// JS-based height animation for perfectly smooth accordion
function onEnter(el) {
  el.style.height = '0'
  el.style.overflow = 'hidden'
  el.style.opacity = '0'
  el.offsetHeight // force reflow
  el.style.transition = 'height 0.38s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease'
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
}
function onAfterEnter(el) {
  el.style.height = 'auto'
  el.style.overflow = ''
  el.style.transition = ''
}
function onLeave(el) {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
  el.offsetHeight // force reflow
  el.style.transition = 'height 0.28s cubic-bezier(0.4,0,0.2,1), opacity 0.22s ease'
  el.style.height = '0'
  el.style.opacity = '0'
}
function onAfterLeave(el) {
  el.style.transition = ''
  el.style.opacity = ''
}
</script>

<template>
  <section id="faq" class="py-20 lg:py-28">
    <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
      <div data-animate class="animate-fade-up">
        <SectionHeading
          :eyebrow="faq.eyebrow"
          :title="faq.title"
        />
      </div>

      <!-- 2-column grid on md+ -->
      <div class="mt-12 grid md:grid-cols-2 md:gap-x-10">
        <!-- Left column: items 0,1,2,3,4 -->
        <div class="divide-y divide-ink-100">
          <div
            v-for="(item, i) in faq.items.slice(0, 5)"
            :key="i"
            data-animate
            :data-animate-delay="i * 80"
            class="animate-fade-up"
          >
            <button
              @click="toggle(i)"
              class="w-full flex items-center justify-between py-5 text-left gap-4 group"
            >
              <span class="text-sm font-semibold text-ink-900 group-hover:text-brand-700 transition-colors duration-200">
                {{ i + 1 }}. {{ item.question }}
              </span>
              <svg
                class="w-5 h-5 shrink-0 text-ink-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-brand-700': openIndex === i }"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <Transition @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave">
              <div v-if="openIndex === i">
                <p class="pb-5 text-sm text-ink-500 leading-relaxed md:pl-4">{{ item.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <!-- Right column: items 5,6,7,8,9 -->
        <div class="divide-y divide-ink-100">
          <div
            v-for="(item, i) in faq.items.slice(5)"
            :key="i + 5"
            data-animate
            :data-animate-delay="(i + 5) * 80"
            class="animate-fade-up"
          >
            <button
              @click="toggle(i + 5)"
              class="w-full flex items-center justify-between py-5 text-left gap-4 group"
            >
              <span class="text-sm font-semibold text-ink-900 group-hover:text-brand-700 transition-colors duration-200">
                {{ i + 6 }}. {{ item.question }}
              </span>
              <svg
                class="w-5 h-5 shrink-0 text-ink-400 transition-transform duration-300"
                :class="{ 'rotate-180 text-brand-700': openIndex === i + 5 }"
                fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
              >
                <path d="M19 9l-7 7-7-7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <Transition @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave">
              <div v-if="openIndex === i + 5">
                <p class="pb-5 text-sm text-ink-500 leading-relaxed md:pl-4">{{ item.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
