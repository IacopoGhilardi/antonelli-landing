<script setup lang="ts">
import { professionista, whatsappUrl } from '~/utils/site'
</script>

<template>
  <!--
    Solo icona: l'etichetta estesa la porta già il pulsante nell'header.
    Su mobile, dove quel pulsante è dentro il menu a scomparsa, questo
    resta l'unico contatto sempre a portata di pollice.
  -->
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="`Scrivi su WhatsApp a ${professionista.nome}`"
    title="Scrivimi su WhatsApp"
    class="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition duration-300 hover:bg-[#1EBE5A] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] motion-safe:hover:-translate-y-0.5"
  >
    <AtomsWhatsAppIcon class="h-7 w-7" />
  </a>
</template>
