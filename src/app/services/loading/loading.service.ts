import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingStateSubject = new BehaviorSubject<boolean>(false);
  loadingState = this.loadingStateSubject.asObservable();

  constructor() {}

  show() {
    setTimeout(() => {
      this.loadingStateSubject.next(true);
    });
  }

  hide() {
    setTimeout(() => {
      this.loadingStateSubject.next(false);
    });
  }
}
