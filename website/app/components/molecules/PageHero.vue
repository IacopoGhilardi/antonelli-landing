<script setup lang="ts">
defineProps<{
  eyebrow: string
  title: string
  subtitle?: string
}>()
</script>

<template>
  <section class="bg-primary-900 py-16 text-white sm:py-20">
    <UContainer class="max-w-3xl space-y-4">
      <AtomsSectionEyebrow color="secondary">{{ eyebrow }}</AtomsSectionEyebrow>
      <h1 class="text-3xl font-extrabold leading-tight sm:text-4xl">{{ title }}</h1>
      <p v-if="subtitle" class="text-lg text-primary-100">{{ subtitle }}</p>
    </UContainer>
  </section>
</template>
