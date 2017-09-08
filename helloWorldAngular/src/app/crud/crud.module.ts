import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudComponent } from './crud.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CrudComponent
  ],
  exports:[
    CrudComponent
  ]
})
export class CrudModule { }
