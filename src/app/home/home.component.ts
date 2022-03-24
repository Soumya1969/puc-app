import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  constructor(private router: Router,
    private route: ActivatedRoute) { }

    onWeather(){
      this.router.navigate(['weather'],{relativeTo:this.route});
    }

    onParent(){
      this.router.navigate(['card'],{relativeTo:this.route});
    }
    onContest(){
      this.router.navigate(['contest'],{relativeTo:this.route});
    }



  ngOnInit(): void {
  }

}
