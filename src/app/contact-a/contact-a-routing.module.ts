import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactAPage } from './contact-a.page';

const routes: Routes = [
  {
    path: '',
    component: ContactAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactAPageRoutingModule {}
