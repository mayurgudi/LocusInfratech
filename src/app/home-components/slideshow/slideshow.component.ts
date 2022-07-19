import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass']
})
export class SlideshowComponent implements OnInit {

  constructor() { }

  images : string[] = ["../../../assets/bedroom/1.jpg", "../../../assets/living room/1.jpg", "../../../assets/washroom/1.jpg"];

  ngOnInit(): void {
    $(document).ready(function() {
      var owl = $('.owl-carousel');
      owl.owlCarousel({
        loop: false,
        autoplay: false,
        center: true,
        dots: false,
        startPosition: "1",
        responsive: {
          0: {
            items: 2,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
      // window.location.href = "2";
    }) 
  }

}
