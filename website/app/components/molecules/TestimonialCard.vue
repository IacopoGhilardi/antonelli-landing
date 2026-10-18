<script setup lang="ts">
import { computed, ref } from '#imports'
import { useScrollReveal } from '~/composables/useScrollReveal'

const props = withDefaults(defineProps<{
  nome: string
  testo: string
  rating?: number
  /** Data ISO della recensione */
  data?: string
  delay?: number
}>(), {
  rating: 5,
  delay: 0
})

const SOGLIA_TRONCAMENTO = 180

const espansa = ref(false)
const troncabile = computed(() => props.testo.length > SOGLIA_TRONCAMENTO)

const iniziali = computed(() =>
  props.nome
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? '')
    .join('')
)

/** Colore avatar derivato dal nome, come fa Google quando manca la foto */
const coloreAvatar = computed(() => {
  const palette = ['#1A73E8', '#D93025', '#188038', '#E37400', '#9334E6', '#007B83']
  const somma = [...props.nome].reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return palette[somma % palette.length]
})

/**
 * Accetta sia una data ISO (la calcola in forma relativa) sia un'etichetta
 * già pronta copiata da Google, tipo "11 mesi fa".
 */
const dataRelativa = computed(() => {
  if (!props.data) return ''

  const timestamp = Date.parse(props.data)
  if (Number.isNaN(timestamp)) return props.data

  const giorni = Math.floor((Date.now() - timestamp) / 86_400_000)
  if (giorni < 0) return ''
  if (giorni < 7) return 'questa settimana'
  if (giorni < 30) return `${Math.floor(giorni / 7)} settimane fa`
  const mesi = Math.floor(giorni / 30)
  if (mesi < 12) return `${mesi} ${mesi === 1 ? 'mese' : 'mesi'} fa`
  const anni = Math.floor(mesi / 12)
  return `${anni} ${anni === 1 ? 'anno' : 'anni'} fa`
})

const { target, visible } = useScrollReveal()
</script>

<template>
  <div
    ref="target"
    class="transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <UCard
      class="h-full bg-white text-left shadow-sm ring-1 ring-neutral-200"
      :ui="{ body: 'flex h-full flex-col gap-3' }"
    >
      <!-- Intestazione: autore + logo Google -->
      <div class="flex items-center gap-3">
        <span
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
          :style="{ backgroundColor: coloreAvatar }"
          aria-hidden="true"
        >{{ iniziali }}</span>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-highlighted">{{ nome }}</p>
          <p v-if="dataRelativa" class="text-xs text-muted">{{ dataRelativa }}</p>
        </div>

        <AtomsGoogleLogo class="h-5 w-5" />
      </div>

      <AtomsStarRating :rating="rating" />

      <p
        class="text-sm leading-relaxed text-muted"
        :class="!espansa && troncabile ? 'line-clamp-4' : ''"
      >
        {{ testo }}
      </p>

      <button
        v-if="troncabile"
        type="button"
        class="w-fit text-sm font-medium text-primary hover:underline"
        @click="espansa = !espansa"
      >
        {{ espansa ? 'Riduci' : 'Altro' }}
      </button>
    </UCard>
  </div>
</template>
