import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WeatherDisplayComponent } from './components/weather-display.component';
import { SearchComponent } from './components/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { WeatherService } from './weather.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherDisplayComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    HttpClientModule

  ],
  // Insert WeatherService here
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
