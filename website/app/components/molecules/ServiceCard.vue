<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const props = withDefaults(defineProps<{
  icon: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
  title: string
  description: string
  delay?: number
}>(), {
  color: 'primary',
  delay: 0
})

const { target, visible } = useScrollReveal()
</script>

<template>
  <div
    ref="target"
    class="relative pt-8 transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    :style="{ transitionDelay: `${props.delay}ms` }"
  >
    <div class="absolute top-0 left-1/2 z-10 -translate-x-1/2">
      <AtomsIconCircle
        :icon="icon"
        :color="color"
        size="lg"
        class="ring-4 ring-white shadow-lg dark:ring-neutral-900"
      />
    </div>

    <UCard
      class="h-full pt-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      :ui="{ body: 'flex flex-col items-center gap-2' }"
    >
      <h3 class="text-lg font-semibold text-highlighted">{{ title }}</h3>
      <p class="text-sm text-muted">{{ description }}</p>
    </UCard>
  </div>
</template>
