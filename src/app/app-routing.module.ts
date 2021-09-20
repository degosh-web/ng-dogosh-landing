import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    loadChildren: () => 
      import('src/app/pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'terms',
    loadChildren: () => 
      import('src/app/pages/terms/terms.module').then((m) => m.TermsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
