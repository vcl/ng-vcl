# [1.0.0-beta.5](https://github.com/vcl/ng-vcl/compare/v0.10.0...v1.0.0-beta.5) (2020-02-03)


### Bug Fixes

* **material-design-inputs:** add missing registerInput calls ([d36f515](https://github.com/vcl/ng-vcl/commit/d36f515d2a85d16aadbf1459fdc3746124e8ef97))



# [1.0.0-beta.4](https://github.com/vcl/ng-vcl/compare/v0.10.0...v1.0.0-beta.4) (2020-01-28)


### Code Refactoring

* move repository to [@vcl](https://github.com/vcl) org ([7cb2c54](https://github.com/vcl/ng-vcl/commit/7cb2c54c6b844977cda94d39b4a30f8cfa981371))


### BREAKING CHANGES

* ng-vcl was moved to the `@vcl` namespace. Use `@vcl/ng-vcl` instead of
`@ng-vcl/ng-vcl`.


# [1.0.0-beta.1](https://github.com/ng-vcl/ng-vcl/compare/v0.10.0...v1.0.0-beta.1) (2020-01-24)


### Bug Fixes

* ivy compatibility fixes ([77f85cb](https://github.com/ng-vcl/ng-vcl/commit/77f85cbe14131669c42e9d569ad6500cf4ecef43))


### Code Refactoring

* update to vcl 1.0.0 and angular 9 ([edf7a02](https://github.com/ng-vcl/ng-vcl/commit/edf7a02633c530c3176fee004bd04b08bbcbab50))


### BREAKING CHANGES

* VCL 1.0.0+ and angular 9+ are required.


# [0.11.0-alpha.5](https://github.com/ng-vcl/ng-vcl/compare/v0.10.0...v0.11.0-alpha.5) (2020-01-13)


### Bug Fixes

* **jss-form:** fixes dead code elimination issue on optimized builds ([4b9f3ff](https://github.com/ng-vcl/ng-vcl/commit/4b9f3ffe6156d8472cdb8372e553d15a15fcf8de))



# [0.11.0-alpha.4](https://github.com/ng-vcl/ng-vcl/compare/v0.10.0...v0.11.0-alpha.4) (2020-01-10)

### Features

* **breakpoints:** add breakpoints module ([48d0bb0](https://github.com/ng-vcl/ng-vcl/commit/48d0bb04550ec6fc0d6be57c4df1c45004d3e526))



# [0.11.0-alpha.2](https://github.com/ng-vcl/ng-vcl/compare/v0.10.0...v0.11.0-alpha.2) (2020-01-07)



# [0.11.0-alpha.1](https://github.com/ng-vcl/ng-vcl/compare/v0.10.0...v0.11.0-alpha.1) (2019-11-28)

Updated to VCL 0.7. Check BREAKING CHANGES.

### Code Refactoring

* migrate to VCL 0.7 ([c4a7bc0](https://github.com/ng-vcl/ng-vcl/commit/c4a7bc0003b8b3b05fd8b8f7db0f896e9562a064))
* remove deprecated month-picker and date-picker ([a006339](https://github.com/ng-vcl/ng-vcl/commit/a00633956cc94418ceb7d0914e161f033f377fb4))
* **table:** remove table ([64961ba](https://github.com/ng-vcl/ng-vcl/commit/64961baccbd686925995f6e4d6bad80cebec17e1))


### BREAKING CHANGES

* Migrated to VCL 0.7. Check VCL changelog for breaking changes.
* Removed deprecated month-picker and date-picker. Use calendar instead.
* **table:** Removed table. Use native VCL table instead.



# [0.10.0](https://github.com/ng-vcl/ng-vcl/compare/v0.9.1...v0.10.0) (2019-09-03)


### Bug Fixes

* **slider:** fix/optimize click behavior ([0e714a9](https://github.com/ng-vcl/ng-vcl/commit/0e714a9))
* **datepicker:** remove bottom margin ([d8d463e](https://github.com/ng-vcl/ng-vcl/commit/d8d463e))
* **select:** do not detect changes if view is destroyed ([3eabb52](https://github.com/ng-vcl/ng-vcl/commit/3eabb52))
* add missing form control group imports ([d42a24e](https://github.com/ng-vcl/ng-vcl/commit/d42a24e))
* **demo:** layer - fix forwardRef() runtime error when targeting es2015 ([26c2c0e](https://github.com/ng-vcl/ng-vcl/commit/26c2c0e))
* **material-design-inputs:** fix input group style ([4aa3429](https://github.com/ng-vcl/ng-vcl/commit/4aa3429))
* **select:** highlight selected item ([8f6823e](https://github.com/ng-vcl/ng-vcl/commit/8f6823e))


### Features

* **drawer:** introduce drawer ([c266363](https://github.com/ng-vcl/ng-vcl/commit/c266363))
* **notifier:** add custom class support ([f02e0ff](https://github.com/ng-vcl/ng-vcl/commit/f02e0ff))
* **datepicker:** add dateModifier support ([4df1965](https://github.com/ng-vcl/ng-vcl/commit/4df1965))
* **month-picker:** deprecate and rename month-picker module ([7336c0d](https://github.com/ng-vcl/ng-vcl/commit/7336c0d))
* **calendar:** add calendar support ([a97ddfb](https://github.com/ng-vcl/ng-vcl/commit/a97ddfb))
* **icon:** add vcl:menu ([1822183](https://github.com/ng-vcl/ng-vcl/commit/1822183))
* **icon:** add vcl:calendar ([687a082](https://github.com/ng-vcl/ng-vcl/commit/687a082))
* **icon:** add vcl:clock ([b9dbf20](https://github.com/ng-vcl/ng-vcl/commit/b9dbf20))
* **input:** allow settings the value via vclInput directive ([e06a9b4](https://github.com/ng-vcl/ng-vcl/commit/e06a9b4))

### BREAKING CHANGES

* Requires VCL ^0.6
* Angular ^8.2.1 required
* **month-picker:** The VCLMonthPickerModule is deprecated and renamed to VCLMonthPickerLegacyModule
* **date-picker:** The VCLDatePickerModule module is deprecated and renamed to
VCLDatePickerLegacyModule



## [0.9.1](https://github.com/ng-vcl/ng-vcl/compare/v0.9.0...v0.9.1) (2019-07-24)


### Bug Fixes

* **autocomplete:** Do not trigger autocomplete when attached ([a55e3c3](https://github.com/ng-vcl/ng-vcl/commit/a55e3c3))
* **material-design-inputs:** create config in factory. Fixes aot error ([008823c](https://github.com/ng-vcl/ng-vcl/commit/008823c))


### Features

* **material-design-inputs:** Simplify styles, add placeholder face out/in, fixes ([ffcc9db](https://github.com/ng-vcl/ng-vcl/commit/ffcc9db))
* **webpack-helper:** Support multiple global styles ([d446a14](https://github.com/ng-vcl/ng-vcl/commit/d446a14))



# [0.9.0](https://github.com/ng-vcl/ng-vcl/compare/v0.8.0...v0.9.0) (2019-07-05)


### Bug Fixes

* **demo:** fix form-control-group radio buttons ([eadcd7f](https://github.com/ng-vcl/ng-vcl/commit/eadcd7f))
* **demo:** radio button icons ([b16ccb8](https://github.com/ng-vcl/ng-vcl/commit/b16ccb8))
* **offclick:** Move event handler to ngAfterInity ([d9cd634](https://github.com/ng-vcl/ng-vcl/commit/d9cd634))
* **token:** Add flex class to input ([4311ca8](https://github.com/ng-vcl/ng-vcl/commit/4311ca8))
* Update deps ([4b35730](https://github.com/ng-vcl/ng-vcl/commit/4b35730))


### Features

* **form-control-group:** Add materiel design inputs module ([1f4d6ac](https://github.com/ng-vcl/ng-vcl/commit/1f4d6ac))
* **form-control-group:** provide type attribute ([16a22a8](https://github.com/ng-vcl/ng-vcl/commit/16a22a8))
* **icon:** Allow defining icon resolvers on module/component level ([a126bb7](https://github.com/ng-vcl/ng-vcl/commit/a126bb7))
* **popover:** Add support for offclick close and scrollStrategy ([8d8189f](https://github.com/ng-vcl/ng-vcl/commit/8d8189f))



## 0.7.x

Updated to VCL 0.4

## 0.5.x

### Breaking changes

#### ng-vcl
- requires Angular ^6 / rxjs ^6
- removed integrated l10n support
- removed plotly.js & json-editor packages
- embedded-input-group:
  - removed prepButtonIcon/apppButtonIcon properties
  - added ng-content for appended button
- icon:
  - removed svguse/src properties
- link:
  - removed scheme property
- icogram:
  - replaced flexLabel property with vclLayout directive
- badge/label:
  - refactored. Used as directive
- button:
  - extracted features from vcl-button to directives
  - removed busy button
- button-group:
  - removed `selected` property from button
  - renamed `change` event to `selectionChange`
- notifier:
  - removed text parameter from notifier service
- vcl-date-picker:
  - removed 284px height lock

## 0.4.x

### Notes

### Breaking changes

#### ng-vcl
- requires Angular ^5
- select/dropdown/metalist:
  - Removed selected property from items/options. Use value property on vcl-metalist, vcl-dropdown or vcl-select instead.
- token:
  - change event renamed to tokensChange
  - token-input must be used as container with vcl-input
- password-input:
  - Must be used as container with vcl-input
- link:
  - Must be with `a` tag: `<a vcl-link ...>`
- nav:
  - Must be with `nav` tah: `<nav vcl-navigation ...>`
- radio-button:
  - Changed html structure
  - Removed support for labelPosition and changed to iconPosition
- checkbox:
  - Changed html structure
  - Removed support for labelPosition and changed to iconPosition

#### vcl-plotly
  - added `@Input() width: number` and `@Input() height: number` to provide plot dimensions
  in percentages relative to the parent element which will be kept on window resize

## 0.3.x (?)

### Notes

This release brings back hammerjs into the main package.
A `compatibility` release without hammerjs is found on github.
```
npm install ng-vcl/ng-vcl#dist_v0.3-comp
```

### Changes

- (BREAKING) Added hammerjs to peer dependencies
- (BREAKING) requires Angular ^4.2.0
- (BREAKING) Removed kitchen sink module: `VCLModule`
- Replaced all internal click events with tap events
- metalist:
  - (BREAKING) metalist items will be declared via `<vcl-metalist-item>` elements instead of using the item attribute. 
  - (BREAKING) Use `selectionMode`/`mode` to enable multi selection
- dropdown:
  - (BREAKING) dropdown items will be declared via `<vcl-dropdown-option>` elements instead of using the item attribute. 
  - (BREAKING) Use `selectionMode`/`mode` to enable multi selection
  - (BREAKING) removed support for `minSelectableItems`
  - activated keyboard interaction on by default
- select:
  - (BREAKING) select items will be declared via `<vcl-select-option>` elements instead of using the item attribute. 
  - (BREAKING) removed support for `minSelectableItems`
  - (BREAKING) Use `selectionMode`/`mode` to enable multi selection
  - better keyboard interaction
  - activated keyboard interaction on by default
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
- l10n:
  - Added `L10nAsyncLoader`
- layer:
  - (BREAKING) Removed offClickClose option
  - (BREAKING) Use `VCLLayerModule.forRoot()` and `VCLLayerModule.forChild()` for imports
  - (BREAKING) Renamed `LayerWrapperComponent` to `LayerContainerComponent`
  - Non-modal layers block background interaction and are closed on a background click  
  - Support dynamic creation of component layers
- radio-button:
  - (BREAKING) Removed VCLRadioGroupModule and reimplemented radio-group in VCLRadioButtonModule
  - (BREAKING) radio-group options must be declared via radio-buttons instead of using the options attribute. 
- navigation: 
  - (BREAKING) removed `selectedItem` attribute from nav
  - (BREAKING) removed `touchAction` attribute from nav
  - (BREAKING) removed `navigationItems` attribute from nav
  - (BREAKING) removed `selected` attribute from item
  - (BREAKING) removed `active` attribute from item
  - (BREAKING) ng router navigation is not used by default. To enable set `useRouter` to `true`
  - Added `useRouter` attribute
- slider:
  - (BREAKING) scaleNames attribute renamed to scale
  - value attribute switched to 2-way-binding
  - Added support for mousewheel 
- wormhole:
  - (BREAKING) renamed wormhole directive selector and attributes
  - (BREAKING) removed `WormholeRef` class. Use `Wormhole` instead
  - (BREAKING) replaced `WormholeManager` with `WormholeHost` class
  - (BREAKING) removed `VCLWormholeModule.withRootComponents`
  - (BREAKING) reimplement `WormholeService` as `DomWormholeHost`
  - add `DomComponentWormhole`
- vcl-month-picker:
  - renamed `@Input() minSelectableItems: number` to `@Input() minSelectableMonths: number`
  - renamed `@Input() maxSelectableItems: number` to `@Input() maxSelectableMonths: number`
- alert
  - introduce confirmAction

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
