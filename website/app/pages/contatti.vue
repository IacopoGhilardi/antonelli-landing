<script setup lang="ts">
import { professionista, studio, indirizzoCompleto, whatsappUrl } from '~/utils/site'
import { usePageSeo, useBreadcrumbSchema } from '~/composables/useSeo'

usePageSeo({
  title: 'Contatti | Fisioterapista a Pisa — Gianluca Antonelli',
  description: `Studio di fisioterapia presso ${studio.nome}, ${indirizzoCompleto}. Telefono ${professionista.telefono}. Orari, mappa e trattamenti a domicilio a Pisa e provincia.`
})

useBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Contatti', path: '/contatti' }
])
</script>

<template>
  <div>
    <MoleculesPageHero
      eyebrow="Contatti"
      title="Fisioterapista a Pisa — parliamone"
      subtitle="Ricevo presso lo studio ABC Salute a Ospedaletto, alle porte di Pisa, e su richiesta a domicilio. Scrivimi o chiamami per fissare una valutazione."
    />

    <UContainer class="py-16 sm:py-20">
      <div class="grid gap-10 lg:grid-cols-3">
        <!-- Recapiti -->
        <UCard class="h-full">
          <div class="space-y-5">
            <AtomsIconCircle icon="i-heroicons-phone" color="primary" size="sm" />
            <h2 class="text-lg font-bold text-highlighted">Recapiti</h2>

            <div class="space-y-3 text-sm">
              <p class="flex items-start gap-2">
                <UIcon name="i-heroicons-phone" class="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a :href="professionista.telefonoHref" class="text-highlighted hover:underline">
                  {{ professionista.telefono }}
                </a>
              </p>
              <p class="flex items-start gap-2">
                <UIcon name="i-heroicons-envelope" class="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  :href="`mailto:${professionista.email}`"
                  class="break-all text-highlighted hover:underline"
                >
                  {{ professionista.email }}
                </a>
              </p>
            </div>

            <div class="space-y-2">
              <UButton
                :to="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                block
                class="rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#1EBE5A]"
              >
                <AtomsWhatsAppIcon class="h-5 w-5" />
                Scrivimi su WhatsApp
              </UButton>
              <UButton
                :to="professionista.telefonoHref"
                color="tertiary"
                block
                class="rounded-full font-semibold"
                icon="i-heroicons-phone"
              >
                Chiamami
              </UButton>
              <UButton
                :to="`mailto:${professionista.email}`"
                color="primary"
                variant="outline"
                block
                class="rounded-full font-semibold"
                icon="i-heroicons-envelope"
              >
                Scrivimi una mail
              </UButton>
            </div>
          </div>
        </UCard>

        <!-- Dove sono -->
        <UCard class="h-full">
          <div class="space-y-5">
            <AtomsIconCircle icon="i-heroicons-map-pin" color="secondary" size="sm" />
            <h2 class="text-lg font-bold text-highlighted">Dove mi trovi</h2>

            <div class="space-y-1 text-sm text-muted">
              <p class="font-semibold text-highlighted">{{ studio.nome }}</p>
              <p>{{ studio.indirizzo }}</p>
              <p>{{ studio.cap }} {{ studio.citta }} ({{ studio.provincia }})</p>
            </div>

            <p class="text-sm text-muted">
              Lo studio è a pochi minuti dal centro di Pisa e dall'uscita della FI-PI-LI.
              Su richiesta e per chi ha difficoltà a spostarsi sono disponibili trattamenti a domicilio.
            </p>
          </div>
        </UCard>

        <!-- Orari -->
        <UCard class="h-full">
          <div class="space-y-5">
            <AtomsIconCircle icon="i-heroicons-clock" color="primary" size="sm" />
            <h2 class="text-lg font-bold text-highlighted">Orari di apertura</h2>

            <dl class="space-y-3 text-sm">
              <div v-for="o in studio.orari" :key="o.giorni" class="flex flex-col gap-0.5">
                <dt class="font-semibold text-highlighted">{{ o.giorni }}</dt>
                <dd class="text-muted">{{ o.ore }}</dd>
              </div>
            </dl>

            <p class="text-sm text-muted">
              Le sedute sono su appuntamento: contattami per verificare la disponibilità.
            </p>
          </div>
        </UCard>
      </div>

      <!-- Mappa -->
      <section class="mt-16 space-y-6">
        <AtomsSectionEyebrow color="primary" size="lg" as="h2">Come raggiungermi</AtomsSectionEyebrow>
        <div class="overflow-hidden rounded-2xl shadow-lg ring-1 ring-neutral-200">
          <iframe
            :src="studio.mapsEmbed"
            :title="`Mappa dello studio di fisioterapia ${studio.nome}, ${indirizzoCompleto}`"
            class="h-[420px] w-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          />
        </div>
      </section>
    </UContainer>
  </div>
</template>
