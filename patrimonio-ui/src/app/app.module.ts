import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';

import { ItemService } from './item.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,  // resources of form 
    DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule,  // components of primeng
    HttpClientModule,  // to user services and call the backend
    BrowserAnimationsModule  // to user animation in prime ng
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
