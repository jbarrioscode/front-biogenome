import {createRouter, createWebHashHistory} from "vue-router";
import routes from "./routes/index.ts"

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    strict: true,
    scrollBehavior() {
        return {top: 0}
    }
})

export default router