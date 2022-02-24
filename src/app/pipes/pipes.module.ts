import { NgModule } from '@angular/core';
import { PokemonNamePipe } from "./pokemon-name.pipe";

@NgModule({
  declarations: [PokemonNamePipe],
  imports: [],
  exports: [PokemonNamePipe],
})

export class PipesModule {}

