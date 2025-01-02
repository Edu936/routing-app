import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorHandler, inject } from '@angular/core';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'about/:number',
        component: AboutComponent,
    },
    {
        path: 'x',
        redirectTo: ({queryParams}) => {
            const errorHandler = inject(ErrorHandler);
            const params = queryParams['number'];
            if(params != undefined) {
                return `/about/${params}`;
            } else {
                errorHandler.handleError(new Error(''));
                return 'home';
            }
        }
    },
    {
        path: 'profile/:id',
        component: ProfileComponent,
    }
];
