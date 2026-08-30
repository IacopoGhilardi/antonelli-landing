<script setup lang="ts">
import { computed } from '#imports'

const props = withDefaults(defineProps<{
  rating?: number
  max?: number
  size?: 'sm' | 'md'
}>(), {
  rating: 5,
  max: 5,
  size: 'sm'
})

const stars = computed(() => Array.from({ length: props.max }, (_, i) => i < props.rating))

const iconSizeClasses: Record<string, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5'
}
</script>

<template>
  <div class="flex items-center gap-0.5" role="img" :aria-label="`${props.rating} su ${props.max} stelle`">
    <UIcon
      v-for="(filled, i) in stars"
      :key="i"
      :name="filled ? 'i-heroicons-star-solid' : 'i-heroicons-star'"
      class="text-warning"
      :class="iconSizeClasses[props.size]"
    />
  </div>
</template>
