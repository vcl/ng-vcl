# vcl-json-editor

A json-editor based on [jsoneditor](https://github.com/josdejong/jsoneditor).

## Installation

```sh
npm install @ng-vcl/json-editor --save
```

## Usage:

```javascript
import { VCLJsonEditorModule } from 'ng-vcl';

@NgModule({
  imports: [ VCLJsonEditorModule ],
  ...
})
export class AppComponent {}
```

```html
<vcl-json-editor [value]="myObject"></vcl-json-editor>
```

### API

#### vcl-json-editor properties:

Name      | Type   | Default | Description
--------- | ------ | ------- | -----------------------------------------------------------------------------------------------------------------------
`mode`    | string | 'tree'  | Editormode ENUM('tree','form','text','view')
`height`  | string | '250px' | height of the editor-window
`value`   | string | {}      | An Object to begin editing with
`options` | object | {}      | Any jsoneditor specific content. See [JSON-EDITOR-API](https://github.com/josdejong/jsoneditor/blob/master/docs/api.md)
