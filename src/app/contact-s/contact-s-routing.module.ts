import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactSPage } from './contact-s.page';

const routes: Routes = [
  {
    path: '',
    component: ContactSPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactSPageRoutingModule {}
