<template>
  <!-- Button trigger modal -->

  <!-- Modal -->
  <Teleport to="#modal">
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content  rounded">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              @click="handleShowModal"
            ></button>
          </div>
          <div class="modal-body row row-cols-2">
            <div class="col" v-if="props.modalProps.image">
              <img
                class="img-fluid"
                :src="props.modalProps.image.url"
                alt="imagen modal"
              />
            </div>
            <div class="col" v-if="props.modalProps.title">
              <h3>{{ props.modalProps.title }}</h3>
              <p>{{  handleContent(props.modalProps.title) }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
              @click="handleShowModal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { defineProps, onMounted, ref, watch, defineExpose } from "vue";
import { Modal } from "bootstrap";

let modal;

const CONTENT = {
  bariloche: {
    text: `Oficialmente conocida como San Carlos de 
Bariloche, es una ciudad ubicada en la provincia de 
Río Negro, a orillas del lago Nahuel Huapi, en la región 
de los Andes Patagónicos. 
Es famosa por sus paisajes montañosos, el esquí en 
el Cerro Catedral y la producción de chocolates. `,
  },
  bolson: {
    text: `Es una ciudad en la provincia de Río Negro, en la 
región patagónica, conocida por su entorno natural y 
su estilo de vida relajado. Rodeada de montañas y 
bosques, es un lugar popular para el ecoturismo, el 
senderismo y la vida en contacto con la naturaleza. 
También es conocida por su feria artesanal y su ambiente bohemio. `,
  },
  grutas: {
    text: `Es una localidad en la provincia de Río Negro, situada 
a orillas del Atlántico. Es famosa por sus playas de 
arena blanca y aguas cálidas, así como por sus acantilados y formaciones rocosas que forman cuevas en 
la costa. Es un destino turístico popular durante la 
temporada de verano `,
  },
  viedma: {
    text: `Es la capital de la provincia de Río Negro, en Argentina. Está situada en la región patagónica, a orillas del 
río Negro, cerca de su desembocadura en el Atlántico. Es un centro administrativo y comercial, con un 
clima templado y una rica historia que incluye edificios coloniales y culturales.`,
  },
  cajon_azul: {
    text: `Es una hermosa área natural ubicada en la provincia 
de Río Negro, cerca de la ciudad de El Bolsón. Es conocida por su entorno montañoso y sus aguas cristalinas. Es ideal para el senderismo y el contacto con la 
naturaleza, ofreciendo vistas panorámicas y un ambiente tranquilo`,
  },
};

const props = defineProps({
  modalProps: {
    require: true,
    type: Object,
  },
});

const showModal = ref(false);

onMounted(() => {
  modal = new Modal(document.getElementById("staticBackdrop"));
});

watch(showModal, (newModal) => {
  if (newModal) modal.show();
  else modal.hide();
});

const handleContent = (title) => {
  let content;
  switch (title) {
    case "Bariloche":
      content = CONTENT.bariloche.text;
      break;

    case "El Bolsón":
      content = CONTENT.bolson.text;
      break;

    case "Grutas":
      content = CONTENT.grutas.text;
      break;
    case "Viedma":
      content = CONTENT.viedma.text;
      break;
    case "Cajón Azul":
      content = CONTENT.cajon_azul.text;
      break;
  }
  return content;
};

const handleShowModal = () => (showModal.value = !showModal.value);

defineExpose({ handleShowModal });
</script>

<style></style>
