import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() {
    this.carPos.subscribe((value)=>{
      this.cpVal = value;
    });
  }

  cpVal : number = 0;
  carPos: Subject<number> = new Subject<number>();
  page: number = 0;
  section: string = "kitchen";
  howItWorks: boolean = false;

  updateVal(i : number) {
    this.carPos.next(i);
  }
}
