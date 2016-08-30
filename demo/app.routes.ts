import { Routes, RouterModule } from '@angular/router';
import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { IconComponent } from "./components/icon/icon.component";
import { IcogramComponent } from "./components/icogram/icogram.component";
import { ButtonComponent } from './components/button/button.component';
import { LayerComponent } from './components/layer/layer.component';
import { TetherComponent } from './components/tether/tether.component';
import { PopoverComponent } from './components/popover/popover.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { FormControlLabelComponent } from './components/form-control-label/form-control-label.component';
import { InputComponent } from './components/input/input.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'icon', component: IconComponent},
  {path:'icogram', component: IcogramComponent},
  {path:'button', component: ButtonComponent},
  {path:'layer', component: LayerComponent},
  {path:'tether', component: TetherComponent},
  {path:'popover', component: PopoverComponent},
  {path:'radio-button', component: RadioButtonComponent},
  {path:'checkbox', component: CheckboxComponent},
  {path:'form-control-label', component: FormControlLabelComponent},
  {path:'input', component: InputComponent}
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(routes);
