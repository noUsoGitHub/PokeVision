import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string ="https://pokeapi.co/api/v2";


  constructor(private Http: HttpClient) { }

  getPokemon(name: String){
    return this.Http.get(`${this.url}/pokemon/${name}`)
  }
}
