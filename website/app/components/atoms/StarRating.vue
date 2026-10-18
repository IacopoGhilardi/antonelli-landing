<script setup lang="ts">
import { computed } from '#imports'

const props = withDefaults(defineProps<{
  /** Supporta valori decimali, es. 4.7 */
  rating?: number
  max?: number
  size?: 'sm' | 'md' | 'lg'
}>(), {
  rating: 5,
  max: 5,
  size: 'sm'
})

/** Percentuale di riempimento di ogni stella (gestisce anche le mezze stelle) */
const stars = computed(() =>
  Array.from({ length: props.max }, (_, i) =>
    Math.round(Math.min(Math.max(props.rating - i, 0), 1) * 100)
  )
)

const sizeClasses: Record<string, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6'
}

const label = computed(() => `${props.rating} su ${props.max} stelle`)
</script>

<template>
  <div class="flex items-center gap-0.5" role="img" :aria-label="label">
    <span
      v-for="(fill, i) in stars"
      :key="i"
      class="relative inline-block shrink-0"
      :class="sizeClasses[props.size]"
    >
      <UIcon
        name="i-heroicons-star-solid"
        class="absolute inset-0 h-full w-full text-neutral-300"
      />
      <span
        class="absolute inset-0 overflow-hidden"
        :style="{ width: `${fill}%` }"
      >
        <UIcon
          name="i-heroicons-star-solid"
          class="h-full text-[#FBBC04]"
          :class="sizeClasses[props.size]"
        />
      </span>
    </span>
  </div>
</template>
