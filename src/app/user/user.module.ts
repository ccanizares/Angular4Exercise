import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { RouterModule, Routes } from '@angular/router';
import {UserRoutingModule } from './user-routing.module'

@NgModule({
  imports: [
    CommonModule, UserRoutingModule
  ],
  declarations: [ UserComponent ], 
  providers:[ UserService ]
})
export class UserModule { 

}
