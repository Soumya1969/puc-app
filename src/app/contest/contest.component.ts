import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Contest{
  constructor(
    public name: string,
    public url: string,
    public start_time: string,
    public end_time: string,
    public duration: string,
    public site: string,
    public in_24_hours: string,
    public status: string,
  ){}
}


@Component({
  selector: 'app-contest',
  templateUrl: './contest.component.html',
  styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {

  contest: Contest[] ;
  name = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
      this.getContest();
  }

  getContest(){
    this.httpClient.get<any>('https://kontests.net/api/v1/all').subscribe(
      Response =>{
        console.log(Response);
        this.contest = Response
      }
    );
  }

  
}
