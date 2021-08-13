import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherApiByCity =`api.openweathermap.org/data/2.5/weather?q={city name},{state code}&appid={API key}`
  weatherApiByZipcode = `api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}`
  constructor() { }
}
