import { onMounted, onUnmounted, ref } from '#imports'

type RevealTarget = HTMLElement | { $el: HTMLElement } | null

export function useScrollReveal(options?: { threshold?: number; rootMargin?: string }) {
  const target = ref<RevealTarget>(null)
  const visible = ref(false)

  let observer: IntersectionObserver | null = null

  onMounted(() => {
    const el = target.value instanceof HTMLElement ? target.value : target.value?.$el
    if (!(el instanceof HTMLElement)) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      visible.value = true
      return
    }

    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          visible.value = true
          observer?.disconnect()
        }
      },
      { threshold: options?.threshold ?? 0.15, rootMargin: options?.rootMargin ?? '0px' }
    )
    observer.observe(el)
  })

  onUnmounted(() => observer?.disconnect())

  return { target, visible }
}
