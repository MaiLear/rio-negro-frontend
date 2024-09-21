<template>
  <div
    class="row row-cols-1 row-cols-lg-2 my-5 px-5 py-4"
    v-for="(typical_food, index) of TYPICAL_FOODS"
    :key="typical_food.title"
  >
    <RowColumnLayout>
      <template v-slot:[handleDynamicSlotName(index).firstPosition]>
        <div class="col">
          <img
            class="img-fluid"
            :src="typical_food.image.url"
            :alt="typical_food.image.alt"
          />
        </div>
      </template>
      <template v-slot:[handleDynamicSlotName(index).secondPosition]>
        <div class="col">
          <span
            class="bg-danger text-light rounded-pill py-3 px-5 fs-4 d-inline-block"
            >{{ typical_food.title }}</span
          >
          <p class="pt-3 fs-5">
            {{ typical_food.paragraph.normal }}
            <span class="text-primary">{{
              typical_food.paragraph.coloredParagraph
            }}</span>
          </p>
        </div>
      </template>
    </RowColumnLayout>
    <hr class="w-100">
  </div>
</template>

<script setup>
import RowColumnLayout from "@/layouts/RowColumnLayout.vue";
const TYPICAL_FOODS = [
  {
    image: {
      url: "img/fifth-section-1.png",
      alt: "Comidas tipicas",
    },
    title: "Salmon",
    paragraph: {
      normal: `En Río Negro, el salmón es una parte integral de la cultura
                gastronómica y económica de la región. Esta provincia, ubicada
                en la Patagonia argentina, ofrece condiciones ideales para la
                acuicultura de salmón gracias a sus climas fríos y aguas
                limpias.`,
      coloredParagraph: `El salmón atlántico es el más comúnmente cultivado en la
                  zona, aunque también se encuentran variedades como el coho y
                  el chinook.`,
    },
  },
  {
    image: {
      url: "img/fifth-section-2.png",
      alt: "Comidas tipicas",
    },
    title: "Cordero",
    paragraph: {
      normal: `El cordero patagónico es conocido por su sabor distintivo y su
                ternura, atributos que se deben en parte a la dieta de las
                ovejas, que se alimentan principalmente de pastos naturales.`,
      coloredParagraph: `Esta alimentación contribuye a un sabor único y una textura
                  suave que distingue al cordero de la Patagonia de otras
                  variedades.`,
    },
  },
  {
    image: {
      url: "img/fifth-section-3.png",
      alt: "Comidas tipicas",
    },
    title: "Vino",
    paragraph: {
      normal: `El vino de la Patagonia ha ganado reconocimiento por su calidad
                y carácter distintivo. Esta región, con sus condiciones
                climáticas extremas y su suelo diverso, ofrece un entorno ideal
                para el cultivo de uvas de alta calidad.`,
      coloredParagraph: `Los viñedos se encuentran principalmente en las provincias de
                  Río Negro y Neuquén, donde el clima frío y seco es perfecto
                  para la producción de vinos con una acidez equilibrada y una
                  concentración de sabores notable.`,
    },
  },
  {
    image: {
      url: "img/fifth-section-4.png",
      alt: "Comidas tipicas",
    },
    title: "Cerveza",
    paragraph: {
      normal: `Las cervecerías en la Patagonia a menudo utilizan ingredientes
                locales, como aguas puras de los glaciares y granos de alta
                calidad, para crear cervezas que capturan la esencia de la
                región.`,
      coloredParagraph: `La influencia de la naturaleza patagónica se refleja en las
                  cervezas, que pueden presentar notas frescas y minerales, así
                  como en el uso de ingredientes autóctonos para añadir un toque
                  distintivo`,
    },
  },
  {
    image: {
      url: "img/fifth-section-5.png",
      alt: "Comidas tipicas",
    },
    title: "Frutas",
    paragraph: {
      normal: `En la Patagonia, especialmente en la provincia de Río Negro, la
                producción de frutas y verduras se destaca por la calidad y
                sabor únicos que aportan las condiciones climáticas y los suelos
                de la región.`,
      coloredParagraph: `Las frutas como la pera, la manzana y la cereza son
                  emblemáticas de esta área, beneciándose de un clima fresco y
                  seco que contribuye a su sabor distintivo.`,
    },
  },
  {
    image: {
      url: "img/fifth-section-6.png",
      alt: "Comidas tipicas",
    },
    title: "Hortalizas",
    paragraph: {
      normal: `El cultivo de estas hortalizas en la Patagonia es una actividad
                clave para la agricultura regional, con prácticas que buscan
                equilibrar la producción con la sostenibilidad ambiental. La
                región no solo abastece el mercado local, sino que también
                exporta sus productos, contribuyendo a la economía y
                fortaleciendo el sector agrícola.`,
      coloredParagraph: `Entre las mas comunes la papa, zanahoria, repollo y cebolla
                  entre otros.`,
    },
  },
];

const handleDynamicSlotName = (index)=>{
  return index % 2 != 0 
  ? {firstPosition: "firstPosition",secondPosition:"secondPosition"}
  : {firstPosition: "secondPosition",secondPosition:"firstPosition"};
}
</script>

<style></style>
