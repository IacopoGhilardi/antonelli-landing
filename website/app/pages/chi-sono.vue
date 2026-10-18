<script setup lang="ts">
import aboutImage from '~/assets/images/gianluca-antonelli.jpg'
import { whatsappUrl } from '~/utils/site'

import { usePageSeo, useBreadcrumbSchema } from '~/composables/useSeo'

usePageSeo({
  title: 'Gianluca Antonelli | Fisioterapista OMPT a Pisa — Chi sono',
  description:
    'Laurea in Fisioterapia a Firenze, Master OMPT riconosciuto IFOMPT e certificazione PWR!Moves®. Il percorso, le competenze e il metodo di lavoro di Gianluca Antonelli, fisioterapista a Pisa.'
})

useBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Chi sono', path: '/chi-sono' }
])

const percorso = [
  {
    anno: '2019',
    titolo: 'Laurea in Fisioterapia',
    ente: 'Università degli Studi di Firenze',
    descrizione:
      'Laurea triennale in Fisioterapia conseguita con votazione 106/110, con tirocini nei reparti di ortopedia, neurologia e riabilitazione ambulatoriale.'
  },
  {
    anno: '2021',
    titolo: 'Certificazione PWR!Moves®',
    ente: 'Parkinson Wellness Recovery',
    descrizione:
      'Certificazione come terapista PWR!Moves®, programma di esercizio sviluppato specificamente per le persone con malattia di Parkinson.'
  },
  {
    anno: '2024',
    titolo: 'Master OMPT',
    ente: 'Università di Savona — titolo riconosciuto IFOMPT',
    descrizione:
      'Master in Riabilitazione dei Disturbi Muscoloscheletrici con qualifica OMPT (Orthopaedic Manipulative Physical Therapist), il più alto livello di specializzazione internazionale in terapia manuale ortopedica.'
  },
  {
    anno: 'Oggi',
    titolo: 'Formazione continua',
    ente: 'ECM e aggiornamento clinico',
    descrizione:
      'Aggiornamento costante tramite corsi ECM e letteratura scientifica, per mantenere la pratica clinica allineata alle evidenze più recenti.'
  }
]

const competenze = [
  {
    icon: 'i-heroicons-clipboard-document-check',
    title: 'Valutazione clinica',
    text: 'Ragionamento clinico strutturato per individuare l’origine del disturbo, distinguere ciò che è di competenza fisioterapica e indirizzare ad altri specialisti quando serve.'
  },
  {
    icon: 'i-heroicons-hand-raised',
    title: 'Terapia manuale ortopedica',
    text: 'Mobilizzazioni, manipolazioni e tecniche sui tessuti molli per colonna e arti, dosate sulla fase del disturbo.'
  },
  {
    icon: 'i-heroicons-arrow-trending-up',
    title: 'Esercizio terapeutico',
    text: 'Programmi progressivi di forza, mobilità e controllo motorio, con una scheda chiara da portare avanti in autonomia.'
  },
  {
    icon: 'i-heroicons-sparkles',
    title: 'Riabilitazione post-chirurgica',
    text: 'Percorsi dopo protesi, ricostruzioni legamentose e interventi di spalla, nel rispetto dei tempi biologici dei tessuti.'
  },
  {
    icon: 'i-heroicons-bolt',
    title: 'Dolore acuto e cronico',
    text: 'Gestione del dolore persistente con educazione al dolore, esposizione graduale e lavoro sulle abitudini quotidiane.'
  },
  {
    icon: 'i-heroicons-user-group',
    title: 'Malattia di Parkinson',
    text: 'Esercizio specifico PWR!Moves® per mantenere ampiezza di movimento, equilibrio e autonomia nel tempo.'
  }
]

const valori = [
  'Una valutazione approfondita prima di qualsiasi trattamento',
  'Obiettivi decisi insieme, chiari e verificabili',
  'Trattamento sempre individuale, mai in sovrapposizione con altri pazienti',
  'Spiegazioni comprensibili su cosa sta succedendo e perché',
  'Autonomia come obiettivo finale: non creare dipendenza dalla terapia'
]
</script>

<template>
  <div>
    <MoleculesPageHero
      eyebrow="Chi sono"
      title="Gianluca Antonelli, Fisioterapista OMPT a Pisa"
      subtitle="Valutazione e trattamento dei disordini muscolo-scheletrici, con un approccio basato sulle evidenze scientifiche e costruito su chi ho davanti."
    />

    <UContainer class="py-16 sm:py-20">
      <!-- Presentazione -->
      <div class="grid items-start gap-12 md:grid-cols-[2fr_3fr]">
        <img
          :src="aboutImage"
          alt="Gianluca Antonelli, fisioterapista OMPT a Pisa"
          width="1000"
          height="666"
          loading="lazy"
          class="mx-auto aspect-4/5 w-full max-w-sm rounded-2xl object-cover shadow-lg"
        >

        <div class="space-y-4 text-muted">
          <p>
            Sono un fisioterapista specializzato nella valutazione e nel trattamento dei disordini
            muscolo-scheletrici. Dopo la laurea in Fisioterapia all’Università di Firenze ho conseguito il
            Master OMPT a Savona, un titolo riconosciuto a livello internazionale da IFOMPT che rappresenta
            il più alto grado di specializzazione in terapia manuale ortopedica.
          </p>
          <p>
            Mi occupo di riabilitazione ortopedica, gestione del dolore acuto e cronico, problematiche
            articolari e muscolari, recupero post-chirurgico e ritorno allo sport. Dal 2021 sono inoltre
            terapista certificato PWR!Moves®, programma di esercizio dedicato alle persone con malattia di
            Parkinson.
          </p>
          <p>
            Il mio modo di lavorare parte sempre dalla stessa cosa: capire. Una valutazione approfondita
            permette di individuare l’origine reale del problema e di costruire un percorso su misura, in cui
            terapia manuale ed esercizio terapeutico si integrano. L’obiettivo non è farti tornare in studio a
            lungo, ma restituirti autonomia e fiducia nel tuo movimento.
          </p>
        </div>
      </div>

      <!-- Percorso di studi -->
      <section class="mt-20">
        <AtomsSectionEyebrow color="primary" size="lg" as="h2" class="mb-10">
          Il percorso di studi
        </AtomsSectionEyebrow>

        <ol class="relative space-y-8 border-l border-primary-200 pl-8">
          <li v-for="tappa in percorso" :key="tappa.anno + tappa.titolo" class="relative">
            <span class="absolute -left-[2.3rem] top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-white" />
            <AtomsSectionEyebrow color="secondary">{{ tappa.anno }}</AtomsSectionEyebrow>
            <h3 class="mt-1 text-lg font-semibold text-highlighted">{{ tappa.titolo }}</h3>
            <p class="text-sm font-medium text-primary-700">{{ tappa.ente }}</p>
            <p class="mt-2 text-sm text-muted">{{ tappa.descrizione }}</p>
          </li>
        </ol>
      </section>

      <!-- Competenze -->
      <section class="mt-20">
        <AtomsSectionEyebrow color="primary" size="lg" as="h2" class="mb-10">
          Le competenze
        </AtomsSectionEyebrow>

        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <UCard v-for="c in competenze" :key="c.title" class="h-full">
            <div class="space-y-3">
              <AtomsIconCircle :icon="c.icon" color="primary" size="sm" />
              <h3 class="font-semibold text-highlighted">{{ c.title }}</h3>
              <p class="text-sm text-muted">{{ c.text }}</p>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Metodo -->
      <section class="mt-20 rounded-2xl bg-primary-50 p-8 sm:p-12">
        <AtomsSectionEyebrow color="primary" size="lg" as="h2" class="mb-6">
          Come lavoro
        </AtomsSectionEyebrow>
        <ul class="grid gap-3 sm:grid-cols-2">
          <AtomsCheckListItem v-for="v in valori" :key="v" color="secondary">
            {{ v }}
          </AtomsCheckListItem>
        </ul>
      </section>

      <div class="mt-16 text-center">
        <UButton
          :to="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          class="rounded-full bg-[#25D366] font-semibold text-white hover:bg-[#1EBE5A]"
        >
          <AtomsWhatsAppIcon class="h-5 w-5" />
          Scrivimi su WhatsApp
        </UButton>
      </div>
    </UContainer>
  </div>
</template>
