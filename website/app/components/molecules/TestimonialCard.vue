<script setup lang="ts">
import { useScrollReveal } from '~/composables/useScrollReveal'

const props = withDefaults(defineProps<{
  quote: string
  name: string
  avatar?: string
  rating?: number
  delay?: number
}>(), {
  rating: 5,
  delay: 0
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
    <UCard class="bg-primary-50 text-left ring-0 dark:bg-primary-950/40">
      <div class="space-y-4">
        <p class="text-sm text-highlighted italic">"{{ quote }}"</p>
        <div class="flex items-center gap-3">
          <UAvatar :src="avatar" :alt="name" size="md" />
          <div>
            <p class="text-sm font-semibold text-highlighted">{{ name }}</p>
            <AtomsStarRating :rating="rating" />
          </div>
        </div>
      </div>
    </UCard>
  </div>
</template>
