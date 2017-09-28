
import {ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { ScenariosComponent } from './scenarios/scenarios.component';

/**
 * Define the routes
 */
const appRoutes: Routes = [
  { path: '',          component: HomeComponent },
  { path: 'scenarios', component: ScenariosComponent },
  { path: 'charts',    component: ChartsComponent },
];

/**
 * Define a variable of the root routes for Application
 */
export const routing: ModuleWithProviders
            = RouterModule.forRoot(appRoutes);
