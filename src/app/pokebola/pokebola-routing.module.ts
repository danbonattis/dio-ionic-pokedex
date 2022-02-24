import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokebolaPage } from './pokebola.page';

const routes: Routes = [
  {
    path: '',
    component: PokebolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokebolaPageRoutingModule {}
