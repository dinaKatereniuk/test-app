import {Injectable} from '@angular/core';
import {User} from 'src/app/shared/auth-mock/auth-mock.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  public USER_DATA = 'userData';

  constructor() {
  }

  setUserData(userInfo: User): void {
    const user = JSON.stringify(userInfo);
    localStorage.setItem(this.USER_DATA, user);
  }

  getUserData(): User {
    return JSON.parse(localStorage.getItem(this.USER_DATA));
  }

  clear(): void {
    return localStorage.clear();
  }
}
