import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacthPageRoutingModule } from './contacth-routing.module';

import { ContacthPage } from './contacth.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacthPageRoutingModule
  ],
  declarations: [ContacthPage]
})
export class ContacthPageModule {}
