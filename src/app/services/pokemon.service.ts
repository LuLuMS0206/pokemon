import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonData: any; // Propiedad privada para almacenar los datos

  constructor() {}

  // Método para establecer los datos del Pokémon
  setPokemonData(data: any) {
    this.pokemonData = data;
    console.log('SERVICIO LLEGA', this.pokemonData)
  }

  // Método para obtener los datos del Pokémon
  getPokemonData() {
    return this.pokemonData;
  }
}