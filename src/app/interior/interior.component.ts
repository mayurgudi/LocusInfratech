import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.sass']
})
export class InteriorComponent implements OnInit {

  constructor(private router : Router) {
    this.page = 0;
    window.scrollTo(0,0);
    if(this.router.url == '/interior')
    {
      this.isInterior = true;
    }
    else{
      this.isInterior = false;
    }
  }

  ngOnInit(): void {

  }

  kitchen : String[] = ["k1","k2","k3"];
  bedroom : String[] = ["k1","k2","k3"];
  livingroom : String[] = ["k1","k2","k3"];
  kidsroom : String[] = ["k1","k2","k3"];
  washroom : String[] = ["k1","k2","k3"];
  epoxy : String[] = ["k1","k2","k3"];
  wardrobe : String[] = ["k1","k2","k3"];
  homes : String[] = ["k1","k2","k3"];
  page : number;
  isInterior : boolean;

  back() {
    history.back();
  }

  updatePage(i : number) {
    this.page = i;
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
