<template>
  <div
    class="row row-cols-1 row-cols-lg-2 my-5 px-5 py-4"
    v-for="(sport, index) of SPORTS"
    :key="sport.title.normal"
  >
    <RowColumnLayout>
      <template v-slot:[handleDynamicSlotName(index).firstPosition]>
        <div class="col">
          <img
            class="img-fluid"
            :src="sport.image.url"
            :alt="sport.image.alt"
          />
        </div>
      </template>
      <template v-slot:[handleDynamicSlotName(index).secondPosition]>
        <div class="col">
          <h3 class="text-primary">
            {{ sport.title.normal }}
            <span class="fw-bold"
              >{{ sport.title.colored }}<span class="text-success"></span
            ></span>
          </h3>
          <p class="fs-5">
            {{ sport.paragraphs.first }}
          </p>
          <p class="fs-5">
            {{ sport.paragraphs.second }}
          </p>
        </div>
      </template>
    </RowColumnLayout>
    <hr class="w-100" />
  </div>
</template>

<script setup>
import RowColumnLayout from "@/layouts/RowColumnLayout.vue";

const SPORTS = [
  {
    image: {
      url: "/img/sixth-section-1.jpg",
      alt: "imagen de deporte",
    },
    title: {
      normal: `Diversión en
                  la Nieve:`,
      colored: `ESQUI`,
    },
    paragraphs: {
      first: `"Río Negro es un destino imperdible para los entusiastas del
                esquí, con sus impresionantes centros de esquí en la Patagonia
                argentina. La estación de esquí Cerro Catedral, cerca de San
                Carlos de Bariloche, ofrece una de las mejores experiencias en
                América del Sur, con una amplia variedad de pistas para todos
                los niveles y paisajes espectaculares.`,
      second: `Además, Cerro Chapelco y Cerro Perito Moreno brindan
                alternativas igualmente emocionantes. Ven a disfrutar de la
                nieve, la aventura y la belleza natural en un entorno.`,
    },
  },
  {
    image: {
      url: "/img/sixth-section-2.jpg",
      alt: "imagen de deporte",
    },
    title: {
      normal: `Una Aventura
                  en el Cielo:`,
      colored: `PARAPENTE`,
    },
    paragraphs: {
      first: `El parapente es un deporte de vuelo libre que permite a los
                pilotos volar utilizando un a la ligera y flexible. En la
                Patagonia, este deporte se ha vuelto cada vez más popular debido
                a las condiciones ideales que ofrece la región para el vuelo en
                parapente`,
      second: `La Patagonia, con su paisaje montañoso y vastas extensiones de
                terreno, proporciona un entorno espectacular para el parapente.`,
    },
  },
  {
    image: {
      url: "/img/sixth-section-3.jpg",
      alt: "imagen de deporte",
    },
    title: {
      normal: `Adrenalina 
                  y Naturaleza:`,
      colored: `RAFTING`,
    },
    paragraphs: {
      first: `El rafting en la Patagonia es una experiencia emocionante y
                enriquecedora que aprovecha los ríos caudalosos y el
                impresionante paisaje natural de la región. Este deporte, que
                consiste en descender ríos en balsas inflables, ofrece una
                combinación única de adrenalina y belleza escénica`,
      second: `Los ríos patagónicos, como el Río Futaleufú, el Río Manso y el
                Río Corcovado, son conocidos por sus intensos rápidos y el
                entorno espectacular que los rodea.`,
    },
  },
];

const handleDynamicSlotName = (index) => {
  return index % 2 != 0
    ? { firstPosition: "firstPosition", secondPosition: "secondPosition" }
    : { firstPosition: "secondPosition", secondPosition: "firstPosition" };
};
</script>

<style></style>
