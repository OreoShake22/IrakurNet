import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'add',
    loadChildren: () => import('./add-post-page/add-post-page.module').then( m => m.AddPostPagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'erregistratu',
    loadChildren: () => import('./erregistratu/erregistratu.module').then( m => m.ErregistratuPageModule)
  },
  {
    path: 'post/:id',
    loadChildren: () => import('./post-detail/post-detail.module').then( m => m.PostDetailPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
