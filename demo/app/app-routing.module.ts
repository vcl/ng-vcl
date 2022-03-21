import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

const CAT_STATUS_INFORMATION = 'Status Information';
const CAT_TYPOGRAPHICAL      = 'Typographical';
const CAT_FORM_CONTROLS      = 'Form Controls';
const CAT_FORMS              = 'Forms';
const CAT_TABULAR            = 'Tabular';
const CAT_CONTAINERS         = 'Containers';
const CAT_OVERLAYS           = 'Overlays';
const CAT_BUTTONS            = 'Buttons';
const CAT_MEDIA              = 'Media';
const CAT_MISC               = 'Misc';
const CAT_AREAS              = 'Areas';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    loadChildren: () => import('./demos/badge/demo.module').then(m => m.BadgeDemoModule),
    path: 'badge',
    data: {
      demo: {
        label: 'Badge',
        category: CAT_TYPOGRAPHICAL,
      }
    }
  },
  {
    loadChildren: () => import('./demos/drawer/demo.module').then(m => m.DrawerDemoModule),
    path: 'drawer',
    data: {
      demo: {
        label: 'Drawer',
        category: CAT_AREAS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/navigation/demo.module').then(m => m.NavigationDemoModule),
    path: 'navigation',
    data: {
      demo: {
        label: 'Navigation',
        category: CAT_TABULAR,
      }
    }
  },
  {
    loadChildren: () => import('./demos/data-list/demo.module').then(m => m.DataListDemoModule),
    path: 'data-list',
    data: {
      demo: {
        label: 'Data List',
        category: CAT_TABULAR,
      }
    }
  },
  {
    loadChildren: () => import('./demos/tab-nav/demo.module').then(m => m.TabNavDemoModule),
    path: 'tab-nav',
    data: {
      demo: {
        label: 'Tab Navigation',
        category: CAT_TABULAR,
      }
    }
  },
  {
    loadChildren: () => import('./demos/button/demo.module').then(m => m.ButtonDemoModule),
    path: 'button',
    data: {
      demo: {
        label: 'Button',
        category: CAT_BUTTONS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/button-group/demo.module').then(m => m.ButtonGroupDemoModule),
    path: 'button-group',
    data: {
      demo: {
        label: 'Button Group',
        category: CAT_BUTTONS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/checkbox/demo.module').then(m => m.CheckboxDemoModule),
    path: 'checkbox',
    data: {
      demo: {
        label: 'Checkbox',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/date-picker/demo.module').then(m => m.DatepickerDemoModule),
    path: 'datepicker',
    data: {
      demo: {
        label: 'Date Picker',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/select-list/demo.module').then(m => m.SelectListDemoModule),
    path: 'select-list',
    data: {
      demo: {
        label: 'Select List',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/autocomplete/demo.module').then(m => m.AutocompleteDemoModule),
    path: 'autocomplete',
    data: {
      demo: {
        label: 'Autocomplete',
        category: CAT_OVERLAYS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/select/demo.module').then(m => m.SelectDemoModule),
    path: 'select',
    data: {
      demo: {
        label: 'Select',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/file-input/demo.module').then(m => m.FileInputDemoModule),
    path: 'file-input',
    data: {
      demo: {
        label: 'File Input',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/flip-switch/demo.module').then(m => m.FlipSwitchDemoModule),
    path: 'flip-switch',
    data: {
      demo: {
        label: 'Flip-Switch',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/input/demo.module').then(m => m.InputDemoModule),
    path: 'input',
    data: {
      demo: {
        label: 'Input',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/password-input/demo.module').then(m => m.PasswordInputDemoModule),
    path: 'password-input',
    data: {
      demo: {
        label: 'Password Input',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/radio-button/demo.module').then(m => m.RadioButtonDemoModule),
    path: 'radio-button',
    data: {
      demo: {
        label: 'Radio Button',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/slider/demo.module').then(m => m.SliderDemoModule),
    path: 'slider',
    data: {
      demo: {
        label: 'Slider',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/token/demo.module').then(m => m.TokenDemoModule),
    path: 'token',
    data: {
      demo: {
        label: 'Token',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/form-control-group/demo.module').then(m => m.FormControlGroupDemoModule),
    path: 'form-control-group',
    data: {
      demo: {
        label: 'Form Control Group',
        category: CAT_FORMS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/jss-form/demo.module').then(m => m.VCLJssFormDemoModule),
    path: 'jss-form',
    data: {
      demo: {
        label: 'JSS-Form',
        category: CAT_FORMS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/alert/demo.module').then(m => m.AlertDemoModule),
    path: 'alert',
    data: {
      demo: {
        label: 'Alert',
        category: CAT_OVERLAYS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/layer/demo.module').then(m => m.LayerDemoModule),
    path: 'layer',
    data: {
      demo: {
        label: 'Layer',
        category: CAT_OVERLAYS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/notification/demo.module').then(m => m.NotificationDemoModule),
    path: 'notification',
    data: {
      demo: {
        label: 'Notification',
        category: CAT_STATUS_INFORMATION,
      }
    }
  },
  {
    loadChildren: () => import('./demos/notifier/demo.module').then(m => m.NotifierDemoModule),
    path: 'notifier',
    data: {
      demo: {
        label: 'Notifier',
        category: CAT_OVERLAYS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/panel/demo.module').then(m => m.PanelDemoModule),
    path: 'panel',
    data: {
      demo: {
        label: 'Panel',
        category: CAT_CONTAINERS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/popover/demo.module').then(m => m.PopoverDemoModule),
    path: 'popover',
    data: {
      demo: {
        label: 'Popover',
        category: CAT_OVERLAYS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/tooltip/demo.module').then(m => m.ToolTipDemoModule),
    path: 'tooltip',
    data: {
      demo: {
        label: 'Tooltip',
        category: CAT_OVERLAYS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/tour/demo.module').then(m => m.TourDemoModule),
    path: 'tour',
    data: {
      demo: {
        label: 'Tour',
        category: CAT_OVERLAYS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/icon/demo.module').then(m => m.IconDemoModule),
    path: 'icon',
    data: {
      demo: {
        label: 'Icon',
        category: CAT_MEDIA,
      }
    }
  },
  {
    loadChildren: () => import('./demos/icogram/demo.module').then(m => m.IcogramDemoModule),
    path: 'icogram',
    data: {
      demo: {
        label: 'Icogram',
        category: CAT_MEDIA,
      }
    }
  },
  {
    loadChildren: () => import('./demos/zoom-box/demo.module').then(m => m.ZoomBoxDemoModule),
    path: 'zoom-box',
    data: {
      demo: {
        label: 'Zoom-Box',
        category: CAT_MEDIA,
      }
    }
  },
  {
    loadChildren: () => import('./demos/gallery/demo.module').then(m => m.GalleryDemoModule),
    path: 'gallery',
    data: {
      demo: {
        label: 'Gallery',
        category: CAT_MEDIA,
      }
    }
  },
  {
    loadChildren: () => import('./demos/busy-indicator/demo.module').then(m => m.BusyDemoModule),
    path: 'busy-indicator',
    data: {
      demo: {
        label: 'Busy Indicator',
        category: CAT_STATUS_INFORMATION,
      }
    }
  },
  {
    loadChildren: () => import('./demos/progress-bar/demo.module').then(m => m.ProgressBarDemoModule),
    path: 'progress-bar',
    data: {
      demo: {
        label: 'Progress-Bar',
        category: CAT_STATUS_INFORMATION,
      }
    }
  },
  {
    loadChildren: () => import('./demos/calendar/demo.module').then(m => m.CalendarDemoModule),
    path: 'calendar',
    data: {
      demo: {
        label: 'Calendar',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/off-click/demo.module').then(m => m.OffClickDemoModule),
    path: 'off-click',
    data: {
      demo: {
        label: 'Off Click',
        category: CAT_MISC,
      }
    }
  },
  {
    loadChildren: () => import('./demos/rating/demo.module').then(m => m.RatingDemoModule),
    path: 'rating',
    data: {
      demo: {
        label: 'Rating',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  {
    loadChildren: () => import('./demos/dateadapter/demo.module').then(m => m.DateadapterDemoModule),
    path: 'dateadapter',
    data: {
      demo: {
        label: 'Date Adapter',
        category: CAT_MISC,
      }
    }
  },
  {
    loadChildren: () => import('./demos/breakpoints/demo.module').then(m => m.BreakpointsDemoModule),
    path: 'breakpoints',
    data: {
      demo: {
        label: 'Breakpoints',
        category: CAT_MISC,
      }
    }
  }

];


export const appRoutingProviders: any[] = [

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
})],
  providers: [...appRoutingProviders],
  exports: [RouterModule]
})
export class AppRoutingModule { }
