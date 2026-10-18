// Il dominio NON sta più qui: è in nuxt.config.ts, sovrascrivibile con la
// variabile d'ambiente NUXT_PUBLIC_SITE_URL e leggibile via
// useRuntimeConfig().public.siteUrl

export const professionista = {
  nome: 'Gianluca Antonelli',
  ruolo: 'Fisioterapista OMPT',
  telefono: '+39 333 109 0138',
  telefonoHref: 'tel:+393331090138',
  telefonoE164: '+393331090138',
  email: 'gianlucaantonelli@hotmail.it',
  /** Numero in formato internazionale senza simboli, come richiede wa.me */
  whatsapp: '393331090138',
  whatsappTesto: 'Ciao Gianluca, vorrei informazioni per una seduta di fisioterapia.'
} as const

/** Link a WhatsApp con messaggio precompilato */
export const whatsappUrl = `https://wa.me/${professionista.whatsapp}?text=${encodeURIComponent(professionista.whatsappTesto)}`

/** Studio presso cui riceve */
export const studio = {
  nome: 'ABC Salute',
  indirizzo: 'Via Galileo Ferraris, 12',
  cap: '56121',
  citta: 'Ospedaletto',
  comune: 'Pisa',
  provincia: 'PI',
  regione: 'Toscana',
  lat: 43.6776072,
  lng: 10.4378997,
  orari: [
    { giorni: 'Lunedì – Venerdì', ore: '8:00 – 13:00 · 15:00 – 20:00' },
    { giorni: 'Sabato e Domenica', ore: 'Chiuso' }
  ],
  /** Formato schema.org per i dati strutturati */
  orariSchema: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '13:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '15:00',
      closes: '20:00'
    }
  ],
  mapsUrl:
    'https://www.google.it/maps/place/ABC+Salute/@43.6776111,10.4353248,17z/data=!3m1!4b1!4m6!3m5!1s0x427415c748f963c3:0x3a798899c0a5399a!8m2!3d43.6776072!4d10.4378997',
  mapsEmbed:
    'https://www.google.com/maps?q=ABC+Salute,Via+Galileo+Ferraris+12,56121+Ospedaletto+PI&output=embed'
} as const

export const indirizzoCompleto = `${studio.indirizzo}, ${studio.cap} ${studio.citta} (${studio.provincia})`

/** Comuni serviti: usati nei dati strutturati e nei contenuti locali */
export const zoneServite = [
  'Pisa',
  'Ospedaletto',
  'Cascina',
  'San Giuliano Terme',
  'Calci',
  'Vecchiano',
  'Pontedera',
  'Livorno',
  'Lucca'
] as const
