import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CrudModule } from './crud/crud.module';
import { CursoModule } from './curso/curso.module';

import { AppComponent } from './app.component';
import { FirstComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    CrudModule,
    CursoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
