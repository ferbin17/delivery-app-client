import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResturantsPageRoutingModule } from './resturants-routing.module';

import { ResturantsPage } from './resturants.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResturantsPageRoutingModule
  ],
  declarations: [ResturantsPage]
})
export class ResturantsPageModule {}
