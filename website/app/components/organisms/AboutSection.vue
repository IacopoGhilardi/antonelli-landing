<script setup lang="ts">
import aboutImage from '~/assets/images/gianluca-antonelli.jpg'
import { useScrollReveal } from '~/composables/useScrollReveal'

const bullets = [
  'Master OMPT riconosciuto IFOMPT (Savona, 2024)',
  'Laurea in Fisioterapia — Università di Firenze',
  'Terapista certificato PWR!Moves® dal 2021',
  'Trattamenti in studio e a domicilio'
]

const { target, visible } = useScrollReveal()
</script>

<template>
  <div id="chi-sono" class="scroll-mt-(--ui-header-height) bg-neutral-50 py-20">
    <UContainer
      ref="target"
      class="grid items-center gap-12 transition-all duration-700 ease-out md:grid-cols-2"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <img
        :src="aboutImage"
        alt="Gianluca Antonelli, fisioterapista OMPT a Pisa"
        width="1000"
        height="666"
        loading="lazy"
        decoding="async"
        class="mx-auto aspect-4/5 w-full max-w-sm rounded-2xl object-cover shadow-lg"
      >

      <div class="space-y-4">
        <AtomsSectionEyebrow color="primary">Chi sono</AtomsSectionEyebrow>
        <h2 class="text-2xl font-bold text-highlighted">
          Gianluca Antonelli, Fisioterapista OMPT
        </h2>
        <p class="text-muted">
          Sono un fisioterapista specializzato nella valutazione e nel trattamento dei disordini
          muscolo-scheletrici. Dopo la laurea a Firenze ho conseguito il Master OMPT a Savona, un titolo
          riconosciuto a livello internazionale da IFOMPT.
        </p>
        <p class="text-muted">
          Lavoro integrando terapia manuale ed esercizio terapeutico, sempre a partire da un ragionamento
          clinico basato sulle evidenze. Ogni percorso parte da una valutazione approfondita e da obiettivi
          decisi insieme: il mio compito è farti capire cosa sta succedendo e rimetterti in movimento.
        </p>
        <ul class="space-y-2">
          <AtomsCheckListItem v-for="item in bullets" :key="item" color="secondary">
            {{ item }}
          </AtomsCheckListItem>
        </ul>
        <UButton to="/chi-sono" color="primary" trailing-icon="i-heroicons-arrow-right">
          Scopri il mio percorso
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
