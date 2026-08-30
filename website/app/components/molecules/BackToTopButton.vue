<script setup lang="ts">
import { onMounted, onUnmounted, ref } from '#imports'

const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-4 scale-90"
    enter-to-class="opacity-100 translate-y-0 scale-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0 scale-100"
    leave-to-class="opacity-0 translate-y-4 scale-90"
  >
    <UButton
      v-if="visible"
      icon="i-heroicons-arrow-up"
      color="primary"
      variant="solid"
      size="lg"
      class="fixed bottom-6 right-6 z-50 rounded-full shadow-lg"
      square
      aria-label="Torna in cima"
      @click="scrollToTop"
    />
  </Transition>
</template>
