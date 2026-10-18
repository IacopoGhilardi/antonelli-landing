<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { whatsappUrl } from '~/utils/site'

const items: NavigationMenuItem[] = [
  { label: 'Home', to: '/#home' },
  { label: 'Servizi', to: '/#servizi' },
  { label: 'Chi sono', to: '/#chi-sono' },
  { label: 'Contatti', to: '/contatti' }
]
</script>

<template>
  <UHeader mode="slideover" :ui="{ left: 'flex-1', center: 'flex-1 justify-center', right: 'flex-1' }">
    <template #title>
      <AtomsLogo />
    </template>

    <UNavigationMenu :items="items" variant="link" />

    <template #right>
      <UButton
        :to="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#1EBE5A] sm:inline-flex"
      >
        <AtomsWhatsAppIcon class="h-5 w-5" />
        Scrivimi su WhatsApp
      </UButton>
    </template>

    <template #body>
      <UNavigationMenu :items="items" variant="link" orientation="vertical" class="-mx-2.5" />
      <UButton
        :to="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        block
        class="mt-4 rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#1EBE5A]"
      >
        <AtomsWhatsAppIcon class="h-5 w-5" />
        Scrivimi su WhatsApp
      </UButton>
    </template>
  </UHeader>
</template>
