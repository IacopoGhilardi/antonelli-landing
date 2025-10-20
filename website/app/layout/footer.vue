<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <UFooter class="bg-gray-900 text-gray-100 border-t border-gray-800 py-10">
    <!-- Slot TOP -->
    <template #top>
      <div class="max-w-screen-lg mx-auto w-full flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <!-- Info personali -->
        <div class="mb-6 md:mb-0">
          <h3 class="text-lg font-semibold text-white">
            Gianluca Antonelli — Fisioterapista
          </h3>
          <div class="mt-3 space-y-1 text-gray-300">
            <p>
              📞
              <a href="tel:+393491585839" class="hover:underline">
                +39 349 1585839
              </a>
            </p>
            <p>
              ✉️
              <a
                  href="mailto:gianluca.antonelli@fisioterapia.it"
                  class="hover:underline"
              >
                gianluca.antonelli@fisioterapia.it
              </a>
            </p>
          </div>
        </div>

        <!-- Navigazione -->
        <div class="mb-4 md:mb-0 space-y-1 text-gray-300">
          <nav class="flex flex-col md:flex-row gap-3 md:gap-6 justify-center">
            <ULink to="/" class="text-gray-300 hover:text-white transition">Home</ULink>
            <ULink to="/chi-sono" class="text-gray-300 hover:text-white transition">Chi sono</ULink>
            <ULink to="/trattamenti" class="text-gray-300 hover:text-white transition">Trattamenti</ULink>
            <ULink to="/contatti" class="text-gray-300 hover:text-white transition">Contatti</ULink>
          </nav>
        </div>

        <!-- Social -->
        <div class="flex gap-3">
          <UButton
              icon="i-simple-icons-linkedin"
              color="neutral"
              variant="ghost"
              class="text-gray-300 hover:text-white"
              to="https://www.linkedin.com/"
              target="_blank"
              aria-label="LinkedIn"
          />
          <UButton
              icon="i-simple-icons-instagram"
              color="neutral"
              variant="ghost"
              class="text-gray-300 hover:text-white"
              to="https://www.instagram.com/"
              target="_blank"
              aria-label="Instagram"
          />
        </div>
      </div>
    </template>

    <!-- Slot BOTTOM -->
    <template #bottom>
      <div class="text-center text-sm text-gray-400 mt-8 border-t border-gray-800 pt-4">
        © {{ year }} Gianluca Antonelli — Fisioterapista · Tutti i diritti riservati
      </div>
    </template>

  </UFooter>
</template>
