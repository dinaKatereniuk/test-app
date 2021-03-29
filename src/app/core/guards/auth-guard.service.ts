import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LocalStorageService} from '../services/local-storage.service';
import {NotificationService} from '../services/notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private localStorage: LocalStorageService, private router: Router, private notification: NotificationService) {
  }

  canActivate(): boolean {
    if (this.localStorage.getUserData()) {
      return true;
    }
    this.notification.updateMessage('You dont have access to this page, please login firstly');
    this.router.navigate(['login']);
  }
}
