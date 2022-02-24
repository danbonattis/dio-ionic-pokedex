import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonName'
})
export class PokemonNamePipe implements PipeTransform {

  /**
   *
   * @param value
   * @param args
   */
  transform(pokemon_entries: any, name: string) {

    if (name == null || name == undefined || name == '')
      return pokemon_entries;

    return pokemon_entries.filter((item => item.pokemon_species.name.indexOf(name) !== -1));

  }

}
