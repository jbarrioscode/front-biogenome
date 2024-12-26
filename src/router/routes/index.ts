import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthenticationView from "@/views/authentication/AuthenticationView.vue";
import Login from "@/components/authentication/Login.vue";
import ResetPassword from "@/components/authentication/ResetPassword.vue";
import NotFoundPage from "@/views/errors/NOTFOUND/NotFoundPage.vue";
import UnauthorizedPage from "@/views/errors/UNAUTHORIZED/UnauthorizedPage.vue";
import ReportsMainComponent from "@/components/reports/ReportsMainComponent.vue";
import UsersMainComponent from "@/components/settings/users/UsersMainComponent.vue";
import RolesMainComponent from "@/components/settings/roles/RolesMainComponent.vue";
import PermissionsMainComponent from "@/components/settings/permissions/PermissionsMainComponent.vue";
import HeadquartersMainComponent from "@/components/settings/headquarters/HeadquartersMainComponent.vue";
import PatientCreationMainComponent from "@/components/patients/patientCreation/PatientCreationMainComponent.vue";
import PatientClinicalInformationMainComponent
    from "@/components/patients/patientClinicalInformation/PatientClinicalInformationMainComponent.vue";
import InformedConsentsMainComponent from "@/components/settings/informedConsents/InformedConsentsMainComponent.vue";
import FollowUpMainComponent from "@/components/samples/followUp/FollowUpMainComponent.vue";
import ShelfAssignmentMainComponent from "@/components/samples/shelfAssignment/ShelfAssignmentMainComponent.vue";
import ShelfAssignmentSamplesComponent
    from "@/components/samples/shelfAssignment/SubComponents/ShelfAssignmentSamples/ShelfAssignmentSamplesComponent.vue";
import ShelfAssignmentCounterSamplesComponent
    from "@/components/samples/shelfAssignment/SubComponents/ShelfAssignmentCounterSamples/ShelfAssignmentCounterSamplesComponent.vue";
import DashboardWithGraphics from "@/components/dashboard/DashboardWithGraphics.vue";

const routesObject: any = [
    {
        path: '/',
        component: DefaultLayout,
        redirect: () => {
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
        redirect: () => {
            return {name: "statistics"};
        },
        children: [
            {
                path: "/dashboard/statistics",
                name: "statistics",
                component: DashboardWithGraphics,
            },
        ],
    },
    {
        path: '/patients',
        name: 'patients',
        component: DefaultLayout,
        children: [
            {
                path: '/patient/creation',
                name: 'creation',
                component: PatientCreationMainComponent,
            },
            {
                path: '/patient/clinical-information',
                name: 'clinical-information',
                component: PatientClinicalInformationMainComponent,
            },
        ]
    },
    {
        path: '/samples',
        name: 'samples',
        component: DefaultLayout,
        children: [
            {
                path: '/samples/follow-up',
                name: 'follow-up',
                component: FollowUpMainComponent
            },
            {
                path: '/samples/shelf-assignment',
                name: 'shelf-assignment',
                component: ShelfAssignmentMainComponent,
                redirect: () => {
                    return {name: "shelf-assignment-samples"}
                },
                children: [
                    {
                        path: '/samples/shelf-assignment/samples',
                        name: 'shelf-assignment-samples',
                        component: ShelfAssignmentSamplesComponent
                    },
                    {
                        path: '/samples/shelf-assignment/counter-samples',
                        name: 'shelf-assignment-counter-samples',
                        component: ShelfAssignmentCounterSamplesComponent
                    }
                ]
            }
        ]
    },
    {
        path: '/reports',
        name: 'reports',
        component: DefaultLayout,
        redirect: () => {
            return {name: "report_1"}
        },
        children: [
            {
                path: '/reports/report_1',
                name: 'report_1',
                component: ReportsMainComponent,
            },
        ]
    },
    {
        path: '/settings',
        name: 'settings',
        component: DefaultLayout,
        children: [
            {
                path: '/settings/users',
                name: 'users',
                component: UsersMainComponent,
            },
            {
                path: '/settings/roles',
                name: 'roles',
                component: RolesMainComponent,
            },
            {
                path: '/settings/permissions',
                name: 'permissions',
                component: PermissionsMainComponent,
            },
            {
                path: '/settings/headquarters',
                name: 'headquarters',
                component: HeadquartersMainComponent,
            },
            {
                path: '/settings/informed-consents',
                name: 'informed-consents',
                component: InformedConsentsMainComponent,
            }
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