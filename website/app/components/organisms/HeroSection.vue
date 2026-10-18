<script setup lang="ts">
import heroImage from '~/assets/images/hero-fisioterapia.jpg'
import { useScrollReveal } from '~/composables/useScrollReveal'
import HighlightText from '../atoms/HighlightText.vue';

const { target, visible } = useScrollReveal()
</script>

<template>
  <section
    id="home"
    class="relative isolate flex min-h-[560px] items-center overflow-hidden scroll-mt-(--ui-header-height) sm:min-h-[640px]"
  >
    <img
      :src="heroImage"
      alt="Gianluca Antonelli, fisioterapista OMPT a Pisa, durante una seduta di terapia manuale"
      width="1920"
      height="1280"
      fetchpriority="high"
      decoding="async"
      class="absolute inset-0 h-full w-full object-cover"
    >
    <div class="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-primary-950/30" />

    <UContainer class="relative z-10 py-20">
      <div
        ref="target"
        class="max-w-xl space-y-6 text-white transition-all duration-700 ease-out"
        :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <h1 class="text-4xl font-extrabold leading-tight sm:text-5xl">
          Riabilita il tuo movimento,
          <HighlightText color="primary">ritrova</HighlightText>
          <HighlightText color="primary">il benessere.</HighlightText>
        </h1>

        <p class="text-lg text-white/90">
          Valutazione e trattamento dei disordini muscolo-scheletrici a Pisa e in Toscana: terapia
          manuale ed esercizio terapeutico per il dolore e il recupero dagli infortuni, in studio e a domicilio.
        </p>

        <UButton
          label="Scopri i miei servizi"
          to="#servizi"
          color="tertiary"
          size="xl"
          class="rounded-full font-semibold"
        />
      </div>
    </UContainer>
  </section>
</template>
