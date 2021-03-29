import {Component, OnInit, ViewChild} from '@angular/core';
import {NotificationService} from '../../../core/services/notification.service';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap/alert/alert';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @ViewChild('alert') staticAlert: NgbAlert;
  errorMessage: string;

  constructor(private notification: NotificationService) {
  }

  ngOnInit(): void {
    this.notification.currentMessage$.subscribe(message => this.errorMessage = message);
    this.notification.currentMessage$.pipe(debounceTime(3000)).subscribe(() => {
      if (this.staticAlert) {
        this.staticAlert.close();
      }
    });
  }
}
