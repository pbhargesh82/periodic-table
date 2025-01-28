import { Routes } from '@angular/router';
import { HomeComponent } from 'routes/home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route for app
    { path: '**', redirectTo: '/home' }, // Fallback route
];
