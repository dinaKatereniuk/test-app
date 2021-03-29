import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {User} from 'src/app/shared/auth-mock/auth-mock.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  user = new BehaviorSubject<User>(null);
  currentUser$ = this.user.asObservable();

  constructor() {
  }

  updateUser(value: User): void {
    this.user.next(value);
  }
}
