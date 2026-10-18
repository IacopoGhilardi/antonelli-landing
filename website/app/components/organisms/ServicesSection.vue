<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'
import { serviziHome } from '~/utils/servizi'

const { target, visible } = useScrollReveal()
</script>

<template>
  <UContainer id="servizi" class="scroll-mt-(--ui-header-height) py-20">
    <div
      ref="target"
      class="mx-auto mb-12 max-w-2xl space-y-3 text-center transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <AtomsSectionEyebrow color="primary" size="lg" as="h2">I miei servizi</AtomsSectionEyebrow>
      <p class="text-muted">
        Valutazione e trattamento dei disordini muscolo-scheletrici secondo l'approccio OMPT,
        con percorsi costruiti sulla singola persona.
      </p>
    </div>

    <div class="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      <MoleculesServiceCard
        v-for="(s, i) in serviziHome"
        :key="s.slug"
        :icon="s.icon"
        :color="s.color"
        :title="s.title"
        :description="s.description"
        :delay="i * 100"
      />
    </div>

    <div class="mt-12 text-center">
      <UButton
        to="/servizi"
        color="primary"
        size="lg"
        trailing-icon="i-heroicons-arrow-right"
        class="rounded-full font-semibold"
      >
        Scopri di più sui servizi
      </UButton>
    </div>
  </UContainer>
</template>
