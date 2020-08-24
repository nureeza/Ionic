import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactFPageRoutingModule } from './contact-f-routing.module';

import { ContactFPage } from './contact-f.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactFPageRoutingModule
  ],
  declarations: [ContactFPage]
})
export class ContactFPageModule {}
