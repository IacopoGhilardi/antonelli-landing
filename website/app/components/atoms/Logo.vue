<script setup lang="ts">
import logoCompleto from '~/assets/images/logo.png'
import logoSigla from '~/assets/images/logo_no_name.png'

withDefaults(defineProps<{
  /** Su fondo scuro il logo viene reso in bianco */
  invertito?: boolean
}>(), {
  invertito: false
})

const alt = 'Gianluca Antonelli — Fisioterapista OMPT'
</script>

<template>
  <span class="flex shrink-0 items-center">
    <!-- Sotto i 640px resta la sola sigla: il lockup completo diventerebbe illeggibile -->
    <img
      :src="logoSigla"
      :alt="alt"
      width="432"
      height="221"
      class="h-9 w-auto sm:hidden"
      :class="invertito ? 'brightness-0 invert' : ''"
    >
    <img
      :src="logoCompleto"
      :alt="alt"
      width="1461"
      height="221"
      class="hidden h-9 w-auto sm:block"
      :class="invertito ? 'brightness-0 invert' : ''"
    >
  </span>
</template>
