import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactRPageRoutingModule } from './contact-r-routing.module';

import { ContactRPage } from './contact-r.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactRPageRoutingModule
  ],
  declarations: [ContactRPage]
})
export class ContactRPageModule {}
