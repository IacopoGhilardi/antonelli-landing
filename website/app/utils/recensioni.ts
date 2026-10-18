import data from '~/data/recensioni.json'

export type Recensione = {
  nome: string
  /** ISO date, usata per mostrare "3 mesi fa" */
  data: string
  rating: number
  testo: string
}

export type Recensioni = {
  profiloUrl: string
  mediaVoto: number
  totaleRecensioni: number
  recensioni: Recensione[]
}

/**
 * Recensioni Google dello studio, lette da `app/data/recensioni.json`.
 * Il file viene incluso a build time: per aggiornarle basta modificare il JSON
 * e rigenerare il sito, senza toccare il codice.
 */
export const recensioniGoogle = data as Recensioni
