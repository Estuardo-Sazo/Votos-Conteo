import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ConnectionServiceService {
  private connectionErrorSubject = new Subject<boolean>();
  private connectionErrorMessageSubject = new BehaviorSubject <string>('');

  connectionError$ = this.connectionErrorSubject.asObservable();
  connectionErrorMessage$ = this.connectionErrorMessageSubject.asObservable();

  setConnectionError(errorMessage: string) {
    this.connectionErrorSubject.next(true);
    this.connectionErrorMessageSubject.next(errorMessage);
  }

  clearConnectionError() {
    this.connectionErrorSubject.next(false);
    this.connectionErrorMessageSubject.next('');
  }
}
