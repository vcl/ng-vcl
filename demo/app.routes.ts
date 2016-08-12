import { Routes, RouterModule } from '@angular/router';
import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { IconComponent } from "./components/icon/icon.component";
import { IcogramComponent } from "./components/icogram/icogram.component";

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'icon', component: IconComponent},
  {path:'icogram', component: IcogramComponent},
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
