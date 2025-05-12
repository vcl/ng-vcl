# vcl-tour-step and vcl-tour-overlay

Simple and customizable application tour component with overlay.

Note: For the highlight to work, the target element has to have a background-color.

## Usage

```js
import { VCLTourModule } from '@vcl/ng-vcl';

@Component({
  imports: [ VCLTourModule ],
  ...
})
export class AppComponent {}

class AppComponent {

  constructor(public tour: TourService){ }

  startTour() {
    this.tour.start();
  }
}
```

```html
<!-- Overlay element inserted on top of the page-->
<vcl-tour-overlay></vcl-tour-overlay>

<!-- Start tour -->
<button name="button" (click)="startTour()">Begin tour</button>

<!-- Some application element -->
<div id="foo">Some element</div>

<vcl-tour-step target="#foo" title="some title">
  <!-- ANY HTML HERE -->
</vcl-tour-step>
```

### API

#### vcl-tour-step attributes

| Name                     | Type                          | Default            | Description
| ------------------------ | ----------------------------- | ------------------ | --------------
| `debug`                  | boolean                       | false              | Output debug information
| `debugPopover`           | boolean                       | false              | Output `vcl-tour-step`'s `vcl-popover` debug information
| `title`                  | string                        |                    | Tour step title
| `target`                 | string  ElementRef  Element   |                    | The target can be a selector, element or ElementRef instance
| `order`                  | number                        |                    | The order number in which tour step should be shown, necessary if same element used multiple times
| `targetX`                | AttachmentX                   | AttachmentX.Center | Position of the target-side
| `attachmentX`            | AttachmentX                   | AttachmentX.Center | Position of the popover-side
| `offsetAttachmentX`      | number                        |                    | `vcl-popover`'s AttachmentX offset
| `targetY`                | AttachmentY                   | AttachmentY.Bottom | Position of the target-vertical
| `attachmentY`            | AttachmentY                   | AttachmentY.Top    | Position of the popover-vertical
| `offsetAttachmentY`      | number                        |                    | `vcl-popover`'s AttachmentY offset


#### TourService events

| Name                     | Type          | Description
| ------------------------ | ------------- | --------------
| `end$`                   | true          | Event is emitted when the tour is finished or ended
| `tourComponent$`         | TourComponent | Current `TourComponent` is emitted on each `vcl-tour-step`

### TourService default options

| Name                     | Type        | Default  | Description
| ------------------------ | ----------- | -------- |--------------
| `debug`                  | boolean     | false    | Output debug information
| `debugTour`              | boolean     | false    | Output every `vcl-tour-step` debug information
| `debugPopover`           | boolean     | false    | Output every `vcl-tour-step`'s `vcl-popover` debug information
| `useOrder`               | boolean     | false    | `vcl-tour-step`'s `@Input() order` is not used and instead the service relies on the DOM element creation order
| `elementsDisabled`       | boolean     | true     | Disabling highlightedElement (click) wont work
| `applyRelative`          | boolean     | true     | Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)
| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)
| `zIndex`                 | number      | 20       | Used `z-index` for `vcl-tour-step` components
| `dismissOnOverlay`       | boolean     | false    | Go to next step when clicking on overlay (close tour if this is last step)
| `offsetAttachmentX`      | number      | 0        | Used AttachmentX offset for `vcl-tour-step` components
| `offsetAttachmentY`      | number      | 0        | Used AttachmentY offset for `vcl-tour-step` components


#### Custom options usage

```js
 startTour() {
    this.tour.initialize({elementsDisabled: false}); // TourOptions
    this.tour.start();
  }
```



export class TourOptions {
  debug: boolean = false;
  debugTour: boolean = false;
  debugPopover: boolean = false;

  useOrder: boolean = false;
  elementsDisabled: boolean = true;
  applyRelative: boolean = true;
  dismissOnOverlay: boolean = false;

  zIndex: number = 20;

  previousLabel: string = 'Previous';
  nextLabel: string = 'Next';
  exitLabel: string = 'Exit';

  previousIcon: string = 'fas fa-chevron-left';
  nextIcon: string = 'fas fa-chevron-right';
  exitIcon: string = 'fas fa-close';

  buttonClass: string = '';
}
