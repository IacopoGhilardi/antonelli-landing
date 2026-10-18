import { pagine } from '../utils/sito'

export default defineEventHandler((event) => {
  const { siteUrl, indicizzabile } = useRuntimeConfig().public

  setHeader(event, 'content-type', 'text/plain; charset=utf-8')

  // Sui deploy di prova il sito resta fuori da Google: vedi nuxt.config
  if (!indicizzabile) {
    return 'User-agent: *\nDisallow: /\n'
  }

  return [
    'User-agent: *',
    'Allow: /',
    '',
    `Sitemap: ${siteUrl}/sitemap.xml`,
    ''
  ].join('\n')
})
