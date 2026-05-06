<script setup>
const localePath = useLocalePath();
const { t } = useI18n();

const columns = [
    {
        label: t('sitemap'),
        children: [
            {
                label: t('legalNotice'),
                to: localePath('legal-notice'),
            },
        ],
    },
];
</script>

<template>
    <UFooter class="bg-pattern">
        <template #top>
            <UContainer>
                <UFooterColumns :columns="columns" :ui="{
                    list: 'grid grid-cols-2 gap-x-2 space-y-0 mt-3',
                    link: 'text-white text-base',
                    label: 'text-white text-lg',
                }">
                <template #right>
                        <div>
                            <div class="flex justify-end">
                                <img src="../assets/mi.png" class="max-h-47.5" alt="Bild" />
                            </div>
                        </div>
                    </template>
                </UFooterColumns>
            </UContainer>
        </template>
    </UFooter>
</template>