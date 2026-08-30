<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: 'primary' | 'secondary' | 'neutral'
  size?: 'sm' | 'lg'
  as?: string
}>(), {
  color: 'primary',
  size: 'sm',
  as: 'span'
})

const colorClasses: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary',
  neutral: 'text-neutral-500'
}

const sizeClasses: Record<string, string> = {
  sm: 'text-xs font-bold tracking-wider uppercase',
  lg: 'text-2xl sm:text-3xl font-extrabold tracking-tight'
}
</script>

<template>
  <component
    :is="props.as"
    class="block"
    :class="[colorClasses[props.color], sizeClasses[props.size]]"
  >
    <slot />
  </component>
</template>
