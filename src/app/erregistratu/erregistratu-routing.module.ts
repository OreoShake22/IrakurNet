import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErregistratuPage } from './erregistratu.page';

const routes: Routes = [
  {
    path: '',
    component: ErregistratuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErregistratuPageRoutingModule {}
