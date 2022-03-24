import { Component, OnInit } from '@angular/core';
import { SiblingService } from 'src/app/sibling.service';

@Component({
  selector: 'app-childcomp2',
  templateUrl: './childcomp2.component.html',
  styleUrls: ['./childcomp2.component.css']
})
export class Childcomp2Component implements OnInit {

  Name;


  constructor(private message: SiblingService) { }

  ngOnInit() {
    this.message.getMessage().subscribe( message =>{
      if(message){
        this.Name = message;
      }
    });
  }

}
