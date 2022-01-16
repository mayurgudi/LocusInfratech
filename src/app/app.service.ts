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

  updateVal(i : number) {
    this.carPos.next(i);
    console.log(this.cpVal)
  }
}
