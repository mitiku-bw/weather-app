//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map'

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apikey = 'cb683fa073b8f14a';
  url;

  //constructor(public http: HttpClient) {
  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.wunderground.com/api/'+ this.apikey +'/conditions/q';
  }
  getWeather(city, country){
    return this.http.get(this.url + '/' + country + '/' + city + '.json')
    .map(res => res.json());
  }

}
