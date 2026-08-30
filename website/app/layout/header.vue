<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '#home' },
  { label: 'Servizi', to: '#servizi' },
  { label: 'Chi sono', to: '#chi-sono' },
  { label: 'Contatti', to: '#contatti' }
]
</script>

<template>
  <UHeader mode="slideover" :ui="{ left: 'flex-1', center: 'flex-1 justify-center', right: 'flex-1' }">
    <template #title>
      <AtomsLogo />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton
        label="Prenota ora"
        to="#contatti"
        color="tertiary"
        variant="solid"
        class="rounded-full font-semibold hidden sm:inline-flex"
      />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
      <UButton
        label="Prenota ora"
        to="#contatti"
        color="tertiary"
        variant="solid"
        block
        class="rounded-full font-semibold mt-4"
      />
    </template>
  </UHeader>
</template>
