<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const servizi = [
  {
    icon: 'i-heroicons-bolt',
    color: 'secondary' as const,
    title: 'Fisioterapia Sportiva',
    description: 'Recupero infortuni e ottimizzazione della performance per atleti.'
  },
  {
    icon: 'i-heroicons-hand-raised',
    color: 'primary' as const,
    title: 'Terapia Manuale',
    description: 'Tecniche per articolazioni e tessuti molli, mobilizzazione e manipolazione.'
  },
  {
    icon: 'i-heroicons-arrow-trending-up',
    color: 'secondary' as const,
    title: 'Riabilitazione Post-Chirurgica',
    description: 'Programmi mirati per il recupero funzionale dopo un intervento.'
  },
  {
    icon: 'i-heroicons-home-modern',
    color: 'primary' as const,
    title: 'Fisioterapia Domiciliare',
    description: 'Trattamenti a domicilio per chi ha difficoltà a spostarsi o preferisce il comfort di casa.'
  }
]

const { target, visible } = useScrollReveal()
</script>

<template>
  <UContainer id="servizi" class="scroll-mt-(--ui-header-height) py-20">
    <div
      ref="target"
      class="mx-auto mb-12 max-w-2xl space-y-3 text-center transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <AtomsSectionEyebrow color="primary" size="lg" as="h2">I nostri servizi</AtomsSectionEyebrow>
      <p class="text-muted">
        Percorsi di riabilitazione e prevenzione su misura per ogni esigenza.
      </p>
    </div>

    <div class="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <MoleculesServiceCard
        v-for="(s, i) in servizi"
        :key="s.title"
        :icon="s.icon"
        :color="s.color"
        :title="s.title"
        :description="s.description"
        :delay="i * 100"
      />
    </div>
  </UContainer>
</template>
