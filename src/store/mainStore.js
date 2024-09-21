import { ref } from "vue";
import { defineStore } from "pinia";

export const useMainStore = defineStore("mainStore", () => {
  const getData = ref(false);
  const previewImage = ref(false);

  const setData = (newValue) => (getData.value = newValue);
  const setPreviewImage = (newValue)=> previewImage.value = newValue;


  return { getData, setData, previewImage, setPreviewImage };
});
