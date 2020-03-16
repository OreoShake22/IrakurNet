import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddPostPagePage } from './add-post-page.page';

const routes: Routes = [
  {
    path: '',
    component: AddPostPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddPostPagePageRoutingModule {}
