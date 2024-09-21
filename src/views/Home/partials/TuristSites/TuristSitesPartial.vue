<template>
  <figure
    class="col"
    v-for="turist_site of TURIST_SITES"
    :key="turist_site.name"
  >
    <div class="position-relative w-100 h-100">
      <span
        class="position-absolute d-flex justify-content-center fs-2 translate-middle badge rounded-circle bg-danger w-25 h-25"
        style="top: 30%; left: 8%"
      >
        {{ turist_site.position }}
      </span>
      <img
        class="mw-100 h-100 rounded-circle"
        :src="turist_site.image.url"
        :alt="turist_site.image.alt"
        @click="handleClick"
      />
    </div>
    <figcaption class="text-light text-center fs-2">
      {{ turist_site.name }}
    </figcaption>
  </figure>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["handleClickTuristSites"]);

const TURIST_SITES = [
  {
    name: "Bariloche",
    image: {
      url: "/img/sitio-turistico-1.jpg",
      alt: "lugares turisticos",
    },
    position: "1",
  },
  {
    name: "El Bolsón",
    image: {
      url: "/img/sitio-turistico-2.jpg",
      alt: "lugares turisticos",
    },
    position: "2",
  },
  {
    name: "Grutas",
    image: {
      url: "/img/sitio-turistico-3.jpg",
      alt: "lugares turisticos",
    },
    position: "3",
  },
  {
    name: "Viedma",
    image: {
      url: "/img/sitio-turistico-1.jpg",
      alt: "lugares turisticos",
    },
    position: "4",
  },
  {
    name: "Cajón Azul",
    image: {
      url: "/img/sitio-turistico-1.jpg",
      alt: "lugares turisticos",
    },
    position: "5",
  },
];

const handleClick = (e) => {
  emits("handleClickTuristSites", e);
};
</script>

<style></style>
