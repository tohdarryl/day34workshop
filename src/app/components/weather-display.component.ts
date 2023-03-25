import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Weather } from '../models';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-display',
  templateUrl: './weather-display.component.html',
  styleUrls: ['./weather-display.component.css']
})
export class WeatherDisplayComponent implements OnInit, OnDestroy{
    // Need WeatherService
    constructor(private weatherSvc: WeatherService){}

    weather!: Weather[]
    weatherSub!: Subscription

    ngOnInit(): void {
       // subscribe, everytime .next() is executed, will pass us data and we'll set data as this.weather
        this.weatherSub = this.weatherSvc.onWeather.subscribe(
          data => this.weather = data
        )
    }

    ngOnDestroy(): void {
      this.weatherSub.unsubscribe()
    }
    
}
