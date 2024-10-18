import {createRouter, createWebHashHistory} from "vue-router";
import routesObject from "./routes";
import authMiddleware from "./middleware/authMiddleware.ts";

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: routesObject,
    strict: true,
    scrollBehavior() {
        return {top: 0}
    }
})

router.beforeEach(authMiddleware)

export default router