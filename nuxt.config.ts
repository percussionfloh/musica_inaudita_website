export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: false },
      runtimeConfig: {
        supabaseKey: process.env.SUPABASE_KEY,
        zoteroApiKey: process.env.ZOTERO_API_KEY,
        zoteroGroupId: process.env.ZOTERO_GROUP_ID,
        public: {
            supabaseUrl: process.env.SUPABASE_URL
        }
    },
    modules: ['@nuxt/content', '@nuxt/ui', '@nuxtjs/supabase', '@nuxtjs/i18n', '@nuxt/scripts'],
    css: ['~/assets/main.css'],
    // scripts: {
    //     registry: {
    //         instagramEmbed: {}
    //     }
    // },
    supabase: {
        redirect: false,
    },
    i18n: {
        strategy: 'prefix_except_default',
        locales: [
            { code: 'de', language: 'de-DE', file: 'de.yaml', dir: 'ltr' },
        ],
        defaultLocale: 'de',
        langDir: 'locales/',
    },
});