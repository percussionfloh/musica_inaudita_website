<script setup>


</script>

<template >
  <UContainer class="grid gap-12 grid-rows-5 items-start">
    <div class="bg-fuchsia-500">News</div>
    <div>Kommende Projekte</div>
    <div>Letzte Projekte</div>
    <div class="grid gap-12 grid-cols-2 self-center bg-amber-400">
      <div class="m-6">    
        <ScriptInstagramEmbed post-url="https://www.instagram.com/p/DXOQfxriNLR/?img_index=1" :captions="true"/>
      </div>
      <div class="m-6">      
        <ScriptInstagramEmbed post-url="https://www.instagram.com/p/DXcEhknCE27/" :captions="true"/>
      </div>
    </div>
   </UContainer>
</template>