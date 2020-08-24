import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacthPage } from './contacth.page';

const routes: Routes = [
  {
    path: '',
    component: ContacthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacthPageRoutingModule {}
