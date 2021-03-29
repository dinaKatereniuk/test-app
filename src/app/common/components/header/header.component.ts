import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {DataService} from '../../../core/services/data.service';
import {Router} from '@angular/router';
import {User} from 'src/app/shared/auth-mock/auth-mock.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public user: User;

  constructor(private localStorage: LocalStorageService, private dataStore: DataService, private router: Router) {
  }

  ngOnInit(): void {
    this.dataStore.currentUser$.subscribe(dataUser => {
      if (dataUser) {
        this.user = dataUser;
      }
    });
    if (this.localStorage.getUserData()) {
      this.user = this.localStorage.getUserData();
    }
  }

  logout(): void {
    this.user.username = '';
    this.localStorage.clear();
    this.dataStore.updateUser(null);
    this.router.navigate(['/']);
  }
}
