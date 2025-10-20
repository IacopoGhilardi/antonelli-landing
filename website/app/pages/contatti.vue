<template>
  <UContainer class="pb-12 space-y-12">

    <!-- Titolo -->
    <PageTitle title="I miei contatti"
    subtitle="Ricevo presso il mio studio privato di fisioterapia a Pisa ed offro anche il servizio
        di fisioterapia domiciliare nel Comune di Pisa."
    ></PageTitle>

    <!-- Card contatti -->
    <div class="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <ContactCard
          v-for="(item, i) in contatti"
          :key="i"
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
          :details="item.details"
      />
    </div>

    <!-- Mappa -->
    <div class="max-w-4xl mx-auto text-center space-y-6 pt-12">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Dove trovarmi</h2>
      <p class="text-gray-600 dark:text-gray-400">
        Studio Aletheia Fisioterapia — Via San Petronio Vecchio 15/A, 40125 Pisa
      </p>

      <div class="rounded-2xl overflow-hidden shadow-lg mt-4">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.665531922016!2d10.3966!3d43.7167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d591bda09b6b23%3A0x5c2b0d4d1e54c0b7!2sPisa!5e0!3m2!1sit!2sit!4v1679234567890!5m2!1sit!2sit"
            width="100%"
            height="400"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

  </UContainer>
</template>

<script setup>
import ContactCard from "../components/contactCard.vue";

const contatti = [
  {
    icon: 'i-heroicons-phone',
    title: 'Telefono e Whatsapp',
    description: 'Chiama o chatta',
    details: '349 1585839'
  },
  {
    icon: 'i-heroicons-envelope',
    title: 'Informazioni e prenotazioni',
    description: 'Scrivimi una mail'
  }
]
</script>
