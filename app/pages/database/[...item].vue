<script setup>
const route = useRoute()
const supabase = useSupabaseClient()

const item = String(route.params.item)


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


const {
  data: paper,
  pending,
  error
} = await useAsyncData(
  `database-${item}`,
  async () => {
    const { data, error } = await supabase
      .from('mi_database')
      .select('*')
      .eq('id', item)
      .single()

    if (error) {
      throw error
    }

    return data
  }
)

</script>

<template>
  <div class="grid gap-5 grid-cols-[25%_50%_25%]  items-start">
    <div class="bg-blue-400">
      Platzhalter links
    </div>
    <p v-if="pending">Lade...</p>

    <p v-else-if="error">
      {{ error.message }}
    </p>

    <div v-else class="grid grid-rows-10 items-start bg-amber-500">
      <dl>
        <dt class="font-bold">Titel</dt>
        <dd>{{ paper.data.data.title }}</dd>

        <dt class="font-bold">Autor:innen</dt>
        <dd>{{ formatCreators(paper.data.data?.creators) }}</dd>

        <dt class="font-bold">Abstract</dt>
        <dd>{{ paper.data.data.abstractNote }}</dd>

        <dt class="font-bold">Publisher</dt>
        <dd>{{ paper.data.data.publisher }}</dd>
  
        <dt class="font-bold">Sprache</dt>
        <dd>{{ paper.data.data.language }}</dd>

        <dt class="font-bold">Url</dt>
        <dd>{{ paper.data.data.url }}</dd>

        <dt class="font-bold">DOI</dt>
        <dd>{{ paper.data.data.DOI }}</dd>

        <dt class="font-bold">ISSN</dt>
        <dd>{{ paper.data.data.ISSN }}</dd>
  
      </dl>

    </div>
    <div class="bg-green-400">
      Platzhalter rechts <br>
      Suche
    </div>
  </div>
</template>