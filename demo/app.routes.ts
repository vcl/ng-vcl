import { Routes, RouterModule } from '@angular/router';
import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { IconComponent } from "./components/icon/icon.component";
import { IcogramComponent } from "./components/icogram/icogram.component";
import { ButtonComponent } from './components/button/button.component';
import { LayerComponent } from './components/layer/layer.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'icon', component: IconComponent},
  {path:'icogram', component: IcogramComponent},
  {path:'button', component: ButtonComponent},
  {path:'layer', component: LayerComponent},
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
