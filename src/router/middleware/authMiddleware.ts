import {useAuthStore} from "@/stores/authentication/authStore.ts";

export default (to, from, next) => {
    const authStore= useAuthStore()

    let exceptionalRoutes = ['login', 'reset-password']
    let isGoingExceptionalRoutes = exceptionalRoutes.includes(to.name)

    /**
     * IF THE USER IS NOT LOGGED IN
     */
    if (!authStore.loggedIn) {
        if (isGoingExceptionalRoutes) {
            next() // The user is not logged in but it's going to exceptional routes ? fine
            return
        } else {
            next({ name: 'login' })
            return
        } // other routes than exceptional paths => /login
    }

    /**
     * IF THE USER IS LOGGED IN
     */
    if (authStore.loggedIn && isGoingExceptionalRoutes) {
        next({ name: 'home', query: { 'redirect-reason': 'already logged' } })
    } else {
        next()
    }

}
