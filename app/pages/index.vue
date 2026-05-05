<script setup>

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

<template >
  <UContainer class="grid gap-12 grid-rows-2 items-center">
      <div class="grid items-center m-6">
          <div>
            <dl>
              <dt class="font-bold">Titel</dt>
              <dd v-for="database in databases" :key="database.key"> {{ database.data.data.title }}</dd>

              <dt class="font-bold">Autor:innen</dt>
              <dd v-for="database in databases" :key="database.key"> {{ formatCreators(database.data.data?.creators) }}</dd>

              <dt class="font-bold">ISSN</dt>
              <dd v-for="database in databases" :key="database.key"> {{ database.data.data.ISSN }}</dd>

              <dt class="font-bold">DOI</dt>
              <dd v-for="database in databases" :key="database.key"> {{ database.data.data.DOI }}</dd>

              <dt class="font-bold">url</dt>
              <dd v-for="database in databases" :key="database.key"> {{ database.data.data.url }}</dd>              


              <dt class="font-bold">Abstract</dt>
              <dd v-for="database in databases" :key="database.key"> {{ database.data.data.abstractNote }} </dd>
            </dl>
          </div>
      </div>
  </UContainer>
</template>