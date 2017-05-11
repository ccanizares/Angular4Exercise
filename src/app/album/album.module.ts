import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumService } from './album.service';
import { RouterModule, Routes } from '@angular/router';
import { AlbumRoutingModule } from './album-routing.module';
import { AlbumResolve } from './album.resolve';

@NgModule({
  imports: [
    CommonModule, AlbumRoutingModule
  ],
  declarations: [AlbumComponent, AlbumDetailComponent], 
  providers:[ AlbumService, AlbumResolve ]
})
export class AlbumModule { 

}
