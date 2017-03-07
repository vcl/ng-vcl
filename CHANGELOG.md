# Changelog

## 0.2.1 (2017-03-01)

Bugfix release

## 0.2.0 (2017-02-24)

### Changes
- Replaced tap with click events
- Removed hammerjs from peer dependencies

### Breaking Changes
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
