import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { DEMO_COMPONENTS } from "./demo-components";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      name: "Home"
    }
  },
  ...(DEMO_COMPONENTS.map(dc => {
    return {
      path: dc.path,
      component: dc.component,
      data: dc
    };
  }))
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
