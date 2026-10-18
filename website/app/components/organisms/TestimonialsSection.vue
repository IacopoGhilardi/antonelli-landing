<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
import { recensioniGoogle } from '~/utils/recensioni'

const { profiloUrl, mediaVoto, totaleRecensioni, recensioni } = recensioniGoogle

const { target, visible } = useScrollReveal()
</script>

<template>
  <div v-if="recensioni.length" class="bg-neutral-50 pb-20">
    <UContainer
      ref="target"
      class="space-y-10 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="space-y-5 text-center">
        <h2 class="text-2xl font-bold text-highlighted">
          Cosa dicono i miei pazienti
        </h2>
      </div>

      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <MoleculesTestimonialCard
          v-for="(r, i) in recensioni"
          :key="r.nome + r.data"
          :nome="r.nome"
          :testo="r.testo"
          :rating="r.rating"
          :data="r.data"
          :delay="i * 100"
        />
      </div>
    </UContainer>
  </div>
</template>
