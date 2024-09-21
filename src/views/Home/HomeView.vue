<template>
  <MainLayout>
    <section class="first-section d-flex justify-content-between">
      <div class="align-self-center">
        <h1 class="ms-5 text-light display-4 fw-bolder">
          TURISMO QUE CUIDA,<br />NATURALEZA QUE INSPIRA
        </h1>
      </div>
      <span class="d-block fs-5 align-self-end text-light me-2"
        >El Bolsón, Rio Negro</span
      >
    </section>

    <div style="background-color: #b1cb3c">
      <img src="@/../public/svg/upper-wave.svg" alt="imagen forma ola" />
    </div>

    <section class="second-section d-flex flex-column align-items-center gap-5">
      <h2 class="text-light display-5 fw-bolder text-center">
        Top sitos turisticos
      </h2>
      <div
        class="row row-cols-1 row-cols-md-3 row-cols-lg-4 ps-4 w-75 h-100 gap-5 pb-5"
      >
        <TuristSitesPartial
          @handleClickTuristSites="handleClickTuristSites"
        />
      </div>
      <ModalComponent ref="handleShowModal" :modalProps="modalProps" />
      <img
        src="@/../public/svg/third-section-wave.svg"
        alt="imagen ola segunda sección"
      />
    </section>

    <section class="third-section">
      <p class="fs-3 pb-5 px-4 text-wrap" style="color: #006e55">
        ´´Río Negro, ubicado en la región patagónica de Argentina, es conocido
        por su diversidad de paisajes que van desde imponentes montañas y lagos
        cristalinos hasta vastas llanuras. La provincia ofrece una combinación
        única de belleza natural y riqueza cultural, con atracciones que
        incluyen el Parque Nacional Nahuel Huapi, la ciudad de San Carlos de
        Bariloche, y la histórica localidad de General Roca Ideal para los
        amantes de la naturaleza´
      </p>
    </section>

    <section class="fourth-section">
      <h2 class="text-light text-center display-5 pt-5">
        <span class="fw-bold">RÍO NEGRO</span> <br />
        FUERA DEL CAMINO
      </h2>
      <h3 class="text-light text-center mt-4 fst-italic">
        Vive una experiencia distinta al camino <br />
        habitual de todos
      </h3>

      <div class="w-100 d-flex justify-content-center mt-5">
        <div
          id="fourth-section-carousel"
          class="carousel carousel-dark slide w-50 py-5"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <CarruselItemPartial />
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#fourth-section-carousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#fourth-section-carousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>

    <section class="fifth-section">
      <h2 style="color: #006e55" class="text-center display-5">
        <span class="fw-bold">SABOR A</span><br />
        LA PATAGONIA
      </h2>

      <TypicalFoodsPartial />
    </section>

    <section>
      <h2 class="text-center display-5">
        <span class="text-success fw-bold">DEPORTE</span> <br />
        para todos
      </h2>
      <TypicalSportsPartial />
    </section>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import TuristSitesPartial from "./partials/TuristSites/TuristSitesPartial.vue";
import TypicalFoodsPartial from "./partials/TypicalFood/TypicalFoodsPartial.vue";
import TypicalSportsPartial from "./partials/TypicalSports/TypicalSportsPartial.vue";
import ModalComponent from "@/components/Modal/ModalComponent.vue";
import CarruselItemPartial from "./partials/CarruselItem/CarruselItemPartial.vue";
const modalProps = ref({});

const handleShowModal = ref(null);

const getProps = (e, tags) => {
  const { image } = tags;

  const props = {};
  const $target = e.target;

  switch ($target.tagName) {
    case image.tagName:
      props.image = { url: $target.src };
      props.title = $target.parentElement.nextSibling.textContent;
      break;
  }

  return props;
};

const handleClickTuristSites = (e) => {
  const image = { tagName: "IMG" };
  handleShowModal.value.handleShowModal();
  modalProps.value = getProps(e, { image });
};
</script>

<style>
.first-section {
  width: 100%;
  height: 100vh;
  background-image: url("@/../public/img/background-home.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}

.second-section {
  width: 100%;
  height: 100%;
  background-color: #59af40;
}

.third-section {
  width: 100%;
  height: 100%;
}

.fourth-section {
  width: 100%;
  height: 100%;
  background-color: #006e55;
}

.fifth-section {
  background-image: url("@/../public/img/background-fifth-section.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}


</style>
