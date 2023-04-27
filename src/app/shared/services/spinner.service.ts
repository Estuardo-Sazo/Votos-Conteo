import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoadind$ = new Subject<boolean>();
  constructor() {}

  show(): void {
    this.isLoadind$.next(true);
  }
  hide(): void {
    this.isLoadind$.next(false);
  }
}
