import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskInputComponent } from './task-input-component/task-input-component.component';
import { TaskListComponentComponent } from './task-list-component/task-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskInputComponent,
    TaskListComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
