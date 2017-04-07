# Changelog

## 0.3.0 (?)

### Notes

This release brings back hammerjs into the main package.
A `compatibility` release without hammerjs is found within the package in the `compatibility` folder.
Use an alias in your bundler to target this folder.
e.g. in your webpack config

```js
resolve: {
  ...
  alias: { "@ng-vcl/ng-vcl": "@ng-vcl/ng-vcl/compatibility" }
}
```

### Changes

- requires Angular ^4.0.0
- Replaced all internal click events with tap events
- Added hammerjs to peer dependencies
- metalist:
  - (BREAKING) metalist items will be declared via `<vcl-metalist-item>` elements instead of using the item attribute. 
- dropdown:
  - activated keyboard interaction on by default
  - (BREAKING) dropdown items will be declared via `<vcl-dropdown-option>` elements instead of using the item attribute. 
  - (BREAKING) removed support for `minSelectableItems`
- select:
  - better keyboard interaction
  - activated keyboard interaction on by default
  - (BREAKING) select items will be declared via `<vcl-select-option>` elements instead of using the item attribute. 
  - (BREAKING) removed support for `minSelectableItems`
- growl/notification:
  - (BREAKING) renamed the `growl` module to `notification`. This affects the following classes
    - `VCLGrowlModule` to `VCLNotificationModule`
    - `GrowlService` to `NotificationService`
    - `GrowlOptions` to `NotificationOptions`
    - `GrowlType` to `NotificationType`
    - `GrowlPosition` to `NotificationPosition`
    - `Growl` to `Notification`
- busy-indicator:
  - (BREAKING) renamed module to VCLBusyIndicatorModule
  - added vcl-busy-indicator component
  - add support for straight indicator in vcl-busy-indicator and vclBusy    
- textarea:
  - autogrow defaults to false now
- button-group:
  - (BREAKING) removed selectedIndex attribute
  - Added support for ngModel
- popover
  - (BREAKING) renamed `open` to `visible`
  - support template reference variable as target
  - provide open(), close() and toggle() methods on component
- jss-form:
  - (BREAKING) temporarily removed
- layer:
  - (BREAKING) Removed offClickClose option
  - (BREAKING) Renamed LayerWrapperComponent to LayerContainerComponent
  - (BREAKING) Moved LayerOptions from @Layer annotation to LayerRef class. Check docs for further information.
  - Non-modal layers block background interaction and are closed on a background click
- radio-button:
  - (BREAKING) Removed VCLRadioGroupModule and reimplemented radio-group in VCLRadioButtonModule
    - radio-group options will be declared via radio-buttons instead of using the options attribute. 
- slider:
  - (BREAKING) scaleNames attribute renamed to scale
  - value attribute switched to 2-way-binding
  - Added support for mousewheel 
- wormhole:
  - (BREAKING) renamed wormhole directive selector and attributes
  - (BREAKING) removed `WormholeRef` class. Use `Wormhole` instead
  - (BREAKING) replaced `WormholeManager` with `WormholeHost` class
  - (BREAKING) renamed `WormholeService` to `DomWormholeHost`
  
## 0.2.9 (2017-03-21)

### Breaking Changes
- vcl-plotly:
  - renamed `@Input() elementId: string` to `@Input() plotId: string`

### Changes
- vcl-plotly:
  - plot will only be displayed once it's rendered to the DOM
  - added `restyle`, `relayout`, `update`, `redraw`, `recreate` wrapper functions
  - updated README.md


## 0.2.1 (2017-03-01)

Bugfix release

## 0.2.0 (2017-02-24)

### Breaking Changes
- Replaced tap with click events
- Removed hammerjs from peer dependencies
- dropdown/select: removed value attribute. Use (ngModel) instead
- slider: requires hammerjs to work

## 0.1.2 (2017-02-17)

### Changes

- button-group: 
  - Performance optimizations
  - Remove redundant (change) event => use (selectedIndexChange) instead

### Bug Fixes

- select: toggle dropdown on button tap

## 0.1.1 (2017-02-17)

### Changes
- label: support for-attribute

### Bug Fixes
- select:  do not focus on ngModel.writeValue
- date-picker: fix height for ie11
- token-input: backspace did not work on ie11

## 0.1.0 (2017-02-15)

### Notes

- Packages are now published via npm and are semver compliant!
- The npm scope for all packages is @ng-vcl
- The core package is @ng-vcl/ng-vcl
- Some components were outsourced in own packages
- @ng-vcl packages are now aot ready and provide sources in the esm format

### Links
- [@ng-vcl/ng-vcl README](https://www.npmjs.com/package/@ng-vcl/ng-vcl)
- [Complete list of packages](https://www.npmjs.com/~ng-vcl)

### Breaking Changes
- components moved to packages:
  - json-editor moved to @ng-vcl/json-editor package
  - store store moved to @ng-vcl/store package
  - jss-form moved to @ng-vcl/jss-form package
  - adv-http moved to @ng-vcl/adv-http package
  - plotly moved to @ng-vcl/plotly package
- vcl-tab-nav:
  - removed vcl-tab-content directive
- vcl-token:
  - renamed events from 'onChange' to 'change'
  - renamed events from 'onRemove' to 'remove'
- vcl-popover
  - `state` is now `open` and accepts boolean
  - tether is removed, do not use custom parameters of tether.js
  - input for target and attachment-positions changed into seperate variable for X and Y
- vcl-input:
  - Input 'value' is removed, use ngModel like you would with a regular input
  - removed event-emitters since they are not needed
- vcl-flip-switch:
  - switched to 2-way-binding
- vcl-button:
  - rename vcl-button-content to vclButtonStateContent
  - merge vclButtonStateContent attribute with state attribute
  - remove busyLabel, prepIconBusy and appIconBusy (use vclButtonStateContent instead)
- vclBusy:
  - Renamed [vcl-busy] to [vclBusy]
- offClick
  - Renamed [off-click] to [offClick]
- wormhole:
  - Refactoring: see [readme](https://github.com/ng-vcl/ng-vcl/commit/3b16c58421d2300c8f79aec674ced4ca31802ef0)
- vcl-layer:
  - Added @Layer directives
  - Removed ComponentLayer subclass props

## 2017-01-20 - [71a9050](https://github.com/ng-vcl/ng-vcl/commit/71a90504c2d422599bf7bf289c54ea795641459c)

### Breaking Changes
- vcl-month-picker:
  - removed `@Input() useShortNames: boolean`, month names now default to short names, to use long month names, see `dateOptions` changes (have to pass in `{ month: 'long' }`)

### Changes
- vcl-month-picker:
  - introduced `@Input() locales: input: string | string[]`, see [Date.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) first parameter
  - introduced `@Input() dateOptions: any`, see [Date.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) second parameter

## 2017-01-17 - e3c8f1f

### Breaking Changes
- vcl-dropdown: see [readme](https://github.com/ng-vcl/ng-vcl/blob/master/src/components/dropdown/README.md)
  - "select"-event is now "change"
  - the select-event returns now an value-array instead of the items
  - items behave like [html5-options](http://www.w3schools.com/tags/tag_select.asp)
- layer:
  - name reference support removed
  - introduce component layers and LayerRefs

### Changes:
  - added vcl-alert
  - added vcl-busy
  - added vcl-growl
  - added vcl-file-input
  - select no longer uses tether

### Bugfixes

## 2016-12-14 - 15979eb

### Breaking Changes
- angular >= 2.3.0 required   
- vcl-layer: The `<vcl-layer-base>` it added automatically to the app root   
- wormhole: Renamed directives to `wormhole`/`connectWormhole`
