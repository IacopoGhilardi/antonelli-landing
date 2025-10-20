<template>
  <UContainer>

    <!-- Titolo -->
    <PageTitle title="Chi sono" subtitle="Conosci meglio il mio percorso professionale e il mio approccio alla fisioterapia."></PageTitle>

    <!-- Sezione principale -->
    <div class="grid md:grid-cols-2 gap-12 items-center my-24 px-4">
      <!-- Testo -->
      <div class="space-y-4 text-gray-700 dark:text-gray-300">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">
          Ciao, sono Gianluca Antonelli
        </h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus ipsam quasi totam. A ad animi beatae dignissimos dolorem est hic, ipsum iste magni nesciunt odit officia, placeat quis saepe.
        </p>


        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus ipsam quasi totam. A ad animi beatae dignissimos dolorem est hic, ipsum iste magni nesciunt odit officia, placeat quis saepe.
        </p>


        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab delectus ipsam quasi totam. A ad animi beatae dignissimos dolorem est hic, ipsum iste magni nesciunt odit officia, placeat quis saepe.
        </p>

        <UButton
            to="/contatti"
            color="primary"
            icon="i-heroicons-arrow-right"
            class="mt-4"
        >
          Contattami
        </UButton>
      </div>

      <!-- Immagine -->
      <div class="flex justify-center">
        <img
            src="#"
            alt="Gianluca Antonelli fisioterapista"
            class="rounded-2xl shadow-lg max-w-full h-auto object-cover"
        />
      </div>
    </div>

  </UContainer>
</template>
