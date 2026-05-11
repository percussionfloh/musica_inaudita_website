<script setup>
const localePath = useLocalePath()
</script>

<template>
    <header class="bg-primary-500 text-white bg-pattern">
        <div class="flex justify-between items-center py-2 px-4 gap-4">
            <div class="grid-cols-2 gap-4 w-full grid">
                <div class="font-extrabold text-2xl">
                    <NuxtLink :to="localePath('/')">
                        Musica Inaudita
                    </NuxtLink>
                </div>
                <div class="flex gap-2 justify-end items-center">
                    <UButton
                        icon="i-simple-icons-instagram"
                        to="https://instagram.com/musica_inaudita"
                        target="_blank"
                        variant="ghost"
                        color="neutral"
                        square
                        :ui="{ label: 'hidden', base: 'text-white hover:text-black' }"
                    />
                </div>
            </div>
        </div>
    </header>
</template>
<!-- 
<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Philosphys',
    to: '/philosophy',
    icon: 'i-lucide-book-open',
    active: route.path.startsWith('/philosophy')
  },
  {
    label: 'Components',
    to: '/docs/components',
    active: route.path.startsWith('/docs/components')
  },
  {
    label: 'Figma',
    to: 'https://go.nuxt.com/figma-ui',
    target: '_blank'
  },
  {
    label: 'Releases',
    to: 'https://github.com/nuxt/ui/releases',
    target: '_blank'
  }
])
</script>

<template>
  <UHeader mode="slideover">
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>
 -->
