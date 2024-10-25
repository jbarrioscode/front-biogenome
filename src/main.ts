import { createApp } from 'vue'
import {createPinia} from "pinia"

import './style.css'
import App from './App.vue'

// Importing router
import router from './router/index.ts'

// Installing whole package
import CoreuiVue from '@coreui/vue'
import CIcon from "@coreui/icons-vue"
import { iconsSet as icons } from '@/assets/icons'

/* Pinia Instance */
const pinia = createPinia()

/* VUE3 Table Lite */
import VueTableLite from "vue3-table-lite/ts"


/* VUE SweetAlert */
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(CoreuiVue)
app.use(VueSweetalert2)
app.component('table-lite', VueTableLite)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.mount('#app')
