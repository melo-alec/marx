import { NgModule } from '@angular/core';
import { MarxEditorComponent } from './marx-editor.component';
import { EditorMenuComponent } from '../editor-menu/editor-menu.component';
import { ToolsModule } from '../tools/tools.module';
import { MentionModule } from 'angular-mentions';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [MarxEditorComponent, EditorMenuComponent],
  imports: [
    ToolsModule,
    MentionModule,
    FormsModule
  ],
  exports: [MarxEditorComponent]
})
export class MarxEditorModule { }
