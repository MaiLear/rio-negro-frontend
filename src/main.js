import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiCameraFill,PxLoader,BiWhatsapp,BiYoutube,BiFileEarmarkPost,FaWindowClose } from "oh-vue-icons/icons";
import { createPinia } from 'pinia'

addIcons(BiCameraFill,PxLoader,BiWhatsapp,BiYoutube,BiFileEarmarkPost,FaWindowClose);

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.component("v-icon", OhVueIcon);
app.mount('#app')
