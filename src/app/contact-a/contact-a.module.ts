import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactAPageRoutingModule } from './contact-a-routing.module';

import { ContactAPage } from './contact-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactAPageRoutingModule
  ],
  declarations: [ContactAPage]
})
export class ContactAPageModule {}
