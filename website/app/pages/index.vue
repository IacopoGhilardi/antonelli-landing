<script setup lang="ts">
const links = ref([
  {
    label: 'Prenota una seduta',
    to: '/contatti',
    color: 'primary',
    variant: 'solid',
  }
])

const servizi = [
  {
    icon: 'i-heroicons-heart',
    title: 'Fisioterapia ortopedica',
    text: 'Recupero da traumi e interventi chirurgici con trattamenti personalizzati basati sull’evidenza scientifica.'
  },
  {
    icon: 'i-heroicons-bolt',
    title: 'Riabilitazione sportiva',
    text: 'Percorsi di prevenzione e recupero per atleti e sportivi di ogni livello.'
  },
  {
    icon: 'i-heroicons-home-modern',
    title: 'Fisioterapia domiciliare',
    text: 'Trattamenti a domicilio nel Comune di Pisa, per chi ha difficoltà a spostarsi o preferisce il comfort di casa.'
  }
]
</script>

<template>
  <!-- HERO -->
  <UPageHero
      title="Gianluca Antonelli"
      description="Fisioterapista a Pisa — Trattamenti personalizzati e un fiko della madonna."
      :links="links"
      orientation="horizontal"
  >
    <img
        src="#"
        alt="Gianluca Antonelli fisioterapista"
        class="rounded-xl shadow-2xl ring ring-default"
    />
  </UPageHero>

  <!-- SERVIZI PRINCIPALI -->
  <UContainer class="py-20 text-center space-y-10">
    <div>
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
        I miei servizi
      </h2>
      <p class="text-gray-600 dark:text-gray-400 mt-2">
        Percorsi di riabilitazione e prevenzione su misura per ogni esigenza.
      </p>
    </div>

    <div class="grid sm:grid-cols-3 gap-8">
      <UCard
          v-for="(s, i) in servizi"
          :key="i"
          class="p-6 rounded-2xl text-center hover:shadow-lg transition-all"
      >
        <UIcon :name="s.icon" class="w-10 h-10 text-primary mx-auto mb-4" />
        <h3 class="font-semibold text-lg text-gray-900 dark:text-white mb-2">{{ s.title }}</h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {{ s.text }}
        </p>
      </UCard>
    </div>
  </UContainer>

  <!-- CHI SONO (ANTEPRIMA) -->
  <div class="bg-gray-50 dark:bg-gray-900 py-16">
    <UContainer class="grid md:grid-cols-2 gap-10 items-center">
      <div class="space-y-4">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
          Ciao, sono Gianluca Antonelli
        </h2>
        <p class="text-gray-700 dark:text-gray-300">
          Fisioterapista laureato all’Università di Pisa, mi occupo di riabilitazione ortopedica, sportiva e
          fisioterapia domiciliare. Aiuto le persone a recuperare il movimento e ritrovare benessere fisico
          con un approccio empatico e personalizzato.
        </p>
        <UButton to="/chi-sono" color="primary" icon="i-heroicons-arrow-right">
          Scopri di più
        </UButton>
      </div>

      <div class="flex justify-center">
        <img
            src=""
            alt="Gianluca Antonelli fisioterapista"
            class="rounded-2xl shadow-lg max-w-sm w-full object-cover"
        />
      </div>
    </UContainer>
  </div>

  <!-- CTA FINALE -->
  <UContainer class="py-20 text-center space-y-4">
    <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
      Pronto a iniziare il tuo percorso di recupero?
    </h2>
    <p class="text-gray-600 dark:text-gray-400">
      Contattami per prenotare una seduta o richiedere maggiori informazioni.
    </p>
    <UButton to="/contatti" color="primary" size="lg" icon="i-heroicons-phone">
      Contattami ora
    </UButton>
  </UContainer>
</template>
