import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactFPage } from './contact-f.page';

const routes: Routes = [
  {
    path: '',
    component: ContactFPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactFPageRoutingModule {}
