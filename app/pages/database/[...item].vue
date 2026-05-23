<script setup>
const route = useRoute()
const supabase = useSupabaseClient()

const item = String(route.params.item)

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

    console.log(data)

    return data
  }
)

console.log(paper)
</script>

<template>
  <div>
    <p v-if="pending">Lade...</p>

    <p v-else-if="error">
      {{ error.message }}
    </p>

    <div v-else>
      <h1>{{ paper.data.data.title }}</h1>

      <p>
        DOI: {{ paper.data.data.DOI }}
      </p>
    </div>
  </div>
</template>