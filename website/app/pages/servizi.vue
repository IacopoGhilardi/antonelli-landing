<script setup lang="ts">
import { servizi } from '~/utils/servizi'
import { usePageSeo, useBreadcrumbSchema } from '~/composables/useSeo'

usePageSeo({
  title: 'Servizi di Fisioterapia a Pisa | Terapia Manuale e Riabilitazione',
  description:
    'Terapia manuale, esercizio terapeutico, riabilitazione post-chirurgica e sportiva, fisioterapia domiciliare e PWR!Moves® per il Parkinson. Fisioterapista OMPT a Pisa.'
})

useBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Servizi', path: '/servizi' }
])
</script>

<template>
  <div>
    <MoleculesPageHero
      eyebrow="I miei servizi"
      title="Servizi di fisioterapia a Pisa"
      subtitle="Valutazione, terapia manuale ed esercizio terapeutico secondo l'approccio OMPT, per il dolore muscolo-scheletrico e il recupero dopo un infortunio o un intervento. Studio a Ospedaletto (Pisa) e trattamenti a domicilio."
    />

    <UContainer class="py-16 sm:py-20">
      <div class="space-y-16">
        <section
          v-for="(s, i) in servizi"
          :id="s.slug"
          :key="s.slug"
          class="scroll-mt-(--ui-header-height) grid gap-8 md:grid-cols-[auto_1fr] md:gap-10"
        >
          <AtomsIconCircle :icon="s.icon" :color="s.color" size="lg" class="shadow-lg" />

          <div class="space-y-4">
            <h2 class="text-2xl font-bold text-highlighted">{{ s.title }}</h2>
            <p class="text-muted">{{ s.dettaglio }}</p>
            <ul class="grid gap-2 sm:grid-cols-2">
              <AtomsCheckListItem v-for="punto in s.punti" :key="punto" color="secondary">
                {{ punto }}
              </AtomsCheckListItem>
            </ul>
          </div>

          <USeparator v-if="i < servizi.length - 1" class="md:col-span-2" />
        </section>
      </div>

      <UCard class="mt-20 bg-primary-50 text-center ring-0">
        <div class="space-y-4 py-4">
          <h2 class="text-xl font-bold text-highlighted">Non sai quale percorso fa per te?</h2>
          <p class="mx-auto max-w-xl text-muted">
            Scrivimi o chiamami: parliamo del tuo problema e capiamo insieme qual è il primo passo giusto.
          </p>
          <UButton
            to="/contatti"
            color="tertiary"
            size="lg"
            class="rounded-full font-semibold"
            trailing-icon="i-heroicons-arrow-right"
          >
            Come posso aiutarti?
          </UButton>
        </div>
      </UCard>
    </UContainer>
  </div>
</template>
