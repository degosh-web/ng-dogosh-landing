import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.css']
})
export class TermsComponent implements OnInit {

  constructor(private translateConfigService: TranslateConfigService) { }

  ngOnInit(): void {
  }

  changeLang(type: string) {
    this.translateConfigService.changeLanguage(type);
  }
}
