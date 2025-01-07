import {Component, OnInit} from '@angular/core';
import {NotificationControllerService} from '../services/services/notification-controller.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit{

  constructor(
    private notifService: NotificationControllerService
  ) {
  }

  ngOnInit(): void {
  }

  getMyNotifications(){

  }

}
