import { NgModule } from '@angular/core';
import { MarxEditorComponent } from './marx-editor.component';
import { EditorMenuComponent } from '../editor-menu/editor-menu.component';
import { ToolsModule } from '../tools/tools.module';

@NgModule({
  declarations: [MarxEditorComponent, EditorMenuComponent],
  imports: [
    ToolsModule
  ],
  exports: [MarxEditorComponent]
})
export class MarxEditorModule { }
