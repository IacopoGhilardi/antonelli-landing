<script setup lang="ts">
import { computed } from '#imports'
import { useScrollReveal } from '~/composables/useScrollReveal'

const props = defineProps<{
  faq: { domanda: string, risposta: string }[]
}>()

const items = computed(() =>
  props.faq.map(f => ({ label: f.domanda, content: f.risposta }))
)

const { target, visible } = useScrollReveal()
</script>

<template>
  <UContainer id="faq" class="scroll-mt-(--ui-header-height) py-20">
    <div
      ref="target"
      class="mx-auto max-w-3xl space-y-8 transition-all duration-700 ease-out"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <div class="space-y-3 text-center">
        <AtomsSectionEyebrow color="primary" size="lg" as="h2">Domande frequenti</AtomsSectionEyebrow>
        <p class="text-muted">
          Le domande che mi vengono poste più spesso su fisioterapia, sedute e primo appuntamento.
        </p>
      </div>

      <UAccordion :items="items" />
    </div>
  </UContainer>
</template>
