import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musicq',
  templateUrl: './musicq.page.html',
  styleUrls: ['./musicq.page.scss'],
})
export class MusicqPage implements OnInit {

  score: string;
  theradio: string;
  theradio1: string;
  theradio2: string;
  theradio3: string;
  theradio4: string;

  constructor(private router:Router) { }
  calc(){
    console.log(this.theradio)
    console.log(this.theradio1)
    console.log(this.theradio2)
    console.log(this.theradio3)
    console.log(this.theradio4)
  
    this.router.navigateByUrl("musicr")
    this.router.navigate(['/musicr'],{queryParams: {theradio:this.theradio,theradio1:this.theradio1,theradio2:this.theradio2,theradio3:this.theradio3,theradio4:this.theradio4}})
    console.log(this.score)
    }

  ngOnInit() {
  }

}
