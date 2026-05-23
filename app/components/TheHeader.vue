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
  <UHeader class="bg-color: bg-fuchsia-300 h-20 flex items-center" mode="slideover">
    <template #title class="align-center">
        <div class="flex items-center h-full">
             <img src="../assets/logo_transparent.png" alt="Logo" class="h-40 w-auto block mt-4"/> <!-- muss noch dynamisch angepasst werden -->
        </div>
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

