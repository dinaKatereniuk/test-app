import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  message = new BehaviorSubject<string>(null);
  currentMessage$ = this.message.asObservable();

  constructor() {
  }

  updateMessage(value: string): void {
    this.message.next(value);
  }
}
