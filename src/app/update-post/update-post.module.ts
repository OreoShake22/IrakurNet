import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdatePostPageRoutingModule } from './update-post-routing.module';

import { UpdatePostPage } from './update-post.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdatePostPageRoutingModule
  ],
  declarations: [UpdatePostPage]
})
export class UpdatePostPageModule {}
