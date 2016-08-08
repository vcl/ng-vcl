import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { IconComponent } from "./components/icon/icon.component";
import { IcogramComponent } from "./components/icogram/icogram.component";

const routes: RouterConfig = [
  {path:'', component: HomeComponent},
  {path:'icon', component: IconComponent},
  {path:'icogram', component: IcogramComponent},
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
  