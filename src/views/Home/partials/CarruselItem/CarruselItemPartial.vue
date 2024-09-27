<template>
  <div
    :class="index == 0 
    ? 'carousel-item active' 
    : 'carousel-item '"
    v-for="(item, index) in ITEMS"
    :key="index"
  >
    <div class="card rounded w-100 h-100">
      <img
        :src="item.image.url"
        class="d-block w-100 h-100 img-top rounded-top"
        :alt="item.image.alt"
        style="object-fit: cover;"
      />
      <div :class="`card-body ${item.description.class}`">
        <span class="py-5 text-light fs-3">
          {{ item.description.text }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const ITEMS = [
  {
    image: {
      url: "/img/slider-1.jpg",
      alt: "imagen carrusel",
    },
    description: {
      text: "Sumergete en el paraisode aguas cristalinas",
      class: "bg-primary text-center",
    },
  },
  {
    image: {
      url: "/img/slider-3.jpg",
      alt: "imagen carrusel",
    },
    description: {
      text: "Ciudad de Choele Choel",
      class: "bg-danger text-center",
    },
  },
  {
    image: {
      url: "/img/slider-2.jpg",
      alt: "imagen carrusel",
    },
    description: {
      text: "Fiesta de la Vendimia",
      class: "bg-success text-center",
    },
  },
];
</script>

<style></style>
