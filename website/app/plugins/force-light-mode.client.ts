/**
 * Il sito non ha più il toggle chiaro/scuro.
 * `colorMode.preference` in nuxt.config vale però solo per i nuovi visitatori:
 * chi aveva già scelto "dark" se lo ritrova salvato nel localStorage e vedrebbe
 * il sito in modalità scura (con testi chiari su fondi chiari, dato che le
 * varianti `dark:` sono state rimosse). Qui sovrascriviamo il valore salvato.
 */
export default defineNuxtPlugin(() => {
  const colorMode = useColorMode()

  if (colorMode.preference !== 'light') {
    colorMode.preference = 'light'
  }
  colorMode.value = 'light'
})
