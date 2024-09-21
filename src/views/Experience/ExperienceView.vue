<template>
  <MainLayout style="padding-top: 10rem; background-color: #006e55; min-height: 100vh;">
    <div class="w-100 d-flex flex-column align-items-center" style="padding-top: 6rem;">
      <div  class="container-experience bg-light">
        <div class="p-3 w-100">
          <h2 class="fw-bold">Cuentanos tus experiencias</h2>
          <form
            class="pt-1"
            method="post"
            @submit="(e) => handleSubmit(e)"
            id="formExperience"
            enctype="multipart/form-data"
          >
            <textarea
              style="background-color: #e4e6e8; resize: none"
              class="border-0 rounded w-100"
              name="experience"
              id="experience"
              placeholder="Escriba su esxperiencia aquí..."
              cols="60"
              rows="5"
            ></textarea>
            <div>
              <div
                class="pt-2 d-flex gap-2 align-items-center"
                style="max-height: 25rem"
              >
                <button type="submit" class="text-light btn btn-primary">
                  Enviar
                </button>
                <input
                  class="d-none"
                  id="image"
                  type="file"
                  name="image"
                  accept="image/*"
                  @change="
                    (e) => previewImage(e, 'preview-image')
                  "
                />
                <v-icon
                  name="bi-camera-fill"
                  scale="2"
                  @click="() => clickFileInput('image')"
                ></v-icon>
                <div
                  v-show="handleShowPreviewImage"
                  class="w-25 position-relative"
                  style="height: 7rem"
                >
                  <v-icon
                    name="fa-window-close"
                    scale="1"
                    fill="red"
                    class="position-absolute end-0"
                    @click="handleHidePreviewImage"
                  ></v-icon>
                  <img
                    class="w-100 h-100"
                    style="object-fit: cover"
                    id="preview-image"
                    src=""
                    alt="imagen seleccionada previsualizada"
                  />
                </div>
              </div>
            </div>
          </form>
          <div>
            
            <PublicationPartial />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { computed } from "vue";
import { clickFileInput, previewImage } from "@/helpers/inputs.js";
import FetchService from "@/services/FetchService";
import MainLayout from "@/layouts/MainLayout.vue";
import { sweetAlert } from "@/helpers/alerts";
import PublicationPartial from "./partials/PublicationPartial.vue";
import { useMainStore } from "@/store/mainStore";



const fetchService = new FetchService();

const fetchUrl = "http://127.0.0.1:8000/api/posts";
const fetchOptions = {
  body: null,
};

const handleShowPreviewImage = computed(() => useMainStore().previewImage);

const handleHidePreviewImage = ()=> useMainStore().setPreviewImage(false);



const successResponse = (response) => {
  sweetAlert({ title: "Exito", text: response.msg, icon: "success" });
  useMainStore().setData(true);
};

const errorResponse = (response) => {
  sweetAlert({ title: "Error", text: response.errMessage, icon: "error" });
};

const fetchOptionsBody = (idForm) => {
  const $form = document.getElementById(idForm);
  fetchOptions.body = new FormData($form);
};

const cleanForm = (idForm) => {
  const $form = document.getElementById(idForm);
  $form.reset();
};

const handleSubmit = async (e) => {
  e.preventDefault();
  fetchOptionsBody("formExperience");
  await fetchService.post(
    fetchUrl,
    fetchOptions,
    successResponse,
    errorResponse
  );
  cleanForm("formExperience");
};
</script>

<style>
@media(min-width: 767px){
  .container-experience{
    max-width: 50%;
  }
}

@media (max-width: 767px) {
  .container-experience{
    max-width: 100%;
  }

}

</style>
