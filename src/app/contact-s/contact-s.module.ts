import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactSPageRoutingModule } from './contact-s-routing.module';

import { ContactSPage } from './contact-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactSPageRoutingModule
  ],
  declarations: [ContactSPage]
})
export class ContactSPageModule {}
