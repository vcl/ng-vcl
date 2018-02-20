# vcl-embedded-input-group

Embedded-Input-Group

Adds the possibility to prepend and append icons or buttons inside of input fields. It is also possible to append a button outside of the input field.

## Usage:

```html
Left icon and button on the right
<vcl-embedded-input-group [prependIcon]='true' prependedIconClasses="fa fa-cog" [appendButton]='true' appendedButtonIconClasses="fa:times-circle"
  (appendedButtonEventListner)="someAction($event)">
  <input vcl-input vclPrepItem='true' type="text" />
</vcl-embedded-input-group>

Iconon the left and buttons on the right
<vcl-embedded-input-group [appendButton]='true' appendedButtonIconClasses="fa:search" (appendedButtonEventListner)="someAction($event)"
  [outSideAppendButton]='true' (outSideAppendedButtonEventListner)="someAction($event)" outSideAppendedButtonLabel="GO"
  [prependIcon]='true' prependedIconClasses="fa fa-cog">
  <input vcl-input type="text" vclPrepItem='true' />
</vcl-embedded-input-group>
```

### API

#### Properties:

| Name                                | Type        | Default            | Description
| ----------------------------------  | ----------- | ------------------ |--------------
| `prependIcon`                       | boolean     | false              | enable
| `prependedIconClasses`              | string      | undifind           | CSS classes  
| `prependButton`                     | boolean     | false              | enable
| `prependedButtonIconClasses`        | string      | undifind           | CSS classes  
| `prependedButtonEventListner`       | Function    |                    | function 
| `appendIcon`                        | boolean     | false              | enable 
| `appendedIconClasses`               | string      | undifind           | CSS classes  
| `appendButton`                      | boolean     | false              | enable 
| `appendedButtonIconClasses`         | string      | undifind           | CSS classes  
| `appendedButtonEventListner`        | Function    |                    | function 
| `outSideAppendButton`               | boolean     | false              | enable 
| `outSideAppendedButtonIconClasses`  | string      | undifind           | CSS classes   
| `outSideAppendedButtonLabel`        | string      | undifind           | label 
| `outSideAppendedButtonEventListner` | Function    |                    | function 


To use with vcl-input add vclPrepItem='true' to input. 

```html
  <input vcl-input vclPrepItem='true' type="text" />
```
