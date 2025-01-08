import {Component, OnInit} from '@angular/core';
import {NotificationControllerService} from '../../services/services/notification-controller.service';
import {TokenService} from '../../token/token.service';
import {NotificationDto} from '../../services/models/notification-dto';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent implements OnInit{

  userId : number
  notificationList : NotificationDto[] = []

  constructor(
    private notifService: NotificationControllerService,
    private tokenService : TokenService
  ) {
    this.userId = this.tokenService.getIdFromToken()
  }

  ngOnInit(): void {
    this.getMyNotifications()
  }

  getMyNotifications() {
    this.notifService.getNotificationById({ id: this.userId })
      .subscribe({
        next: (res: NotificationDto[]) => { // Corrected type
          this.notificationList = res; // Assign the response directly to the list
          console.log(res);
        },
        error: (err) => {
          console.error('Error fetching notifications:', err); // Handle errors
        }
      });
  }


}
