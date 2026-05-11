import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options
  const elements = ref(new Set())
  let observer = null

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  onMounted(() => {
    if (prefersReducedMotion()) {
      elements.value.forEach(el => el.classList.add('revealed'))
      return
    }

    observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target
          const delay = el.dataset.revealDelay || 0
          setTimeout(() => el.classList.add('revealed'), delay)
          observer.unobserve(el)
        }
      })
    }, { threshold, rootMargin })

    elements.value.forEach(el => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  const addRef = (el) => {
    if (el) elements.value.add(el)
  }

  return { addRef }
}
