// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
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
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
                { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1' },
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
            routes: ['/', '/servizi', '/chi-sono', '/contatti']
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
