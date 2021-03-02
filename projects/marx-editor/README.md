# Marx

Marx Editor was created in the memory of late Karl Heinrich Marx (1818 - 1883). 
This is a small tribute to honour his writings including the legendary book "The Communist Manifesto"


## Usage

Add the package as a dependency to your project using:

    npm i marx-editor

Add the module to your app.module imports:

   import { MarxEditorModule } from 'marx-editor';
    ...

    @NgModule({
        imports: [ MarxEditorModule ],
        ...
    })

#### Configuration Options

The following optional configuration items can be used.

| Option        | Description 
| ---           | ---         
| editorConfig  |  Object containing the configurations for the marx-editor. |
| ngModel       |  Marx-editor is two way bindable and can be used with ngModel |


#### Keys within editorConfig object

| Option           | Type                             | Description 
| ---              | ---                              | ---         
| file             | boolean                          | Optional field to enable or disable file upload option inside the editor. |
| id               | string                           | Optional field to add a unique id for each instance of editor, by default each instance of editor created has a unique id |
| placeholder      | string                           | Optional field to display a message when editor is empty. |
| toolbarPlacement | 'top' | 'bottom'                 | Optional field to diplay the toolbar at the top or bottom, by default the toolbar is placed at the bottom |
| colorPalette     | boolean                          | Optional field to enable or disable font and text-background color options in toolbar. |
| buttonName       | string                           | Optional field to display a submit button in the editor toolbar that emits all the editor html data on click |
| buttonDisabled   | boolean                          | Optional field to enable or disable the submit button that is present in the toolbar |
| mentionedNames   | Array i.e 
                     [{id: number, name: string}, ...] | Optional field to add tributes inside the editor and trigger a list of names with @ button in toolbar or keyboard @ button |
| mentionedDates   | Array i.e
                     ['12/1/2020', '11/2/2021',....]   | Optional field to add tributes inside the editor and trigger a list of dates with the # button in the toolbar or keyboard # button |

#### Output Events

The following output events can be used.

| Output        | Description |
| ---           | ---         |
| `@Output() comment EventEmitter<string>` | Emitted whenever the user clicks on the submit button and it clears the editor and emits whatever data that was present in the editor
| `@Output() sendSavedFiles EventEmitter<any[]>` | Emitted when the user uploads a list of files through the editor.
