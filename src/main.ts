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

/* Pulse Loader */
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

/* FontAwesome */
import FontAwesomeIcon from "@/components/icons"

/* Vue Signature PAD */
import Vue3Signature from "vue3-signature"

/* Vue QuillEditor */
import {QuillEditor} from "@vueup/vue-quill";
import '@vueup/vue-quill/dist/vue-quill.snow.css';

/* Vue Select */
import VueSelect from "vue3-select-component";

/** Vue Input Multi Select */
import VueMultiselect from "vue-multiselect";
import 'vue-multiselect/dist/vue-multiselect.css'

/** Vue DaysJs */
import * as dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

/** HighCharts **/
import HighchartsVue from 'highcharts-vue'


const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(CoreuiVue)
app.use(VueSweetalert2)
app.use(Vue3Signature)
app.use(HighchartsVue, {
    tagName: 'charts',
})

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('table-lite', VueTableLite)
app.component('pulse-loader', PulseLoader)
app.component('QuillEditor', QuillEditor)
app.component('custom-select', VueSelect)
app.component('VueMultiselect', VueMultiselect)
app.provide('icons', icons)
app.component('CIcon', CIcon)

app.config.globalProperties.$dayjs = dayjs.extend(relativeTime);
app.config.globalProperties.$dayjs = dayjs.extend(utc);
app.config.globalProperties.$dayjs = dayjs.extend(timezone);

app.mount('#app')
