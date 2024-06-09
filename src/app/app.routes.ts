import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import("./shared/components/layout/layout.component"),
        children: [
            {
                path: 'dashboard',
                loadComponent: () => import("./business/dashboard/dashboard.component")
            },
            {
                path: 'profile',
                loadComponent: () => import("./business/profile/profile.component")
            },
            {
                path: 'tablas',
                loadComponent: () => import("./business/tablas/tablas.component")
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'dashboard'
    }
];
