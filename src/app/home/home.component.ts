import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private app : AppService) { }

  ngOnInit(): void {

  }

  images = [`https://picsum.photos/id/700/900/500`, `https://picsum.photos/id/800/900/500`, `https://picsum.photos/id/807/900/500`];

  check(i: number) {
    console.log("in caroisel " + i);
    this.app.updateVal(i);
  }
}
