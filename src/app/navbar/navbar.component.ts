import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private app: AppService) {
    window.scrollTo(0,0);
  }

  ngOnInit(): void {

  }

  cities : String[] = [
    "Badlapur", "Ambernath", "Ulhasnagar", "Vithalwadi", "Kalyan junction", "Thakurli", "Dombivli", "Kopar", "Diva Junction", "Mumbra", "Kalwa", "Thane", "Mulund", "Nahur", "Bhandup", "Ghatkopar"
  ];

  scroll(loc: string) {
    let elem = document.getElementById(loc)?.offsetTop || 0;
    window.scrollTo({
      top: elem,
      behavior: 'smooth'
    })
  }

  navigateInterior(loc: string, pg: number){
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
