// https://nuxt.com/docs/api/configuration/nuxt-config

// Dominio di produzione. In locale e sui deploy di prova viene sovrascritto
// dalla variabile d'ambiente NUXT_PUBLIC_SITE_URL.
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://www.gianlucaantonelli.it'

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',

    runtimeConfig: {
        public: {
            siteUrl,
            /**
             * Il sito si lascia indicizzare solo dal dominio definitivo.
             * Finché gira su Netlify di prova o in locale resta fuori da
             * Google: evita che l'anteprima venga indicizzata al posto del
             * sito vero e che i canonical puntino a un dominio inesistente.
             */
            indicizzabile: !/netlify\.app|localhost|127\.0\.0\.1|^$/.test(siteUrl)
        }
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    modules: ['@nuxt/ui'],

    // Nessun toggle chiaro/scuro: il sito è sempre in modalità chiara
    colorMode: {
        preference: 'light',
        fallback: 'light'
    },

    app: {
        head: {
            htmlAttrs: { lang: 'it-IT' },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                // Segnali di geolocalizzazione per la ricerca locale
                { name: 'geo.region', content: 'IT-PI' },
                { name: 'geo.placename', content: 'Pisa' },
                { name: 'geo.position', content: '43.6776072;10.4378997' },
                { name: 'ICBM', content: '43.6776072, 10.4378997' },
                { name: 'author', content: 'Gianluca Antonelli' },
                { name: 'theme-color', content: '#2499FF' },
                // Evita che Safari trasformi numeri e indirizzi in link automatici
                { name: 'format-detection', content: 'telephone=no' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
                // I font sono self-hosted da @nuxt/fonts: niente richieste a terzi
                { rel: 'dns-prefetch', href: 'https://www.google.com' }
            ]
        }
    },

    // Prerendering di tutte le pagine: HTML statico, il massimo per la scansione
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/', '/servizi', '/chi-sono', '/contatti', '/robots.txt', '/sitemap.xml']
        },
        // Pre-comprime gli asset statici: meno byte, pagina più veloce
        compressPublicAssets: { gzip: true, brotli: true }
    },

    routeRules: {
        // Nota: niente redirect sullo slash finale. Nitro serve le pagine
        // prerenderizzate come directory e una regola del genere va in loop.
        // L'URL unico è già garantito dal <link rel="canonical"> di ogni pagina.
        // Gli asset con hash nel nome non cambiano mai: cache lunga
        '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
        '/sitemap.xml': { headers: { 'content-type': 'application/xml; charset=utf-8' } }
    },

    ui: {
        theme: {
            colors: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error']
        }
    },
})
