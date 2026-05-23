<script setup>
import { de } from '@nuxt/ui/locale'
import logo from '~/assets/logo_small_lila.png'

useHead({
  title: 'Musica Inaudita',
  link: [
    {
      rel: 'icon',
      type: '../assets/logo_small_lila.png',
      href: logo
    }
  ]
})
</script>

<template>
        <UApp :locale="de">
            <div class="flex flex-col min-h-screen">
                <TheHeader />
                <!-- <TheNavigation /> -->
                <main class="py-8">
                    <slot></slot>
                </main>
                <TheFooter class="mt-auto" />
            </div>
        </UApp>
</template>

<style>
html {
    font-size: 20px;
}
.bg-pattern {
    background-color: oklch(51.868% 0.16644 296.494);
}

</style>