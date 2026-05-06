<script setup>
const { t } = useI18n();
const localePath = useLocalePath();

const items = [
    [{
        label: t('start'),
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
    <UNavigationMenu :items="items" class="border-b border-gray-200 dark:border-gray-800 px-2"/>
</template>