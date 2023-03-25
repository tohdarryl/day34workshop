import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { firstValueFrom, Subject } from "rxjs";
import { Weather } from "./models";

const WEATHER_URL ="https://api.openweathermap.org/data/2.5/weather"
const APPID = "take API from website"

@Injectable()
export class WeatherService {

    // Weather[] : as could be more than 1 weather
    onWeather = new Subject <Weather[]>()

    constructor(private http: HttpClient){}

    getWeatherByCity(city: string){
        const params = new HttpParams()
        .set('q', city)
        .set('units', 'metric')
        .set('appId', APPID)

        // firstValueForm returns a Promise<Weather[]>
        return firstValueFrom(
            // Make Http call, since const param is the same as variable name in argument {params: params}, can do { params} 
            this.http.get<Weather[]>(WEATHER_URL, {params})
        ).then((data: any) => {
            // Map data as Weather[]
            return data['weather'] as Weather[]
        }).then(data => {
            // tap()
            // fire event with .next() so that weather-display/ interested components can subscribe to our data
            // go to weather-display.component.ts
            this.onWeather.next(data)
            console.log(data)
            return data
        })
    }

}