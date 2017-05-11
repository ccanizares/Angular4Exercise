import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';

const routes: Routes = [
  {
    path: '',
    component: AlbumComponent
  }, 
  {
    path: 'albums',
    component: AlbumComponent
  },
  {
    path: 'users', 
    loadChildren: 'app/user/user.module#UserModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
