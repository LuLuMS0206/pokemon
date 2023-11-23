import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "app-description",
  templateUrl: "./description.component.html",
  styleUrls: ["./description.component.scss"]
})

export class DescriptionComponent implements OnInit {

  atras: string = '';
  pokemonData: any;


  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) {


  }

  ngOnInit() {
    this.pokemonData = this.pokemonService.getPokemonData();
  }

  obtenerAtras(atras: any) {
    this.router.navigate(['/'])
    console.log(atras)
  }
}
