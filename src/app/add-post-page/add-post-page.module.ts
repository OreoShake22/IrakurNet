import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddPostPagePageRoutingModule } from './add-post-page-routing.module';

import { AddPostPagePage } from './add-post-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddPostPagePageRoutingModule
  ],
  declarations: [AddPostPagePage]
})
export class AddPostPagePageModule {}
