import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],

})

export class CardComponent implements OnInit {
  pokemons: any[] = [];
pokemon: any;

  constructor(private PokemonService: PokemonService) {}

  ngOnInit(): void {
    this.PokemonService.getFirst150Pokemon().subscribe((data) => {
      this.pokemons = data.results;
    });
  }
}
