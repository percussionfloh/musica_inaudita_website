<script setup>

</script>

<template>
  <UFooter class="bg-color: bg-fuchsia-300">
    <template #left >
        <img src="../assets/logo_transparent.png" alt="Logo" />
    </template>

    <template #right>
        <p class="text-sm text-black">Copyright © {{ new Date().getFullYear() }}</p>
    </template>
  </UFooter>
</template>
