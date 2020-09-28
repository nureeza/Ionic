import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmarthomePage } from './smarthome.page';

const routes: Routes = [
  {
    path: '',
    component: SmarthomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmarthomePageRoutingModule {}
