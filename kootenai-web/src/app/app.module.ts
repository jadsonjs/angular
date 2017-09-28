import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';

import { HomeService } from './home/home.service';
import { ChartsComponent } from './charts/charts.component';
import { ScenariosComponent } from './scenarios/scenarios.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ChartsComponent,
    ScenariosComponent
  ],
  imports: [
    HttpClientModule,  // to user services and call the backend
    BrowserModule,
    routing
  ],
  providers: [HomeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
