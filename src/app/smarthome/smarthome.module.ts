import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmarthomePageRoutingModule } from './smarthome-routing.module';

import { SmarthomePage } from './smarthome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmarthomePageRoutingModule
  ],
  declarations: [SmarthomePage]
})
export class SmarthomePageModule {}
