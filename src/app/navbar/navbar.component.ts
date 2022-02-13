import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cities : String[] = [
    "Badlapur", "Ambernath", "Ulhasnagar", "Vithalwadi", "Kalyan junction", "Thakurli", "Dombivli", "Kopar", "Diva Junction", "Mumbra", "Kalwa", "Thane", "Mulund", "Nahur", "Bhandup", "Ghatkopar"
  ];
}
