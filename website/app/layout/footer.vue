<script setup lang="ts">
import { professionista, studio, indirizzoCompleto } from '~/utils/site'

const year = new Date().getFullYear()

const links = [
  { label: 'Home', to: '/#home' },
  { label: 'Servizi', to: '/#servizi' },
  { label: 'Chi sono', to: '/#chi-sono' },
  { label: 'Contatti', to: '/contatti' }
]

// Pagine di approfondimento
const approfondimenti = [
  { label: 'Tutti i servizi', to: '/servizi' },
  { label: 'Il mio percorso', to: '/chi-sono' }
]
</script>

<template>
  <UFooter id="contatti" class="scroll-mt-(--ui-header-height) bg-primary-900 text-white border-t border-primary-800 py-12">
    <template #top>
      <UContainer class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Brand -->
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-white">
            Gianluca Antonelli — Fisioterapista OMPT
          </h3>
          <p class="text-primary-100 text-sm leading-relaxed max-w-xs">
            Valutazione e trattamento dei disordini muscolo-scheletrici: terapia manuale ed esercizio terapeutico,
            in studio e a domicilio.
          </p>
        </div>

        <!-- Navigazione -->
        <div>
          <AtomsSectionEyebrow color="secondary" class="mb-3">Navigazione</AtomsSectionEyebrow>
          <nav class="flex flex-col gap-2">
            <ULink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-primary-100 hover:text-white transition text-sm w-fit"
            >
              {{ link.label }}
            </ULink>
          </nav>
        </div>

        <!-- Approfondimenti -->
        <div>
          <AtomsSectionEyebrow color="secondary" class="mb-3">Approfondimenti</AtomsSectionEyebrow>
          <nav class="flex flex-col gap-2">
            <ULink
              v-for="link in approfondimenti"
              :key="link.to"
              :to="link.to"
              class="text-primary-100 hover:text-white transition text-sm w-fit"
            >
              {{ link.label }}
            </ULink>
          </nav>
        </div>

        <!-- Contatti -->
        <div>
          <AtomsSectionEyebrow color="secondary" class="mb-3">Contatti</AtomsSectionEyebrow>
          <div class="space-y-2 text-sm text-primary-100">
            <p class="flex items-start gap-2">
              <UIcon name="i-heroicons-map-pin" class="w-4 h-4 shrink-0 mt-0.5" />
              <a
                :href="studio.mapsUrl"
                target="_blank"
                rel="noopener"
                class="hover:underline hover:text-white"
              >
                {{ studio.nome }} — {{ indirizzoCompleto }}
              </a>
            </p>
            <p class="flex items-center gap-2">
              <UIcon name="i-heroicons-phone" class="w-4 h-4 shrink-0" />
              <a :href="professionista.telefonoHref" class="hover:underline hover:text-white">{{ professionista.telefono }}</a>
            </p>
            <p class="flex items-center gap-2">
              <UIcon name="i-heroicons-envelope" class="w-4 h-4 shrink-0" />
              <a :href="`mailto:${professionista.email}`" class="hover:underline hover:text-white">
                {{ professionista.email }}
              </a>
            </p>
            <ULink
              to="/contatti"
              class="inline-flex items-center gap-1 pt-1 font-medium text-secondary-300 hover:text-white transition"
            >
              Orari e mappa
              <UIcon name="i-heroicons-arrow-right" class="w-4 h-4" />
            </ULink>
          </div>
        </div>
      </UContainer>
    </template>

    <template #bottom>
      <div class="text-center text-sm text-primary-200 border-t border-primary-800 pt-4">
        © {{ year }} Gianluca Antonelli — Fisioterapista · Tutti i diritti riservati
      </div>
    </template>
  </UFooter>
</template>
