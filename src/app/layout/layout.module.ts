import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandComponent } from './brand/brand.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { Routes, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule, RouterModule
  ],
  declarations: [BrandComponent, HeaderComponent, FooterComponent, MenuComponent ], 
  exports:[
    HeaderComponent, 
    FooterComponent, 
    BrandComponent
  ]
})
export class LayoutModule { }
