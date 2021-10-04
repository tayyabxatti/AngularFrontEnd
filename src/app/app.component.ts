import { Component } from '@angular/core';
import { ConfigService } from './app-config.service';
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skolManagement';
  constructor(
    private configService: ConfigService,
  ) {
    this.getNotificationOptions();
  }
  public getNotificationOptions(): any {
    return this.configService.get('notifications').options;
  }
}
