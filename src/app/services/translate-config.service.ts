import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

//we provided all of this on the root level so there is no need to
//import it anywere else
@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(private translateService: TranslateService) {
    //
    this.translateService.use('en');
  }

  changeLanguage(type: string) {
    this.translateService.use(type);
  }
}
