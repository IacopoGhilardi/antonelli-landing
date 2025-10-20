<template>
  <section class="relative isolate overflow-hidden py-24">
    <!-- Sfondo gradiente a tutta larghezza -->
    <div
        class="absolute inset-0 -z-10 w-full h-full bg-gradient-to-r from-primary/20 via-white to-primary/10 dark:from-primary/10 dark:via-gray-900 dark:to-primary/5"
    ></div>

    <!-- Contenuto -->
    <UContainer class="relative text-center space-y-3">
      <h1
          class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-blue-400"
      >
        {{ title }}
      </h1>

      <p
          v-if="subtitle"
          class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        {{ subtitle }}
      </p>
    </UContainer>
  </section>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String
})
</script>
