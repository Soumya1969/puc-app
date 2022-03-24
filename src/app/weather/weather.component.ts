import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  WeatherData: any;

  constructor(private api: WeatherService) { }

  ngOnInit(): void {
    this.api.getDetails().subscribe(res=>{
      this.WeatherData = res;
    })
  }

}  
