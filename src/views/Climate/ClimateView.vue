<template>
  <MainLayout>
    <section
      class="w-100 container-climate text-light d-flex flex-column flex-lg-row align-items-sm-center align-items-md-center justify-content-center justify-content-lg-between"
    >
      <div class="rounded bg-success opacity-75 align-self-center ms-4">
        <div class="p-5 text-center">
          <h1 class="fw-bolder display-3">RÍO NEGRO</h1>
          <h2>CLIMA</h2>
          <div
            class="mx-auto d-flex gap-1 justify-content-center align-items-center"
          >
            <span class="display-1">{{
              !fetchPending ? `${temperature}°C` : "cargando..."
            }}</span>
            <component :is="iconComponent"></component>
          </div>

          <button class="btn btn-light fs-4 mt-3" @click="handleClick">
            Mira el clima en tu ubicación actual
          </button>
        </div>
      </div>
      <div
        class="rounded-pill bg-success opacity-75 align-self-lg-end my-4 me-4"
      >
        <div class="p-1 px-5 text-center">
          <span class="d-block display-6 fw-bold">{{ currentHour }}</span>
          <span class="d-block display-6">{{ currentDate }}</span>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layouts/MainLayout.vue";
import { onMounted, ref, watch, onUnmounted, defineAsyncComponent } from "vue";
import FetchService from "@/services/FetchService";

const fetchService = new FetchService();
const fetchPending = ref(true);

const climateData = ref({});
const temperature = ref(null);
const initialLongitude = "-66.0284262";
const initialLatitude = "-23.0142915";
const initialRouteClimate = `https://api.openweathermap.org/data/2.5/weather?lat=${initialLatitude}&lon=${initialLongitude}&units=metric&lang=es&appid=d3f4172dd75347b1cf77d400f680d002`;
const routeClimate = ref(initialRouteClimate);
const date = new Date();
const initialCurrentHour = date.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});
const currentHour = ref(initialCurrentHour);
const currentDate = date.toLocaleDateString([], {
  year: "numeric",
  month: "short",
  day: "numeric",
});
let intervalHour;
let intervalClimate;
const iconComponent = ref(null);
const textContent = {
  first: "Mira el clima en tu ubicación actual",
  second: "Mira el clima de Rio Negro",
};

const successResponse = (response) => {
  climateData.value = response;
  temperature.value = climateData.value.main.temp;
  fetchPending.value = false;
};

const errorResponse = (error) => {
  console.log(error);
};

const getClimateData = async (route, success, error) => {
  await fetchService.get(route, success, error);
};

const getLocation = () => {
  const location = window.navigator.geolocation;
  if (!location) return;

  location.getCurrentPosition(
    (position) => {
      const lon = position.coords.longitude;
      const lat = position.coords.latitude;

      routeClimate.value = routeClimate.value
        .replace(initialLongitude, lon)
        .replace(initialLatitude, lat);
      console.log(
        `longitud: ${lon}, latitud: ${lat}, ruta ${routeClimate.value}`
      );
    },
    (error) => console.log("Error al obtener la ubicación " + error),
    {
      enableHighAccuracy: true,
    }
  );
};

const updateHour = () => {
  intervalHour = window.setInterval(() => {
    const second = new Date().getSeconds();

    if (second == 0) {
      currentHour.value = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    }
  }, 1000);
};

const updateClimate = () => {
  intervalClimate = setInterval(() => {
    (async function () {
      await getClimateData(routeClimate.value, successResponse, errorResponse);
    })();
  }, [480000]);
};

const updateTextContent = (e) => {
  const $element = e.target;
  $element.textContent =
    $element.textContent.trim() == textContent.first.trim()
      ? textContent.second
      : textContent.first;
};

const handleIconClimate = () => {
  iconComponent.value =
    temperature.value <= 15
      ? defineAsyncComponent(() =>
          import("@/components/icons/snowIconComponent.vue")
        )
      : defineAsyncComponent(() =>
          import("@/components/icons/sunIconComponent.vue")
        );
};

const handleClick = (e) => {
  if (e.target.textContent.trim() == textContent.first.trim()) getLocation();
  else routeClimate.value = initialRouteClimate;

  updateTextContent(e);
  fetchPending.value = true;
};

watch(
  () => routeClimate.value,
  async () => {
    await getClimateData(routeClimate.value, successResponse, errorResponse);
  }
);

watch(
  () => temperature.value,
  () => {
    handleIconClimate();
  }
);

onMounted(() => {
  (async function () {
    await getClimateData(routeClimate.value, successResponse, errorResponse);
  })();

  updateHour();
  updateClimate();
});

onUnmounted(() => {
  window.clearInterval(intervalHour);
  window.clearInterval(intervalClimate);
});
</script>

<style>
.container-climate {
  height: 100vh;
  background-image: url("@/../public/img/background-climate.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
