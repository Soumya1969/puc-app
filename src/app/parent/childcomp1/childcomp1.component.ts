import { Component, OnInit } from '@angular/core';
import { SiblingService} from 'src/app/sibling.service'

@Component({
  selector: 'app-childcomp1',
  templateUrl: './childcomp1.component.html',
  styleUrls: ['./childcomp1.component.css']
})
export class Childcomp1Component implements OnInit {

  Name;

  constructor(private SiblingService: SiblingService) { }

  ngOnInit() {}

  inputOnchange() {
    this.SiblingService.sendMessage(this.Name);
    

  }
}

