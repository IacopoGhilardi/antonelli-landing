<template>
  <UApp>
    <!-- UMain cresce per riempire lo spazio -->
    <UMain class="flex flex-col min-h-screen">
      <Header />
      <NuxtLayout>
        <NuxtPage class="flex-grow" />
      </NuxtLayout>
      <Footer />
    </UMain>
  </UApp>
</template>

<script setup lang="ts">
import Header from "~/layout/header.vue";
import Footer from "~/layout/footer.vue";
</script>
