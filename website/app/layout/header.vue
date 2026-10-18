<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { computed } from '#imports'
import { useRoute } from '#app'
import { whatsappUrl } from '~/utils/site'
import { useActiveSection } from '~/composables/useActiveSection'

const route = useRoute()

// Senza questo, Nuxt UI segna come attive tutte le voci con ancora
// (stesso percorso della home) e Contatti non si illumina mai.
const sezioneAttiva = useActiveSection(['home', 'servizi', 'chi-sono'])

// Una voce è attiva se stai leggendo la sua sezione in home
// oppure se ti trovi sulla pagina dedicata corrispondente.
const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/#home',
    active: sezioneAttiva.value === 'home'
  },
  {
    label: 'Servizi',
    to: '/#servizi',
    active: sezioneAttiva.value === 'servizi' || route.path === '/servizi'
  },
  {
    label: 'Chi sono',
    to: '/#chi-sono',
    active: sezioneAttiva.value === 'chi-sono' || route.path === '/chi-sono'
  },
  {
    label: 'Contatti',
    to: '/contatti',
    active: route.path === '/contatti'
  }
])
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
