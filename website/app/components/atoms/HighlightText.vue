<script setup lang="ts">
const props = withDefaults(defineProps<{
  color?: 'primary' | 'secondary'
}>(), {
  color: 'primary'
})

const colorClasses: Record<string, string> = {
  primary: 'bg-primary text-white',
  secondary: 'bg-secondary text-white'
}
</script>

<template>
  <span class="inline px-1.5 rounded-md box-decoration-clone" :class="colorClasses[props.color]">
    <slot />
  </span>
</template>
