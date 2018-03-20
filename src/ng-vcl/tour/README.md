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

  constructor(public hintService: HintService){ }

  startTour() {
    this.hintService.initialize();
  }
}

```

```html
<!-- Overlay element inserted on top of the page-->
<vcl-tour-overlay></tour-overlay>

<!-- Start tour -->
<button name="button" (click)="startTour()">Begin tour</button>

<!-- Some application element -->
<div id="foo">Some element</div>

<vcl-tour-step selector="foo" order="1" position="right" title="some title">
  <!-- ANY HTML HERE
    NOTE: Only selector attribute is required! 
          If same element used multiple times, 
          provide order in which the steps should follow!
  -->
</vcl-tour-step>
```

### API

#### vcl-tour-step Properties

| Name                     | Type        | Default  | Description
| ------------             | ----------- | -------- |--------------
| `title`                  | string      |          | Tour step title
| `selector`               | string      |          | Required property, elements id which to highlight and attach tour step
| `order`                  | number      |        0 | The order number in which tour step should be shown, necessary if same element used multiple times
| `position`               | string      |   bottom | Tour step window position relative to element

#### HintService events

| Name                     | Description
| ------------             |--------------
| `finish$`                | Triggers when tour is finished
| `showingStep$`           | Triggers on each step show(Params > CurrentStep)

### HintService default options

| Name                     | Type        | Default  | Description
| ------------             | ----------- | -------- |--------------
| `elementsDisabled`       | boolean     |     true | Disabling highlightedElement (click) wont work
| `dismissOnOverlay`       | boolean     |    false | Go to next step when clicking on overlay (close tour if this is last step)
| `defaultPosition`        | string      |   bottom | Position of tour step to highlightedElement
| `defaultOrder`           | number      |       99 | Order of showing steps
| `defaultLayer`           | number      |       15 | Distance between highlightedElement and step in px
| `applyRelative`          | boolean     |     true | Applying position:relative to highlightedElement (disable in case you want to highlight absolute positioned elements)

#### Custom options usage

```js
 startTour() {
    this.hintService.initialize({elementsDisabled: false}); // HintOptions
  }
```