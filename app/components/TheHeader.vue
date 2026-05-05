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