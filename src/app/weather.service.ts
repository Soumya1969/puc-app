import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getDetails(){
    return this.http.get<any>("https://weatherdbi.herokuapp.com/data/weather/london")
    .pipe(map((res:any)=>{
      return res;
    }))

  }
}
