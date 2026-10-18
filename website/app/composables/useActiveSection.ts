import { onMounted, onUnmounted, ref, watch } from '#imports'
import { useRoute } from '#app'

/**
 * Restituisce l'id della sezione attualmente in lettura.
 * Gli id vanno passati nell'ordine in cui compaiono nel documento.
 * Fuori dalla home restituisce stringa vuota: lì non c'è nulla da seguire.
 */
export function useActiveSection(ids: string[]) {
  const route = useRoute()
  const active = ref('')

  let frame = 0

  function compute() {
    frame = 0

    if (route.path !== '/') {
      active.value = ''
      return
    }

    // Una sezione diventa attiva quando supera il terzo superiore dello
    // schermo: è lì che cade lo sguardo, non sul bordo in alto.
    const soglia = window.innerHeight * 0.35
    let corrente = ''

    for (const id of ids) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= soglia) corrente = id
    }

    // In fondo alla pagina l'ultima sezione resta attiva anche se il suo
    // inizio è ormai lontano sopra la soglia.
    const fondo = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
    if (fondo) corrente = ids[ids.length - 1] ?? corrente

    active.value = corrente
  }

  function onScroll() {
    if (frame) return
    frame = requestAnimationFrame(compute)
  }

  onMounted(() => {
    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
  })

  onUnmounted(() => {
    if (frame) cancelAnimationFrame(frame)
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
  })

  watch(() => route.path, () => {
    // Al cambio pagina il layout non è ancora assestato
    requestAnimationFrame(compute)
  })

  return active
}
