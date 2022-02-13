import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-pointer',
  templateUrl: './pointer.component.html',
  styleUrls: ['./pointer.component.sass']
})
export class PointerComponent implements OnInit {

  constructor(private app: AppService) { }

  ngOnInit(): void {
    this.percentArray = [true, false, false, false, false];
  }

  carPos = this.app.cpVal;
  activeSlide = 0;
  percentArray : boolean[] = [];
  arr : string[] = ["Meet designer", "Seal the deal", "Place the order", "Installation begins", "Move in"];
  percent : number[] = [0, 25, 50, 75, 100];

  images = ["../../../assets/its easier than you think/installation1 final.png",
            "../../../assets/its easier than you think/meet the designer.png",
            "../../../assets/its easier than you think/move in-01.png",
            "../../../assets/its easier than you think/place the order.png",
            "../../../assets/its easier than you think/wb seal the deal2 final.png"];

  fillArray(i : number) {
    for(var j=0; j<=i; j++){
      this.percentArray[j] = true;
    }
    for(var j=i+1; j<this.percentArray.length; j++){
      this.percentArray[j] = false;
    }
  }

  increment() {
    if(this.activeSlide >= 0 && this.activeSlide < this.arr.length - 1)
    {
      this.activeSlide = this.activeSlide + 1;
      this.fillArray(this.activeSlide);
    }
  }

  decrement() {
    if(this.activeSlide > 0 && this.activeSlide < this.arr.length)
    {
      this.activeSlide = this.activeSlide - 1;
      this.fillArray(this.activeSlide);
    }
  }
}
