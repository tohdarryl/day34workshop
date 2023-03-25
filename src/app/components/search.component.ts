import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  form!:FormGroup
  
  // need FormBuilder and WeatherService
  constructor(private fb: FormBuilder, private weatherSvc: WeatherService){}

  ngOnInit(): void {
      this.form=this.fb.group({
        city: this.fb.control<string>('', [Validators.required])
      })
  }

  getWeather(){
    const city = this.form.value.city
    console.log(">>> city", city)
    this.weatherSvc.getWeatherByCity(city)
  }
}
