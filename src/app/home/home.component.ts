import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor(private app : AppService) { }

  ngAfterViewInit(): void {
    if(this.app.howItWorks)
    {
      this.scroll('howitworks');
    }
  }

  scroll(loc: string) {
    let elem = document.getElementById(loc)?.offsetTop || 0;
    window.scrollTo({
      top: elem,
      behavior: 'smooth'
    })
  }

  ngOnInit(): void {

  }

  banner = ["Family time and heavenly homes", "Space designed with love", "Comfort zone in every corner of your home"];

  images = ['../../assets/home page/1.jpg', '../../assets/home page/2.jpg', '../../assets/home page/3.jpg','../../assets/home page/4.jpg'];

  check(i: number) {
    console.log("in carousel " + i);
    this.app.updateVal(i);
  }
}
