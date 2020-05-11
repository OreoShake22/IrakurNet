import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErregistratuPageRoutingModule } from './erregistratu-routing.module';

import { ErregistratuPage } from './erregistratu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErregistratuPageRoutingModule
  ],
  declarations: [ErregistratuPage]
})
export class ErregistratuPageModule {}
