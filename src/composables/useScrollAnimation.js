import { onMounted, onUnmounted } from 'vue'

/**
 * Composable para animaciones al hacer scroll.
 * Usa IntersectionObserver para detectar cuando los elementos
 * con [data-animate] entran al viewport.
 *
 * Clases:
 *   data-animate           → marca el elemento para observar
 *   data-animate-delay="N" → delay en ms (opcional)
 *   .is-visible            → se agrega al entrar al viewport
 *
 * Usa MutationObserver para detectar nuevos [data-animate]
 * que se agregan dinámicamente (componentes async).
 */
export function useScrollAnimation() {
  let io = null
  let mo = null

  function observe(el) {
    if (!el.dataset._observed) {
      el.dataset._observed = '1'
      io.observe(el)
    }
  }

  onMounted(() => {
    io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target
            const delay = Number(el.dataset.animateDelay || 0)
            setTimeout(() => el.classList.add('is-visible'), delay)
            io.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    )

    // Observe all current [data-animate] elements
    document.querySelectorAll('[data-animate]').forEach(observe)

    // Watch for new [data-animate] added by async components
    mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node.nodeType !== 1) return
          if (node.hasAttribute && node.hasAttribute('data-animate')) observe(node)
          if (node.querySelectorAll) {
            node.querySelectorAll('[data-animate]').forEach(observe)
          }
        })
      })
    })
    mo.observe(document.body, { childList: true, subtree: true })
  })

  onUnmounted(() => {
    if (io) io.disconnect()
    if (mo) mo.disconnect()
  })
}
