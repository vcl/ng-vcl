import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: 'navigation.component.html'
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  items = [
    {
      label: 'Home',
      route: ['/navigation'],
      active: true,
      prepIcon: 'fa:home',
    },
    {
      label: 'Products',
      route: ['/navigation'],
      active: true,
      appIcon: 'fa:bicycle',
    },
    {
      label: 'Pre-selected Item',
      route: ['/navigation'],
      selected: true,
      active: true
    },
    {
      label: 'External link',
      href: 'https://searx.me',
      active: true,
    }
  ];

  items2 = [
    {
      label: 'Heading',
      heading: true,
      route: ['/navigation'],
      active: true
    },
    {
      label: 'Item',
      route: ['/navigation'],
      active: true
    },
    {
      label: 'Item',
      route: ['/navigation'],
      active: true
    },
    {
      label: 'Another heading',
      heading: true,
      route: ['/navigation'],
      active: true
    },
    {
      label: 'Item',
      route: ['/navigation'],
      active: true
    },
    {
      label: 'Item',
      route: ['/navigation'],
      active: true
    },
    {
      label: 'Nested navigation',
      route: ['/navigation'],
      active: true,
      items: [
        {
          label: 'Level 2 Item',
          route: ['/navigation'],
          active: true
        },
        {
          label: 'Level 2 Item',
          route: ['/navigation'],
          active: true
        },
        {
          label: 'Level 2 navigation',
          route: ['/navigation'],
          active: true,
          items: [
            {
              label: 'Level 3 Item',
              route: ['/navigation'],
              active: true
            },
            {
              label: 'Level 3 Item',
              route: ['/navigation'],
              active: true
            },
            {
              label: 'Level 3 Item',
              route: ['/navigation'],
              active: true
            },
          ],
        },
        {
          label: 'Level 2 Item',
          route: ['/navigation'],
          active: true
        },
      ]
    }
  ];
}
