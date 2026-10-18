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
                { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ]
        }
    },

    // Prerendering di tutte le pagine: HTML statico, il massimo per la scansione
    nitro: {
        prerender: {
            crawlLinks: true,
            routes: ['/', '/servizi', '/chi-sono', '/contatti']
        }
    },

    ui: {
        theme: {
            colors: ['primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error']
        }
    },
})
