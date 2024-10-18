import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthenticationView from "@/views/authentication/AuthenticationView.vue";
import Login from "@/components/authentication/Login.vue";
import ResetPassword from "@/components/authentication/ResetPassword.vue";
import NotFoundPage from "@/views/errors/NOTFOUND/NotFoundPage.vue";
import UnauthorizedPage from "@/views/errors/UNAUTHORIZED/UnauthorizedPage.vue";

const routesObject: any = [
    {
        path: '/',
        component: DefaultLayout,
        redirect: () =>{
            return {name: "auth"}
        }
    },
    {
        path: "/auth",
        name: "auth",
        //meta: {middleware: [guest]},
        component: AuthenticationView,
        redirect: () => {
            return {name: "login"};
        },
        children: [
            {
                path: "/auth/login",
                name: "login",
                //meta: {middleware: [guest]},
                component: Login,
            },
            {
                path: "/auth/reset-password",
                name: "reset-password",
                //meta: {middleware: [guest]},
                component: ResetPassword,
            },
        ],
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: DefaultLayout,
    },
    {
        path: "/unauthorized",
        name: "unauthorized",
        component: UnauthorizedPage,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "PageNotFound",
        component: NotFoundPage,
    },
]
export default routesObject