import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private messageSubject = new Subject<string>();
  message = this.messageSubject.asObservable();

  constructor() {}

  show(message: string) {
    setTimeout(() => {
      this.messageSubject.next(message);
    });
  }

  clear() {
    setTimeout(() => {
      this.messageSubject.next('');
    });
  }
}
