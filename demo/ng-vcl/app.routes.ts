import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
// import { DEMO_ROUTES } from "./demos";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // ...DEMO_ROUTES
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes, {
  useHash: true
});
