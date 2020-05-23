import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KategoriakPageRoutingModule } from './kategoriak-routing.module';

import { KategoriakPage } from './kategoriak.page';
import { PipesModule } from '../pipes/pipes.module';
@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    KategoriakPageRoutingModule
  ],
  declarations: [KategoriakPage]
})
export class KategoriakPageModule {}
