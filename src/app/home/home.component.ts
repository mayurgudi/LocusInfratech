import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
declare var $: any;

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
    window.scrollTo(0,0);
    $(document).ready(function() {
      $('#slideshow').carousel();
      // var owl = $('#home-carousel');
      // owl.owlCarousel({
      //   loop: true,
      //   autoplay: 3000,
      //   autoplaySpeed: 1500,
      //   center: true,
      //   dots: true,
      //   items: 1,

      // });
    })
  }

  banner = ["Family time and heavenly homes", "Space designed with love", "Comfort zone in every corner of your home"];

  images = ['../../assets/home page/1.jpg', '../../assets/home page/2.jpg', '../../assets/home page/3.jpg','../../assets/home page/4.jpg'];

  check(i: number) {
    this.app.updateVal(i);
  }
}
