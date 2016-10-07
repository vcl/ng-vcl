import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { DemoComponent } from "./components/demo/demo.component";
import { DEMO_COMPONENTS } from "./demo-components";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  ...(DEMO_COMPONENTS.map(dc => {
    return {
      path: dc.path,
      component: DemoComponent,
      data: dc
    };
  }))
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes, {
  useHash: true
});
