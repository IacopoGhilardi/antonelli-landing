<script setup lang="ts">
import aboutImage from '~/assets/images/gianluca-antonelli.jpg'
import { useScrollReveal } from '~/composables/useScrollReveal'

const bullets = [
  'Formazione ECM Continua',
  'Certificazione in Terapia Manuale',
  'Assistenza anche a domicilio'
]

const testimonials = [
  {
    name: 'Marco R.',
    quote: 'Servizio eccellente!',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5
  },
  {
    name: 'Laura B.',
    quote: 'Tanta professionalità e empatia.',
    avatar: 'https://i.pravatar.cc/150?img=32',
    rating: 5
  },
  {
    name: 'Sara T.',
    quote: 'Recupero completo grazie a Gianluca.',
    avatar: 'https://i.pravatar.cc/150?img=45',
    rating: 5
  }
]

const { target: aboutTarget, visible: aboutVisible } = useScrollReveal()
const { target: reviewsTarget, visible: reviewsVisible } = useScrollReveal()
</script>

<template>
  <div id="chi-sono" class="scroll-mt-(--ui-header-height) bg-neutral-50 py-20 dark:bg-neutral-900/40">
    <!-- CHI SONO -->
    <UContainer
      ref="aboutTarget"
      class="grid items-center gap-12 transition-all duration-700 ease-out md:grid-cols-2"
      :class="aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <img
        :src="aboutImage"
        alt="Gianluca Antonelli, fisioterapista"
        class="mx-auto aspect-4/5 w-full max-w-sm rounded-2xl object-cover shadow-lg"
      >

      <div class="space-y-4">
        <AtomsSectionEyebrow color="primary">Chi sono</AtomsSectionEyebrow>
        <h2 class="text-2xl font-bold text-highlighted">
          Gianluca Antonelli, Fisioterapista
        </h2>
        <p class="text-muted">
          Fisioterapista laureato all'Università di Pisa, mi occupo di riabilitazione ortopedica,
          sportiva e fisioterapia domiciliare. Aiuto le persone a recuperare il movimento e
          ritrovare benessere fisico con un approccio empatico e personalizzato.
        </p>
        <ul class="space-y-2">
          <AtomsCheckListItem v-for="item in bullets" :key="item" color="secondary">
            {{ item }}
          </AtomsCheckListItem>
        </ul>
        <UButton to="#contatti" color="primary" trailing-icon="i-heroicons-arrow-right">
          Scopri il mio percorso
        </UButton>
      </div>
    </UContainer>

    <!-- RECENSIONI -->
    <UContainer
      ref="reviewsTarget"
      class="mt-24 space-y-10 text-center transition-all duration-700 ease-out"
      :class="reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <h2 class="text-2xl font-bold text-highlighted">
        Cosa dicono i miei pazienti
      </h2>

      <div class="grid gap-6 sm:grid-cols-3">
        <MoleculesTestimonialCard
          v-for="(t, i) in testimonials"
          :key="t.name"
          :quote="t.quote"
          :name="t.name"
          :avatar="t.avatar"
          :rating="t.rating"
          :delay="i * 100"
        />
      </div>
    </UContainer>
  </div>
</template>
