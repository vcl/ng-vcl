# vcl-embedded-input-group

Adds the possibility to prepend and append icons or buttons inside of input fields.

## Usage

```html

Input with icon on the left
<vcl-embedded-input-group>
  <vcl-icon vclPrepend icon="fas:search"></vcl-icon>
  <input vclInput placeholder="placeholder text" />
</vcl-embedded-input-group>

Input with icon on the right
<vcl-embedded-input-group>
  <input vclInput placeholder="Postcode, City, Name of the Workshop" />
  <vcl-icon vclApppend icon="fas:times-circle"></vcl-icon>
</vcl-embedded-input-group>

Input with button on the right
<vcl-embedded-input-group>
  <input vclInput />
  <button vcl-square-button vclApppend (click)="someAction($event)">
    <vcl-icon icon="fas:times-circle"></vcl-icon>
  </button>
</vcl-embedded-input-group>

Input with icon on the left and button on the right
<vcl-embedded-input-group prepIcon="fas:cog" appIcon="fas:times-circle">
  <vcl-icon vclPrepend icon="fas:search"></vcl-icon>
  <input vclInput />
  <button vcl-square-button vclApppend (click)="someAction($event)">
    <vcl-icon icon="fas:times-circle"></vcl-icon>
  </button>
</vcl-embedded-input-group>
```
