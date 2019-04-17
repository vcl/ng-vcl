# vcl-dropdown

A dropdown menu consisting of a list of items which can be selected.

## Usage

```html
<button vcl-button (click)="dropdown1.open()"></button>

<vcl-dropdown #dropdown1="vclDropdown" selectionMode="none" (valueChange)="onDropdownSelect($event)">
  <vcl-dropdown-item value="1">
    <vcl-dropdown-label>Item 1</vcl-dropdown-label>
  </vcl-dropdown-item>
  <vcl-dropdown-item value="2">
    <vcl-dropdown-label>Item 2</vcl-dropdown-label>
  </vcl-dropdown-item>
  <vcl-dropdown-item value="3" [disabled]="true">
    <vcl-dropdown-label>Item 3</vcl-dropdown-label>
  </vcl-dropdown-item>
</vcl-dropdown>
```

```html
<input placeholder="Type to open dropdown" [vclDropdown]="dropdown2" />

<vcl-dropdown #dropdown2="vclDropdown">
  <vcl-dropdown-header>Items</vcl-dropdown-header>
  <vcl-dropdown-item value="1">
    <vcl-dropdown-label>Item 1</vcl-dropdown-label>
    <vcl-dropdown-sublabel>Description of Item 1</vcl-dropdown-sublabel>
  </vcl-dropdown-item>
  <vcl-dropdown-item value="2">
    <vcl-dropdown-label>Item 2</vcl-dropdown-label>
    <vcl-dropdown-sublabel>Description of Item 2</vcl-dropdown-sublabel>
  </vcl-dropdown-item>
  <vcl-dropdown-item value="3" [disabled]="true">
    <vcl-dropdown-label>Item 3</vcl-dropdown-label>
    <vcl-dropdown-sublabel>Description of Item 3</vcl-dropdown-sublabel>
  </vcl-dropdown-item>
  <vcl-dropdown-seperator></vcl-dropdown-seperator>
  <vcl-dropdown-item value="4" [disabled]="true">
    <vcl-dropdown-label>Seperated Item 4</vcl-dropdown-label>
    <vcl-dropdown-sublabel>Description of Item 4</vcl-dropdown-sublabel>
  </vcl-dropdown-item>
</vcl-dropdown>

```

### vcl-dropdown attributes

Name            | Type                             | Default     | Description
----------      | -------                          | -------     | --------------------------------------
`target`        | ElementRef                       |             | The target the dropdown attaches to
`width`         | number \| string                 |             | Dropdown width
`height`        | number \| string                 | '20em'      | Dropdown height
`maxHeight`     | number \| string                 |             | Dropdown max height
`selectionMode` | 'single' \| 'multiple' \| 'none' | 'single'    | `single` allows only one item to be selected. `multi` allows multiple items to be selected. `none` allows none item to be selected

### vcl-dropdown events

Name            | Type    | Description
----------      | ------- | --------------------------------------
`valueChange`   | any     | Fired when the dropdown value has changes
`afterClose`    | any     | Fired after the dropdown was closed


### vcl-dropdown-item attributes

Name       | Type    | Default | Description
---------- | ------- | ------- | --------------------------------------
`value`    | any     |         | The items value
`disabled` | boolean |         | Disables the item

### input[vclDropdown] attributes

Name                         | Type                                   | Default | Description
----------                   | -------                                | ------- | --------------------------------------
`vclDropdown`                | vcl-dropdown                           |         | The dropdown component to use
