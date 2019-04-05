import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';

const CAT_STATUS_INFORMATION = 'Status Information';
const CAT_TYPOGRAPHICAL      = 'Typographical';
const CAT_FORM_CONTROLS      = 'Form Controls';
const CAT_TABULAR_DATA       = 'Tabular Data';
const CAT_NAVIGATION         = 'Navigation';
const CAT_OVERLAYS           = 'Overlays';
const CAT_BUTTONS            = 'Buttons';
const CAT_FORMS              = 'Forms';
const CAT_MEDIA              = 'Media';
const CAT_MISC               = 'Misc';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    loadChildren: './demos/badge/demo.module#BadgeDemoModule',
    path: 'badge',
    data: {
      demo: {
        label: 'Badge',
        category: CAT_TYPOGRAPHICAL,
      }
    }
  },
  // {
  //   loadChildren: './demos/label/demo.module#LabelDemoModule',
  //   path: 'label',
  //   data: {
  //     demo: {
  //       label: 'Label',
  //       category: CAT_TYPOGRAPHICAL,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/navigation/demo.module#NavigationDemoModule',
  //   path: 'navigation',
  //   data: {
  //     demo: {
  //       label: 'Navigation',
  //       category: CAT_NAVIGATION,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/tab-nav/demo.module#TabNavDemoModule',
  //   path: 'tab-nav',
  //   data: {
  //     demo: {
  //       label: 'Tab Navigation',
  //       category: CAT_NAVIGATION,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/toolbar/demo.module#ToolbarDemoModule',
  //   path: 'toolbar',
  //   data: {
  //     demo: {
  //       label: 'Toolbar',
  //       category: CAT_NAVIGATION,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/button/demo.module#ButtonDemoModule',
    path: 'button',
    data: {
      demo: {
        label: 'Button',
        category: CAT_BUTTONS,
      }
    }
  },
  {
    loadChildren: './demos/button-group/demo.module#ButtonGroupDemoModule',
    path: 'button-group',
    data: {
      demo: {
        label: 'Button Group',
        category: CAT_BUTTONS,
      }
    }
  },
  {
    loadChildren: './demos/checkbox/demo.module#CheckboxDemoModule',
    path: 'checkbox',
    data: {
      demo: {
        label: 'Checkbox',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  // {
  //   loadChildren: './demos/date-picker/demo.module#DatePickerDemoModule',
  //   path: 'date-picker',
  //   data: {
  //     demo: {
  //       label: 'Date Picker',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/dropdown/demo.module#DropdownDemoModule',
  //   path: 'dropdown',
  //   data: {
  //     demo: {
  //       label: 'Dropdown',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/file-input/demo.module#FileInputDemoModule',
  //   path: 'file-input',
  //   data: {
  //     demo: {
  //       label: 'File Input',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/flip-switch/demo.module#FlipSwitchDemoModule',
  //   path: 'flip-switch',
  //   data: {
  //     demo: {
  //       label: 'Flip-Switch',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/input/demo.module#InputDemoModule',
    path: 'input',
    data: {
      demo: {
        label: 'Input',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  // {
  //   loadChildren: './demos/password-input/demo.module#PasswordInputDemoModule',
  //   path: 'password-input',
  //   data: {
  //     demo: {
  //       label: 'Password Input',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/input-control-group/demo.module#InputControlGroupDemoModule',
  //   path: 'input-control-group',
  //   data: {
  //     demo: {
  //       label: 'Input Control Group',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/embedded-input-group/demo.module#EmbeddedInputGroupDemoModule',
    path: 'embedded-input-group',
    data: {
      demo: {
        label: 'Embedded Input Group',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  // {
  //   loadChildren: './demos/month-picker/demo.module#MonthPickerDemoModule',
  //   path: 'month-picker',
  //   data: {
  //     demo: {
  //       label: 'Month Picker',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/radio-button/demo.module#RadioButtonDemoModule',
    path: 'radio-button',
    data: {
      demo: {
        label: 'Radio Button',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  // {
  //   loadChildren: './demos/select/demo.module#SelectDemoModule',
  //   path: 'select',
  //   data: {
  //     demo: {
  //       label: 'Select',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/slider/demo.module#SliderDemoModule',
  //   path: 'slider',
  //   data: {
  //     demo: {
  //       label: 'Slider',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/textarea/demo.module#TextareaDemoModule',
    path: 'textarea',
    data: {
      demo: {
        label: 'Textarea',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  // {
  //   loadChildren: './demos/token/demo.module#TokenDemoModule',
  //   path: 'token',
  //   data: {
  //     demo: {
  //       label: 'Token',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/autocomplete/demo.module#AutocompleteDemoModule',
    path: 'autocomplete',
    data: {
      demo: {
        label: 'Autocomplete',
        category: CAT_FORM_CONTROLS,
      }
    }
  },
  // {
  //   loadChildren: './demos/form-mashups/demo.module#FormMashupsDemoModule',
  //   path: 'form-mashups',
  //   data: {
  //     demo: {
  //       label: 'Mashups',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // },
  // // {
  // //   loadChildren: './demos/form/demo.module#FormDemoModule',
  // //   path: 'form',
  // //   data: {
  // //     demo: {
  // //       label: 'All Controls Example',
  // //       category: CAT_FORMS,
  // //     }
  // //   }
  // // },
  {
    loadChildren: './demos/form-control-label/demo.module#FormControlLabelDemoModule',
    path: 'form-control-label',
    data: {
      demo: {
        label: 'Form Control Label',
        category: CAT_FORMS,
      }
    }
  },
  // // {
  // //   loadChildren: './demos/jss-form/demo.module#VCLJssFormDemoModule',
  // //   path: 'jss-form',
  // //   data: {
  // //     demo: {
  // //       label: 'JSS-Form',
  // //       category: CAT_FORMS,
  // //     }
  // //   }
  // // },
  // // {
  // //   loadChildren: './demos/form-layouts/demo.module#FormLayoutsDemoModule',
  // //   path: 'form-layouts',
  // //   data: {
  // //     demo: {
  // //       label: 'Layouts',
  // //       category: CAT_FORMS,
  // //     }
  // //   }
  // // },
  {
    loadChildren: './demos/alert/demo.module#AlertDemoModule',
    path: 'alert',
    data: {
      demo: {
        label: 'Alert',
        category: CAT_OVERLAYS,
      }
    }
  },
  // {
  //   loadChildren: './demos/layer/demo.module#LayerDemoModule',
  //   path: 'layer',
  //   data: {
  //     demo: {
  //       label: 'Layer',
  //       category: CAT_OVERLAYS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/modal/demo.module#ModalDemoModule',
  //   path: 'modal',
  //   data: {
  //     demo: {
  //       label: 'Modal',
  //       category: CAT_OVERLAYS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/notifier/demo.module#NotifierDemoModule',
  //   path: 'notifier',
  //   data: {
  //     demo: {
  //       label: 'Notifier',
  //       category: CAT_OVERLAYS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/popover/demo.module#PopoverDemoModule',
  //   path: 'popover',
  //   data: {
  //     demo: {
  //       label: 'Popover',
  //       category: CAT_OVERLAYS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/tooltip/demo.module#ToolTipDemoModule',
  //   path: 'tooltip',
  //   data: {
  //     demo: {
  //       label: 'Tooltip',
  //       category: CAT_OVERLAYS,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/tour/demo.module#TourDemoModule',
  //   path: 'tour',
  //   data: {
  //     demo: {
  //       label: 'Tour',
  //       category: CAT_OVERLAYS,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/icon/demo.module#IconDemoModule',
    path: 'icon',
    data: {
      demo: {
        label: 'Icon',
        category: CAT_MEDIA,
      }
    }
  },
  {
    loadChildren: './demos/icogram/demo.module#IcogramDemoModule',
    path: 'icogram',
    data: {
      demo: {
        label: 'Icogram',
        category: CAT_MEDIA,
      }
    }
  },
  // {
  //   loadChildren: './demos/zoom-box/demo.module#ZoomBoxDemoModule',
  //   path: 'zoom-box',
  //   data: {
  //     demo: {
  //       label: 'Zoom-Box',
  //       category: CAT_MEDIA,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/gallery/demo.module#GalleryDemoModule',
  //   path: 'gallery',
  //   data: {
  //     demo: {
  //       label: 'Gallery',
  //       category: CAT_MEDIA,
  //     }
  //   }
  // },
  {
    loadChildren: './demos/busy-indicator/demo.module#BusyDemoModule',
    path: 'busy-indicator',
    data: {
      demo: {
        label: 'Busy Indicator',
        category: CAT_STATUS_INFORMATION,
      }
    }
  },
  // {
  //   loadChildren: './demos/progress-bar/demo.module#ProgressBarDemoModule',
  //   path: 'progress-bar',
  //   data: {
  //     demo: {
  //       label: 'Progress-Bar',
  //       category: CAT_STATUS_INFORMATION,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/notification/demo.module#NotificationDemoModule',
  //   path: 'notification',
  //   data: {
  //     demo: {
  //       label: 'Notification',
  //       category: CAT_STATUS_INFORMATION,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/table/demo.module#TableDemoModule',
  //   path: 'table',
  //   data: {
  //     demo: {
  //       label: 'Table',
  //       category: CAT_TABULAR_DATA,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/wormhole/demo.module#WormholeDemoModule',
  //   path: 'wormhole',
  //   data: {
  //     demo: {
  //       label: 'Wormhole',
  //       category: CAT_MISC,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/metalist/demo.module#MetalistDemoModule',
  //   path: 'metalist',
  //   data: {
  //     demo: {
  //       label: 'Metalist',
  //       category: CAT_MISC,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/off-click/demo.module#OffClickDemoModule',
  //   path: 'off-click',
  //   data: {
  //     demo: {
  //       label: 'Off Click',
  //       category: CAT_MISC,
  //     }
  //   }
  // },
  // {
  //   loadChildren: './demos/rating/demo.module#RatingDemoModule',
  //   path: 'rating',
  //   data: {
  //     demo: {
  //       label: 'Rating',
  //       category: CAT_FORM_CONTROLS,
  //     }
  //   }
  // }
];


export const appRoutingProviders: any[] = [

];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  providers: [...appRoutingProviders],
  exports: [RouterModule]
})
export class AppRoutingModule { }
