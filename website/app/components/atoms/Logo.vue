<script setup lang="ts">
withDefaults(defineProps<{
  name?: string
}>(), {
  name: 'Gianluca Antonelli'
})
</script>

<template>
  <span class="flex items-center gap-2 shrink-0">
    <AtomsIconCircle icon="i-heroicons-heart" color="primary" size="sm" />
    <span class="font-bold text-lg text-highlighted leading-tight">{{ name }}</span>
  </span>
</template>
