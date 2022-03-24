import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContestService {

  constructor(private http: HttpClient) { }
  getDetails(){
    return this.http.get<any>("https://kontests.net/api/v1/all")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
