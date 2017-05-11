import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumResolve } from './album.resolve';
import { AlbumDetailComponent } from './album-detail/album-detail.component'

const routes: Routes = [
  { 
    path: 'album/:id', 
    component: AlbumDetailComponent, 
    resolve: { album: AlbumResolve }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }