import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,
    private route: ActivatedRoute) { }

  onRegister(){
    this.router.navigate(['register'],{relativeTo:this.route});
  }

  onLogin(){
    this.router.navigate(['login'],{relativeTo:this.route});
  }

  ngOnInit(): void {
  }

}
