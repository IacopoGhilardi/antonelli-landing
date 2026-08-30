<script setup lang="ts">
import heroImage from '~/assets/images/hero-fisioterapia.jpg'
import { useScrollReveal } from '~/composables/useScrollReveal'

const { target, visible } = useScrollReveal()
</script>

<template>
  <section
    id="home"
    class="relative isolate flex min-h-[560px] items-center overflow-hidden scroll-mt-(--ui-header-height) sm:min-h-[640px]"
  >
    <img
      :src="heroImage"
      alt="Gianluca Antonelli durante una seduta di fisioterapia"
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
          <AtomsHighlightText color="primary">ritrova</AtomsHighlightText>
          <AtomsHighlightText color="primary">il benessere.</AtomsHighlightText>
        </h1>

        <p class="text-lg text-white/90">
          Terapie personalizzate, manuali e strumentali per il dolore e il recupero da infortuni.
        </p>

        <UButton
          label="Scopri i nostri servizi"
          to="#servizi"
          color="tertiary"
          size="xl"
          class="rounded-full font-semibold"
        />
      </div>
    </UContainer>
  </section>
</template>
