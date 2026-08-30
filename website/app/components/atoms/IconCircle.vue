<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
  size?: 'sm' | 'md' | 'lg'
}>(), {
  color: 'primary',
  size: 'md'
})

const sizeClasses: Record<string, string> = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-20 h-20'
}

const iconSizeClasses: Record<string, string> = {
  sm: 'w-5 h-5',
  md: 'w-7 h-7',
  lg: 'w-10 h-10'
}

const colorClasses: Record<string, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white',
  success: 'bg-success text-white',
  warning: 'bg-warning text-white',
  error: 'bg-error text-white',
  neutral: 'bg-neutral-500 text-white'
}
</script>

<template>
  <span
    class="inline-flex items-center justify-center rounded-full shrink-0"
    :class="[sizeClasses[props.size], colorClasses[props.color]]"
  >
    <UIcon :name="props.icon" :class="iconSizeClasses[props.size]" />
  </span>
</template>
