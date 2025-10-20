<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <UFooter class="border-t border-gray-200 dark:border-gray-800 py-10">
    <div class="w-full flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">

      <!-- Info personali -->
      <div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          Gianluca Antonelli — Fisioterapista
        </h3>
        <div class="mt-3 space-y-1 text-gray-700 dark:text-gray-300">
          <p>
            📞 <a href="tel:+393491585839" class="hover:underline">+39 349 1585839</a>
          </p>
          <p>
            ✉️ <a href="mailto:gianluca.antonelli@fisioterapia.it" class="hover:underline">
            gianluca.antonelli@fisioterapia.it
          </a>
          </p>
        </div>
      </div>

      <!-- Navigazione utile -->
      <div class="space-y-1">
        <nav class="flex flex-col md:flex-row gap-3 md:gap-6 justify-center">
          <ULink to="/">Home</ULink>
          <ULink to="/chi-sono">Chi sono</ULink>
          <ULink to="/trattamenti">Trattamenti</ULink>
          <ULink to="/contatti">Contatti</ULink>
        </nav>
      </div>

      <!-- Social -->
      <div class="flex gap-3">
        <UButton
            icon="i-simple-icons-linkedin"
            color="neutral"
            variant="ghost"
            to="https://www.linkedin.com/"
            target="_blank"
            aria-label="LinkedIn"
        />
        <UButton
            icon="i-simple-icons-instagram"
            color="neutral"
            variant="ghost"
            to="https://www.instagram.com/"
            target="_blank"
            aria-label="Instagram"
        />
      </div>
    </div>
  </UFooter>
</template>
