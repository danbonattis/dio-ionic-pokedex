import { PokeapiService } from './../apis/pokeapi/pokeapi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from "@ionic/angular";

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  pokemonId: string;
  pokemon: any = { types: [] };

  constructor(private activatedRoute: ActivatedRoute,
              private pokeapiService: PokeapiService,
              private navCtrl: NavController) { }

  /**
   *
   */
  ngOnInit() {

    this.pokemonId = this.activatedRoute.snapshot.paramMap.get('id');

    this.pokeapiService.getPokemon(this.pokemonId).then((pokemon: any) => {
      this.pokemon = pokemon;
    });

  }

  /**
   *
   */
  capturar() {

    this.navCtrl.navigateForward('pokebola', { queryParams: { pokemonId: this.pokemonId } });

  }

}
