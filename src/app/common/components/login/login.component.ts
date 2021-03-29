import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthMockService} from '../../../shared/auth-mock/auth-mock.service';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {DataService} from '../../../core/services/data.service';
import {NotificationService} from '../../../core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    login: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder, private authService: AuthMockService, private router: Router, private localStorage: LocalStorageService, private dataStore: DataService, private notification: NotificationService) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const login = this.profileForm.controls.login.value;
    const password = this.profileForm.controls.password.value;
    if (this.profileForm.valid) {
      this.authService.login(login, password).subscribe((data) => {
          this.localStorage.setUserData(data.body);
          this.dataStore.updateUser(data.body);
          this.router.navigate(['posts']);
        },
        (error) => {
          if (error.status === 401) {
            this.notification.updateMessage('Invalid credentials');
          }
        }
      );
    }
  }
}
