import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../service/pokemon.service.service.spec';
import { Pokemon } from '../../interface/pokemon.interface';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css'
})
export class SearchPokemonComponent implements OnInit{

  constructor(private servicePokemon: PokemonService){}


  pokemon?: Pokemon;
  ngOnInit(): void {
    this.servicePokemon.getPokemon().subscribe({
      next: (poke: Pokemon | undefined) => {
        console.log(poke)
this.pokemon = poke;
      }
    })
      throw new Error('mehotd no aplicable')
  }

}
