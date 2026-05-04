import { createClient } from '@supabase/supabase-js'


export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  const supabase = createClient(
    config.public.supabaseUrl,
    config.supabaseKey

  )

const ZOTERO_API_KEY = config.zoteroApiKey
const ZOTERO_GROUP_ID = config.zoteroGroupId

  try {
    // Daten von Zotero holen
    const res = await fetch(
      `https://api.zotero.org/groups/6538938/items?limit=2`,
      {
        headers: {
          'Zotero-API-Key': ZOTERO_API_KEY
        }
      }
    )

    const raw = await res.json()

    // normalize response
    const csl = Array.isArray(raw)
    ? raw
    : raw.items
        ? raw.items.map((i: any) => i.data ?? i)
        : []


    // Transformieren
    const transformed = csl.map((item: any) => {
      const date = item.issued?.['date-parts']?.[0] || []

      return {
        id: item.key,
        type: item.type || null,
        title: item.title || null,
        year: date[0] ? parseInt(date[0]) : null,
        data: item
      }
    })

    // Upsert in Supabase
    const { error } = await supabase
      .from('mi_database')
      .upsert(transformed, { onConflict: 'id' })

    if (error) {
      return { success: false, error }
    }

    return {
      success: true,
      count: transformed.length
    }

  } catch (err: any) {
    return {
      success: false,
      error: err.message
    }
}
})
