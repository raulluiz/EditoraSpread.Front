import { Routes } from '@angular/router';
import { AutorList } from './features/autores/pages/autor-list/autor-list';

export const routes: Routes = [
    { path: 'autores', component: AutorList },
    { path: '', redirectTo: 'autores', pathMatch: 'full' }
];
