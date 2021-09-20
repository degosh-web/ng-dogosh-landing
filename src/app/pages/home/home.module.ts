import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routes';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { CenterComponent } from 'src/app/components/center/center.component';


@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    CenterComponent
  ],
  exports: [
    HomeComponent,
    FooterComponent,
    CenterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    TranslateModule,
  ]
})
export class HomeModule { }
