import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TermsComponent } from './terms.component';
import { TermsRoutes } from './terms.routes';
import { TranslateModule } from '@ngx-translate/core';

import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [TermsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(TermsRoutes),
    TranslateModule,
    HomeModule
  ]
})
export class TermsModule { }
