<script setup lang="ts">
import { usePageSeo, useLocalBusinessSchema, useFaqSchema } from '~/composables/useSeo'

usePageSeo({
  title: 'Fisioterapista a Pisa | Gianluca Antonelli, Fisioterapista OMPT',
  description:
    'Fisioterapista OMPT a Pisa (Ospedaletto). Terapia manuale, esercizio terapeutico, riabilitazione post-chirurgica e sportiva. Trattamenti in studio e a domicilio: prenota una valutazione.'
})

useLocalBusinessSchema()

const faq = [
  {
    domanda: 'Dove riceve il fisioterapista Gianluca Antonelli a Pisa?',
    risposta:
      'Lo studio si trova presso ABC Salute, in Via Galileo Ferraris 12, a Ospedaletto (Pisa), facilmente raggiungibile da Pisa, Cascina e Pontedera. Su richiesta sono disponibili trattamenti a domicilio.'
  },
  {
    domanda: 'Che cos’è un fisioterapista OMPT?',
    risposta:
      'OMPT (Orthopaedic Manipulative Physical Therapist) è il massimo livello di specializzazione internazionale in terapia manuale ortopedica, riconosciuto da IFOMPT. Si consegue con un Master universitario dedicato alla valutazione e al trattamento dei disordini muscolo-scheletrici.'
  },
  {
    domanda: 'Serve la prescrizione medica per una seduta di fisioterapia?',
    risposta:
      'No, il fisioterapista è un professionista sanitario ad accesso diretto: puoi prenotare una valutazione senza impegnativa. Se durante l’esame emergono segnali che richiedono un approfondimento medico, ti indirizzo allo specialista adatto.'
  },
  {
    domanda: 'Quanto dura una seduta e quante ne servono?',
    risposta:
      'La prima valutazione dura circa un’ora, le sedute successive dai 45 ai 60 minuti. Il numero di sedute dipende dal problema e viene stimato insieme dopo la valutazione iniziale: l’obiettivo è renderti autonomo, non creare dipendenza dalla terapia.'
  },
  {
    domanda: 'Fate fisioterapia a domicilio a Pisa e provincia?',
    risposta:
      'Sì. Per chi ha difficoltà a spostarsi, nel post-operatorio o per la persona anziana i trattamenti si svolgono a domicilio a Pisa e nei comuni limitrofi.'
  }
]

useFaqSchema(faq)
</script>

<template>
  <div>
    <OrganismsHeroSection />
    <OrganismsServicesSection />
    <OrganismsAboutSection />
    <OrganismsTestimonialsSection />
    <OrganismsFaqSection :faq="faq" />
  </div>
</template>
