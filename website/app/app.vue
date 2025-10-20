<template>
  <UApp>
    <Header></Header>
    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>
    <Footer></Footer>
  </UApp>
</template>
<script setup lang="ts">
import Header from "~/layout/header.vue";
import Footer from "~/layout/footer.vue";
</script>