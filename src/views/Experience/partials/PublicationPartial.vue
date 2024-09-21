<template>
  <div
    class="card my-5 w-100"
    v-for="(value, index) in data"
    :key="value['id']"
  >
    <div class="card-header">
      <div class="d-flex gap-2">
        <h3>Publicacion {{ index + 1 }}</h3>
      </div>
    </div>
    <div class="card-body">
      <p>{{ value["experience"] }}</p>
      <img
        class="img-fluid mt-2 rounded"
        :src="value['image']"
        alt="imagen de experiencia"
      />
    </div>
  </div>
  <div v-if="handleBeforeLoad" class="w-100 d-flex flex-column align-items-center my-5">
    <LoaderComponent v-if="showLoader" />
    <div class="d-flex flex-column align-items-center" v-if="showNotFound">
      <v-icon name="bi-file-earmark-post" scale="2"></v-icon>
      <h3  class="pt-4">No hay publicaciones</h3>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch,computed } from "vue";
import FetchService from "@/services/FetchService";
import { useMainStore } from "@/store/mainStore";
import LoaderComponent from "@/components/Loader/LoaderComponent.vue";

const fetchService = new FetchService();
const fetchUrl = "http://127.0.0.1:8000/api/posts";
const data = ref([]);
const showLoader = ref(true);
const showNotFound = ref(false);

const handleBeforeLoad = computed(()=>{
  return showNotFound.value || showLoader.value ? true : false;
})

const successResponse = (response) => {
  data.value = response;
};

const errorResponse = (response) => {
  console.log(response);
  showNotFound.value = true;
};

const getData = async () => {
  await fetchService.get(fetchUrl, successResponse, errorResponse);
};

onMounted(async () => {
  await getData();
  showLoader.value = false;
  if (data.value.length == 0) showNotFound.value = true;
  
});

watch(
  () => useMainStore().getData,
  (newValue) => {
    if (newValue) getData();
  }
);
</script>

<style></style>
