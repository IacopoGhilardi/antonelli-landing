<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import {computed} from "#imports";

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/' // solo true se siamo davvero sulla home
  },
  {
    label: 'Chi sono',
    to: '/chi-sono',
    active: route.path.startsWith('/chi-sono')
  },
  {
    label: 'Contatti',
    to: '/contatti',
    active: route.path.startsWith('/contatti')
  },
  {
    label: 'Trattamenti',
    to: '/trattamenti',
    active: route.path.startsWith('/trattamenti')
  }
])
</script>

<template>
  <UHeader>
    <template #title>
      Logo
    </template>

    <template #right>
      <UNavigationMenu :items="items" class="hidden lg:block"/>
      <UColorModeButton />
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>

  </UHeader>
</template>
