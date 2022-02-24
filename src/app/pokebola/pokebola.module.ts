import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokebolaPageRoutingModule } from './pokebola-routing.module';

import { PokebolaPage } from './pokebola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokebolaPageRoutingModule
  ],
  declarations: [PokebolaPage]
})
export class PokebolaPageModule {}
