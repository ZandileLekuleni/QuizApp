import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-foodr',
  templateUrl: './foodr.page.html',
  styleUrls: ['./foodr.page.scss'],
})
export class FoodrPage implements OnInit {
  r;
  r1;
  r2;
  r3;
  r4;
  score;
  disabled;
  constructor(private route: ActivatedRoute,private router: Router) { 
    this.score=0;
    this.disabled=false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params=>{
      console.log(params)
      this.r=params.theradio
      console.log(this.r),
      this.r1=params.theradio1
      console.log(this.r1)
      this.r2=params.theradio2
      console.log(this.r2)
      this.r3=params.theradio3
      console.log(this.r3)
      this.r4=params.theradio4
      console.log(this.r4)
    })
  }

  show(){
    if (this.r=="Manchester United") {
      this.score+=1;
    }else{
      this.score=this.score;
    }

    if (this.r1=="Brazil") {
      this.score+=1;
    }else{
      this.score=this.score;
    }
    if (this.r2=="Lionel Messi") {
      this.score+=1;
    }
    else{
      this.score=this.score;
    }
    if (this.r3=="5 Seconds") {
      this.score+=1;
    }
    else{
      this.score=this.score;
    }
    if (this.r4=="Blue and Red") {
      this.score+=1;
    }
    else{
      this.score=this.score;
    }
    this.disabled=true;
    console.log(this.score)
  }
  next(){
    this.router.navigateByUrl("musicc");
  }
}
