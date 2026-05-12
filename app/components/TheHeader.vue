<!-- <script setup>
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
</template> -->

<script setup>

const { t } = useI18n();
const localePath = useLocalePath();

const route = useRoute()

const items = [
    [{
        label: t('start'),
        icon: '',
        to: localePath({name: 'index'}),
    },
    {
        label: t('team'),
        to: localePath ({name: 'team'}),
    },
    {
        label: t('database'),
        to: localePath ({name: 'database'}),
    },
    {
        label: t('philosophy'),
        to: localePath ({name: 'philosophy'}),
    }],
    [{
        label: t('participate'),
        to: localePath ({name: 'participate'}),
    },
    {
        label: t('contact'),
        to: localePath ({name: 'contact'}),
    }
]];
</script>

<template>
  <UHeader class="bg-color: bg-fuchsia-300" mode="slideover">
    <template #title>
      <p class="xl:text-4xl md:text-2xl"> Musica Inaudita </p>
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UTooltip text="Instagram" :kbds="['meta', 'G']">
        <UButton
          color="white"
          variant="ghost"
          to="https://instagram.com/musica_inaudita"
          target="_blank"
          icon="i-simple-icons-instagram"
          aria-label="Instagram"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

