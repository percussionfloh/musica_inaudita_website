<script setup>
  
definePageMeta({
    layout: 'item',
});

const route = useRoute()

const client = useSupabaseClient()
const databases = ref([])
const localePath = useLocalePath()

const formatCreator = (creator) => {
  if (!creator) return ''
  const firstName = creator.firstName ?? ''
  const lastName = creator.lastName ?? ''
  return lastName ? `${lastName} ${firstName}`.trim() : firstName.trim()
}

const formatCreators = (creators) => {
  if (!creators || !creators.length) return ''
  return creators
    .map(formatCreator)
    .filter(Boolean)
    .join('; ')
}

onMounted(async () => {
  const { data, error } = await client.from('mi_database').select()
  console.log('error:', error)
  console.log('data:', data)
  databases.value = data ?? []
})


</script>

<template class="h-full">
    <div class="grid rows-4 justify-items-center">
        <div class="bg-amber-300 mx-3">
            <UInput placeholder="Search..." />
        </div>
        <div class="grid cols-3">
            <UCheckbox label="Noten" default-value />
            <UCheckbox label="Paper" default-value />
            <UCheckbox label="Buch" default-value />
        </div>
        <div>
            <USelect v-model="value" multiple :items="items" class="w-48" />
        </div>
        <div>
            <UButton v-for="database in databases" :to="`database/${database.data.data.key}`" :key="database.key"> {{ database.data.key }}, {{ database.data.data.title }}</UButton>
        </div>
    </div>

</template>