import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationsService } from 'angular2-notifications';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/app-config.service';

@Injectable()
export class UtilityService {
  constructor(
    private translateService: TranslateService,
    private notificationService: NotificationsService,
    private configService: ConfigService
  ) {}

  /**
   * Translates given message code and title code and displays corresponding notification
   *
   * @param messageTranslationCode
   * @param type
   * @param titleTranslationCode
   */
  public displayNotification(
    messageTranslationCode: string,
    type: string = 'info',
    titleTranslationCode?: string
  ) {
    const message: string = this.translateService.instant(messageTranslationCode);
    let title: string = titleTranslationCode
      ? this.translateService.instant(titleTranslationCode)
      : null;

    switch (type) {
      case 'error':
        title = this.translateService.instant('Error Notification');
        break;

      case 'success':
        title = this.translateService.instant('Success Notification');
        break;

      case 'alert':
        title = this.translateService.instant('Warning Notification');
        break;

      default:
        title = this.translateService.instant('Info Notification');
        break;
    }

    this.notificationService[type](title, message, this.configService.get('notifications').options);
  }

  /**
   * Translates lookup names by looking into lookup code
   *
   * @param data
   */
  public translateLookupData(data: Array<any>): Array<any> {
    // Translate quantity stock adjustment reasons
    return data.map(lookup => {
      lookup.name = lookup.code
        ? this.translateService.instant('Lookups')[lookup.code]
        : lookup.name;
      return lookup;
    });
  }
}

