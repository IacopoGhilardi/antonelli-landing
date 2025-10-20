<template>
  <div
      class="flex flex-col items-center justify-center text-center bg-blue-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all"
  >
    <UIcon :name="icon" class="w-12 h-12 text-blue-500 mb-4" />
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
      {{ title }}
    </h3>

    <p class="text-gray-700 dark:text-gray-300 mt-2 whitespace-pre-line">
      {{ description }}
    </p>

    <p v-if="details" class="text-gray-900 dark:text-gray-200 font-medium mt-2">
      {{ details }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
  details: String
})
</script>
