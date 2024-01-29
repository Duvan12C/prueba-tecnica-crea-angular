import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { Pokemon } from "../interface/pokemon.interface";
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  url: string = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  getPokemon(): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(this.url).pipe(
      catchError((error) => {
        console.log(error);
        return of(undefined);
      })
    );
  }
}
