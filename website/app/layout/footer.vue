<script setup lang="ts">
const year = new Date().getFullYear()

const links = [
  { label: 'Home', to: '#home' },
  { label: 'Servizi', to: '#servizi' },
  { label: 'Chi sono', to: '#chi-sono' },
  { label: 'Contatti', to: '#contatti' }
]
</script>

<template>
  <UFooter id="contatti" class="bg-primary-900 text-white border-t border-primary-800 py-12 scroll-mt-(--ui-header-height)">
    <template #top>
      <UContainer class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <!-- Brand -->
        <div class="space-y-3">
          <h3 class="text-lg font-bold text-white">
            Gianluca Antonelli — Fisioterapista
          </h3>
          <p class="text-primary-100 text-sm leading-relaxed max-w-xs">
            Terapie personalizzate, manuali e strumentali per il recupero del movimento e del benessere, a studio e a domicilio.
          </p>
          <div class="flex gap-1 pt-1">
            <UButton
              icon="i-simple-icons-linkedin"
              color="neutral"
              variant="ghost"
              class="text-primary-100 hover:text-white"
              to="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
            />
            <UButton
              icon="i-simple-icons-instagram"
              color="neutral"
              variant="ghost"
              class="text-primary-100 hover:text-white"
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
            />
          </div>
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

        <!-- Contatti -->
        <div>
          <AtomsSectionEyebrow color="secondary" class="mb-3">Contatti</AtomsSectionEyebrow>
          <div class="space-y-2 text-sm text-primary-100">
            <p class="flex items-center gap-2">
              <UIcon name="i-heroicons-phone" class="w-4 h-4 shrink-0" />
              <a href="tel:+393491585839" class="hover:underline hover:text-white">+39 349 1585839</a>
            </p>
            <p class="flex items-center gap-2">
              <UIcon name="i-heroicons-envelope" class="w-4 h-4 shrink-0" />
              <a href="mailto:gianluca.antonelli@fisioterapia.it" class="hover:underline hover:text-white">
                gianluca.antonelli@fisioterapia.it
              </a>
            </p>
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
