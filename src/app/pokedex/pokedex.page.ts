import { PokeapiService } from './../apis/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  pokedex: any = [];
  query: string;

  /**
   *
   * @param pokeapiService
   * @param router
   */
  constructor(public pokeapiService: PokeapiService,
              public router: Router) {

    this.search();

  }

  /**
   *
   */
  search() {

    this.pokeapiService.getPokedex().then((data: any) => {
      this.pokedex = data.pokemon_entries;
    });

  }

  /**
   *
   */
  ngOnInit() {
  }

  /**
   *
   * @param pokemonId
   */
  seeMore(pokemonId: string) {

    this.router.navigate([`pokemon/${pokemonId}`]);

  }

}
