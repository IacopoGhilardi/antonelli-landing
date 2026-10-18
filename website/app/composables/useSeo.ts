import { useHead, useRoute, useSeoMeta } from '#imports'
import { indirizzoCompleto, professionista, siteUrl, studio, zoneServite } from '~/utils/site'
import { servizi } from '~/utils/servizi'

type SeoOptions = {
  title: string
  description: string
  /** Immagine di anteprima per i social (percorso assoluto dal dominio) */
  image?: string
}

/**
 * Imposta title, description, canonical, Open Graph e Twitter Card
 * per la pagina corrente.
 */
export function usePageSeo({ title, description, image = '/og-image.jpg' }: SeoOptions) {
  const route = useRoute()
  const url = `${siteUrl}${route.path === '/' ? '' : route.path}`

  useHead({
    link: [{ rel: 'canonical', href: url }]
  })

  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: url,
    ogImage: `${siteUrl}${image}`,
    ogLocale: 'it_IT',
    ogSiteName: `${professionista.nome} — ${professionista.ruolo}`,
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: `${siteUrl}${image}`
  })
}

/**
 * Dati strutturati JSON-LD. Sono ciò che permette a Google di mostrare
 * il riquadro con indirizzo, orari, telefono e stelle nei risultati locali.
 */
export function useLocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Physiotherapy', 'MedicalBusiness', 'LocalBusiness'],
        '@id': `${siteUrl}/#studio`,
        name: `${professionista.nome} — ${professionista.ruolo}`,
        description:
          'Fisioterapista OMPT a Pisa specializzato nella valutazione e nel trattamento dei disordini muscolo-scheletrici: terapia manuale, esercizio terapeutico, riabilitazione post-chirurgica e sportiva.',
        url: siteUrl,
        telephone: professionista.telefono,
        email: professionista.email,
        image: `${siteUrl}/og-image.jpg`,
        priceRange: '€€',
        currenciesAccepted: 'EUR',
        address: {
          '@type': 'PostalAddress',
          streetAddress: studio.indirizzo,
          addressLocality: `${studio.citta}, ${studio.comune}`,
          postalCode: studio.cap,
          addressRegion: studio.regione,
          addressCountry: 'IT'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: studio.lat,
          longitude: studio.lng
        },
        hasMap: studio.mapsUrl,
        openingHoursSpecification: studio.orariSchema,
        areaServed: zoneServite.map(nome => ({ '@type': 'City', name: nome })),
        medicalSpecialty: 'PhysicalTherapy',
        availableService: servizi.map(s => ({
          '@type': 'MedicalTherapy',
          name: s.title,
          description: s.description
        }))
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#gianluca`,
        name: professionista.nome,
        jobTitle: professionista.ruolo,
        url: `${siteUrl}/chi-sono`,
        telephone: professionista.telefono,
        email: professionista.email,
        worksFor: { '@id': `${siteUrl}/#studio` },
        knowsAbout: [
          'Fisioterapia',
          'Terapia manuale ortopedica',
          'Riabilitazione muscoloscheletrica',
          'Esercizio terapeutico',
          'Riabilitazione post-chirurgica',
          'Fisioterapia sportiva',
          'Malattia di Parkinson'
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'degree',
            name: 'Laurea in Fisioterapia',
            recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Università degli Studi di Firenze' }
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Master',
            name: 'Master OMPT — Riabilitazione dei Disturbi Muscoloscheletrici (IFOMPT)',
            recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Università di Savona' }
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'certification',
            name: 'Terapista certificato PWR!Moves®'
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: `${professionista.nome} — ${professionista.ruolo}`,
        inLanguage: 'it-IT',
        publisher: { '@id': `${siteUrl}/#studio` }
      }
    ]
  }

  useHead({
    script: [{ type: 'application/ld+json', innerHTML: JSON.stringify(schema) }]
  })
}

/** Breadcrumb: Google li mostra al posto dell'URL nei risultati */
export function useBreadcrumbSchema(items: { name: string, path: string }[]) {
  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: `${siteUrl}${item.path === '/' ? '' : item.path}`
        }))
      })
    }]
  })
}

/** FAQ: possono comparire come risultato espandibile in SERP */
export function useFaqSchema(faq: { domanda: string, risposta: string }[]) {
  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({
          '@type': 'Question',
          name: f.domanda,
          acceptedAnswer: { '@type': 'Answer', text: f.risposta }
        }))
      })
    }]
  })
}

export const indirizzoSeo = indirizzoCompleto
