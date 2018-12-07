# vcl-modal

A modal based on layer module.

## Usage

```html
<vcl-modal title="Modal dialog" [closeButton]="true">
    <vcl-modal-body>
      <p>Modal text goes here</p>
    </vcl-modal-body>
    <vcl-modal-footer>
      <div class="vclLooseButtonGroup">
        <button type="button" class="vclButton vclTransparent vclOutline" (tap)="closeDialogModal()">
          <div class="vclIcogram">
            <span class="vclText">Cancel</span>
          </div>
        </button>
      <div>
    </vcl-modal-footer>
</vcl-modal>
```

### API

#### vcl-modal attributes

| Name              | Type            | Default  | Description
| ----------------- | --------------- | -------- |--------------
| `title`           | string          |          | Title of modal
| `closeButton`     | boolean         | false    | Show close button right up corner
| `class`           | string          |          | Additional panel class

