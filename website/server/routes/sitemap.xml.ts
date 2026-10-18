import { pagine } from '../utils/sito'

export default defineEventHandler((event) => {
  const { siteUrl } = useRuntimeConfig().public
  const lastmod = new Date().toISOString().slice(0, 10)

  setHeader(event, 'content-type', 'application/xml; charset=utf-8')

  const urls = pagine.map(p => `  <url>
    <loc>${siteUrl}${p.path === '/' ? '/' : p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
})
