import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.sass']
})
export class PreviewComponent implements OnInit {

  constructor() { }

  images : string[] = ["../../../assets/homes/1.jpeg", "../../../assets/homes/13.jpeg", "../../../assets/homes/5.jpeg"];

  ngOnInit(): void {
    $(document).ready(function() {
      var owl = $('#preview');
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
    }) 
  }
}
