# Developing, Building, Testing and Deploying

## Developing

```
npm run dev:demo
```

Open [http://localhost:3000/](http://localhost:3000/) to see the demo browser.

## Testing

```
npm run test
```

## Building and Deploying

TODO

## Building and Deploy the Docs

Building and deploying the docs is done automatically via TRAVIS CI for the branches `dev` and `master`.
Config file: `.travis.yml`.

# Architecture

## directive vs. component and element-selector vs. attribute-selector.

- directives changes/enhances the behavior of an element.
- components are also directives, but add additional html to the element

Obviously, an element can hold multiple directives but only one component.
There is no best combination and it mostly depends on what you are trying to achieve when creating your module.

Directive & attribute selector:
e.g. <input vclInput ...>
You still have full control over the elements, to register actions (focus, click), add other directives, ...

Component & attribute selector:
e.g. <button vcl-button ...>, <span vcl-icogram ...>
Same advantages as in directive&attribute-selector, but with the possibility to have some nested html.

Directive & element selector:
This is not very common. Usually you do not want to force your directives on an existing element.
e.g. the @angular/forms module has one for the <form ...> element.

Component & element selector:
e.g. <vcl-flipswitch ...>, <vcl-datepicker ...>
This is much nicer to read than <div vcl-flipswitch ...> and usually the div is not an element a developer needs to interact with (in contrast to input or button).

Important for those custom-elements is to keep the default display mode in mind:

- A div is a block element.
- A span is an inline element
- A custom-element is an inline element.

The vclFlipswitch class has a display:block rule, so <div vcl-flipswitch ...> and <vcl-flipswitch ...> are pretty much the same.
That is also the reason we have sometimes different ways to use a component/directive.

- <vcl-icogram ...>
- <span vcl-icogram ...>
- <div vcl-icogram ...>
