import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  constructor(public http: HttpClient) {}

  /**
   * 
   * @returns 
   */
  getPokedex() {

    return new Promise((resolve, reject) => {

      this.http.get("https://pokeapi.co/api/v2/pokedex/2").subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });

  }

  /**
   * 
   * @param pokemonId 
   * @returns 
   */
  getPokemon(pokemonId: string) {

    return new Promise((resolve, reject) => {

      this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).subscribe((data: any) => {
        return resolve(data);
      }, (err: any) => {
        return reject(err);
      })

    });

  }

}
