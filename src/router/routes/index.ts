import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthenticationView from "@/views/authentication/AuthenticationView.vue";
import Login from "@/components/authentication/Login.vue";
import ResetPassword from "@/components/authentication/ResetPassword.vue";
import NotFoundPage from "@/views/errors/NOTFOUND/NotFoundPage.vue";
import UnauthorizedPage from "@/views/errors/UNAUTHORIZED/UnauthorizedPage.vue";
import PatientMainComponent from "@/components/patients/PatientMainComponent.vue";
import ReportsMainComponent from "@/components/reports/ReportsMainComponent.vue";
import SamplesMainComponent from "@/components/samples/SamplesMainComponent.vue";
import SettingsMainComponent from "@/components/settings/SettingsMainComponent.vue";
import UsersMainComponent from "@/components/settings/users/UsersMainComponent.vue";
import RolesMainComponent from "@/components/settings/roles/RolesMainComponent.vue";
import PermissionsMainComponent from "@/components/settings/permissions/PermissionsMainComponent.vue";
import HeadquartersMainComponent from "@/components/settings/headquarters/HeadquartersMainComponent.vue";
import PatientCreationMainComponent from "@/components/patients/patientCreation/PatientCreationMainComponent.vue";
import PatientClinicalInformationMainComponent
    from "@/components/patients/patientClinicalInformation/PatientClinicalInformationMainComponent.vue";
import InformedConsentsMainComponent from "@/components/settings/informedConsents/InformedConsentsMainComponent.vue";

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
        children: [
            {
                path: '/patients',
                name: 'patients',
                component: PatientMainComponent,
                children: [
                    {
                        path: '/creation',
                        name: 'creation',
                        component: PatientCreationMainComponent,
                    },
                    {
                        path: '/clinical-information',
                        name: 'clinical-information',
                        component: PatientClinicalInformationMainComponent,
                    },
                ]
            },
            {
                path: '/samples',
                name: 'samples',
                component: SamplesMainComponent,
            },
            {
                path: '/reports',
                name: 'reports',
                component: ReportsMainComponent,
            },
            {
                path: '/settings',
                name: 'settings',
                component: SettingsMainComponent,
                children: [
                    {
                        path: '/users',
                        name: 'users',
                        component: UsersMainComponent,
                    },
                    {
                        path: '/roles',
                        name: 'roles',
                        component: RolesMainComponent,
                    },
                    {
                        path: '/permissions',
                        name: 'permissions',
                        component: PermissionsMainComponent,
                    },
                    {
                        path: '/headquarters',
                        name: 'headquarters',
                        component: HeadquartersMainComponent,
                    },
                    {
                        path: '/informed-consents',
                        name: 'informed-consents',
                        component: InformedConsentsMainComponent,
                    }
                ]
            },
        ]
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