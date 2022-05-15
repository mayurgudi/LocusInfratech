import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  cities : String[] = [
    "Badlapur", "Ambernath", "Ulhasnagar", "Vithalwadi", "Kalyan junction", "Thakurli", "Dombivli", "Kopar", "Diva Junction", "Mumbra", "Kalwa", "Thane", "Mulund", "Nahur", "Bhandup", "Ghatkopar"
  ];

  desktopPages: Map<String, Number>;
  mobilePages: Map<String, Number>;

  constructor(private router: Router, private app: AppService) {
    window.scrollTo(0,0);
    this.desktopPages = new Map<String, number>();
    this.desktopPages.set("kitchen", 0);
    this.desktopPages.set("bedroom", 0);
    this.desktopPages.set("kidsroom", 1);
    this.desktopPages.set("livingroom", 1);
    this.desktopPages.set("washroom", 2);
    this.desktopPages.set("epoxy", 2);
    this.desktopPages.set("wardrobe", 3);

    this.mobilePages = new Map<String, number>();
    this.mobilePages.set("kitchen", 0);
    this.mobilePages.set("bedroom", 1);
    this.mobilePages.set("kidsroom", 2);
    this.mobilePages.set("livingroom", 3);
    this.mobilePages.set("washroom", 4);
    this.mobilePages.set("epoxy", 5);
    this.mobilePages.set("wardrobe", 6);
  }

  ngOnInit(): void {
``
  }

  scroll(loc: string) {
    let elem = document.getElementById(loc)?.offsetTop || 0;
    window.scrollTo({
      top: elem,
      behavior: 'smooth'
    })
  }

  navigateInterior(loc: string, screen: number){
    var pg : any = 0;
    if(screen == 0)
    {
      pg = this.desktopPages.get(loc);
    }
    else
    {
      pg = this.mobilePages.get(loc);
    }
    this.app.page = pg;
    this.app.section = loc;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => this.router.navigate(['interior']));
  }

  navigateHome()
  {
    if(this.router.url == '/home')
    {
      this.app.howItWorks = false;
      this.scroll('howitworks');
    }
    else
    {
      this.app.howItWorks = true;
      this.router.navigate(['home']);
    }
  }
}
