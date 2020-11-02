import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactRPage } from './contact-r.page';

const routes: Routes = [
  {
    path: '',
    component: ContactRPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRPageRoutingModule {}
