import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-interior',
  templateUrl: './interior.component.html',
  styleUrls: ['./interior.component.sass']
})
export class InteriorComponent implements OnInit, AfterViewInit {

  constructor(private router : Router, private app: AppService, private cdr: ChangeDetectorRef) {
    this.page = 0;
  }

  ngOnInit(): void {
    console.log(this.router.url);
    if(this.router.url.startsWith('/interior'))
    {
      this.isInterior = true;
    }
    else{
      this.isInterior = false;
    }
  }

  ngAfterViewInit(): void {
    if(this.isInterior)
    {
      this.page = this.app.page;
      this.cdr.detectChanges();
      this.scroll(this.app.section);
    }
  }

  kitchen : String[] = ["../../assets/kitchen/1.jpg","../../assets/kitchen/2.jpg","../../assets/kitchen/3.jpg","../../assets/kitchen/4.jpg","../../assets/kitchen/5.jpg","../../assets/kitchen/6.jpg","../../assets/kitchen/7.jpg","../../assets/kitchen/8.jpg","../../assets/kitchen/9.jpg","../../assets/kitchen/10.jpg","../../assets/kitchen/11.jpg","../../assets/kitchen/12.jpg"];
  bedroom : String[] = ["../../assets/bedroom/1.jpg","../../assets/bedroom/2.jpg","../../assets/bedroom/3.jpg","../../assets/bedroom/4.jpg","../../assets/bedroom/5.jpg","../../assets/bedroom/6.jpg","../../assets/bedroom/7.jpg","../../assets/bedroom/8.jpg","../../assets/bedroom/9.jpg","../../assets/bedroom/10.jpg","../../assets/bedroom/11.jpg","../../assets/bedroom/12.jpg"];
  livingroom : String[] = ["../../assets/living room/1.jpg","../../assets/living room/2.jpg","../../assets/living room/3.jpg","../../assets/living room/4.jpg","../../assets/living room/5.jpg","../../assets/living room/6.jpg","../../assets/living room/8.jpg","../../assets/living room/9.jpg","../../assets/living room/10.jpg","../../assets/living room/11.jpg","../../assets/living room/12.jpg","../../assets/living room/13.jpg","../../assets/living room/14.jpg","../../assets/living room/15.jpg","../../assets/living room/16.jpg","../../assets/living room/17.jpg","../../assets/living room/18.jpg","../../assets/living room/19.jpg","../../assets/living room/20.jpg","../../assets/living room/21.jpg","../../assets/living room/22.jpg"];
  kidsroom : String[] = ["../../assets/kids room/1.jpg","../../assets/kids room/2.jpg","../../assets/kids room/3.jpg","../../assets/kids room/4.jpg","../../assets/kids room/5.jpg","../../assets/kids room/6.jpg","../../assets/kids room/7.jpg","../../assets/kids room/8.jpg","../../assets/kids room/9.jpg","../../assets/kids room/10.jpg","../../assets/kids room/11.jpg","../../assets/kids room/12.jpg"];
  washroom : String[] = ["../../assets/washroom/1.jpg","../../assets/washroom/2.jpg","../../assets/washroom/3.jpg","../../assets/washroom/4.jpg"];
  epoxy : String[] = ["../../assets/epoxy flooring/1.jpg","../../assets/epoxy flooring/2.png","../../assets/epoxy flooring/3.jpg","../../assets/epoxy flooring/4.png","../../assets/epoxy flooring/5.png","../../assets/epoxy flooring/6.png","../../assets/epoxy flooring/7.png","../../assets/epoxy flooring/9.jpg","../../assets/epoxy flooring/10.jpg","../../assets/epoxy flooring/11.jpg","../../assets/epoxy flooring/12.jpg"];
  wardrobe : String[] = ["../../assets/wardrobe/1.jpg","../../assets/wardrobe/2.jpg","../../assets/wardrobe/3.jpg","../../assets/wardrobe/4.jpg","../../assets/wardrobe/5.jpg","../../assets/wardrobe/6.jpg","../../assets/wardrobe/7.jpg","../../assets/wardrobe/8.jpg","../../assets/wardrobe/9.jpg","../../assets/wardrobe/10.jpg","../../assets/wardrobe/11.jpg","../../assets/wardrobe/12.jpg"];
  homes : String[] = ["../../assets/homes/1.jpeg","../../assets/homes/2.jpeg","../../assets/homes/3.jpeg","../../assets/homes/4.jpeg","../../assets/homes/5.jpeg","../../assets/homes/6.jpeg","../../assets/homes/7.jpeg","../../assets/homes/8.jpeg","../../assets/homes/9.jpeg","../../assets/homes/10.jpeg","../../assets/homes/11.jpeg","../../assets/homes/12.jpeg","../../assets/homes/13.jpeg","../../assets/homes/14.jpeg","../../assets/homes/15.jpeg","../../assets/homes/16.jpeg","../../assets/homes/17.jpeg","../../assets/homes/18.jpeg","../../assets/homes/19.jpeg","../../assets/homes/20.jpeg","../../assets/homes/21.jpeg"];
  page : number;
  isInterior : boolean = true;

  back() {
    history.back();
  }

  scroll(loc: string) {
    let elem = document.getElementById(loc)?.offsetTop || 0;
    window.scrollTo({
      top: elem,
      behavior: 'smooth'
    })
  }

  updatePage(i : number) {
    this.page = i;
    this.cdr.detectChanges();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
