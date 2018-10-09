# vcl-tour-step and vcl-tour-overlay

Simple and customizable application tour component with overlay

## Usage

```js
import { VCLTourModule } from 'ng-vcl';

@NgModule({
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
| `debug`                  | string                        |                    | Output debug information
| `debugPopover`           | string                        |                    | Output popover debug information
| `title`                  | string                        |                    | Tour step title
| `target`                 | string  ElementRef  Element   |                    | The target can be a selector, element or ElementRef instance
| `order`                  | number                        |                    | The order number in which tour step should be shown, necessary if same element used multiple times
| `targetX`                | AttachmentX                   | AttachmentX.Center | Position of the target-side
| `attachmentX`            | AttachmentX                   | AttachmentX.Center | Position of the popover-side
| `targetY`                | AttachmentY                   | AttachmentY.Bottom | Position of the target-vertical
| `attachmentY`            | AttachmentY                   | AttachmentY.Top    | Position of the popover-vertical


#### TourService events

| Name                     | Type          | Description
| ------------------------ | ------------- | --------------
| `finish$`                | boolean       | Event is emitted when the tour is finished
| `showingStep$`           | TourComponent | Event is emitted on each shown vcl-tour-step component

### TourService default options

| Name                     | Type        | Default  | Description
| ------------------------ | ----------- | -------- |--------------
| `useOrder`               | boolean     |    false | vcl-tour-step component's `@Input() order` is not used and instead the service relies on the DOM element creation order
| `elementsDisabled`       | boolean     |     true | Disabling highlightedElement (click) wont work
| `dismissOnOverlay`       | boolean     |    false | Go to next step when clicking on overlay (close tour if this is last step)
| `defaultPosition`        | string      |   bottom | Position of tour step to highlightedElement
| `defaultOrder`           | number      |       99 | Order of showing steps
| `defaultLayer`           | number      |       15 | Distance between highlightedElement and step in px
| `applyRelative`          | boolean     |     true | Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)

#### Custom options usage

```js
 startTour() {
    this.tour.initialize({elementsDisabled: false}); // HintOptions
    this.tour.start();
  }
```
