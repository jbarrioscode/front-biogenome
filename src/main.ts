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

// Importing axios
import axios from 'axios'

const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(axios)
app.use(CoreuiVue)
app.provide('icons', icons)
app.component('CIcon', CIcon)
app.mount('#app')
