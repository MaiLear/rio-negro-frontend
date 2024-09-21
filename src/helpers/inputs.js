import { useMainStore } from "@/store/mainStore";

export const clickFileInput = (idFileInput)=>{
    
    const $fileInput = document.getElementById(idFileInput);
    $fileInput.click()
    
}
export const previewImage = (event,idPreviewImage)=>{
    useMainStore().setPreviewImage(true);
    const [File] = event.target.files;
    const $image = document.getElementById(idPreviewImage);
    $image.src = URL.createObjectURL(File);

}

