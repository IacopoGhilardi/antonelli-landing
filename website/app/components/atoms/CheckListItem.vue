<script setup lang="ts">
withDefaults(defineProps<{
  color?: 'primary' | 'secondary'
}>(), {
  color: 'secondary'
})

const colorClasses: Record<string, string> = {
  primary: 'text-primary',
  secondary: 'text-secondary'
}
</script>

<template>
  <li class="flex items-center gap-2 text-sm text-highlighted">
    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 shrink-0" :class="colorClasses[color]" />
    <slot />
  </li>
</template>
