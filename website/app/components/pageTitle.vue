<template>
  <div class="text-center space-y-3 mb-16">
    <h1 class="text-5xl font-bold text-gray-900 dark:text-white">
      {{ title }}
    </h1>
    <p v-if="subtitle != null" class="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  title: String,
  subtitle: String
})
</script>