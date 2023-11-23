import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { Router } from '@angular/router';
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})

export class HomeComponent implements OnInit {
  
  pokemons:any[] =  [
    {
      nombre: "Bulbasaur",
      habilidades: ["Espesura", "Clorofila"],
      tipo: ["Planta", "Veneno"],
      imagen: "https://media.printables.com/media/prints/30233/images/300606_05d12d0c-053b-47c7-a29d-57ec89e338e8/thumbs/inside/1280x960/png/bulbasaur_original.webp",
      descripcion: "Bulbasaur es un Pokémon de tipo Planta/Veneno. Tiene las habilidades Espesura y Clorofila. Es conocido por llevar una planta en su espalda desde que nace. Esta planta crece con él y le proporciona energía."
    },
    {
      nombre: "Charmander",
      habilidades: ["Mar llamas", "Poder solar"],
      tipo: ["Fuego"],
      imagen: "https://i.pinimg.com/originals/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.png",
      descripcion: "Charmander es un Pokémon de tipo Fuego. Tiene las habilidades Mar llamas y Poder solar. Su cola arde cuando está saludable. Evoluciona en Charmeleon y luego en Charizard."
    },
    {
      nombre: "Squirtle",
      habilidades: ["Torrente", "Cura lluvia"],
      tipo: ["Agua"],
      imagen: "https://www.pngall.com/wp-content/uploads/15/Squirtle-PNG-Image-HD.png",
      descripcion: "Squirtle es un Pokémon de tipo Agua. Tiene las habilidades Torrente y Cura lluvia. Es conocido por su caparazón resistente y su capacidad para disparar agua a alta velocidad."
    },
    {
      nombre: "Pikachu",
      habilidades: ["Electricidad estática", "Pararrayos"],
      tipo: ["Eléctrico"],
      imagen: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c325.png",
      descripcion: "Pikachu es un Pokémon de tipo Eléctrico. Tiene las habilidades Electricidad estática y Pararrayos. Es la mascota más famosa de Pokémon y es conocido por su adorable apariencia y sus ataques eléctricos."
    },
    {
      nombre: "Jigglypuff",
      habilidades: ["Gran encanto", "Competitivo"],
      tipo: ["Normal", "Hada"],
      imagen: "https://www.pngmart.com/files/22/Jigglypuff-Pokemon-PNG-HD.png",
      descripcion: "Jigglypuff es un Pokémon de tipo Normal/Hada. Tiene las habilidades Gran encanto y Competitivo. Es conocido por cantar una canción de cuna que hace que las personas y otros Pokémon se duerman."
    },
    {
      nombre: "Machop",
      habilidades: ["Agallas", "Indefenso"],
      tipo: ["Lucha"],
      imagen: "https://static.pokemonpets.com/images/monsters-images-800-800/2066-Shiny-Machop.webp",
      descripcion: "Machop es un Pokémon de tipo Lucha. Tiene las habilidades Agallas e Indefenso. Es conocido por su fuerza y resistencia física, lo que lo hace un luchador formidable."
    },
    {
      nombre: "Geodude",
      habilidades: ["Cabeza Roca", "Robustez"],
      tipo: ["Roca", "Tierra"],
      imagen: "https://images.wikidexcdn.net/mwuploads/wikidex/5/53/latest/20200506030757/Geodude_de_Alola.png",
      descripcion: "Geodude es un Pokémon de tipo Roca/Tierra. Tiene las habilidades Cabeza Roca y Robustez. Su cuerpo está compuesto principalmente de roca y puede generar electricidad al frotar sus manos."
    },
    {
      nombre: "Abra",
      habilidades: ["Sincronía", "Foco Interno"],
      tipo: ["Psíquico"],
      imagen: "https://static.pokemonpets.com/images/monsters-images-800-800/63-Abra.webp",
      descripcion: "Abra es un Pokémon de tipo Psíquico. Tiene las habilidades Sincronía y Foco Interno. Abra es conocido por su capacidad para teleportarse y por ser el primer paso en su evolución hacia Kadabra y luego Alakazam."
    },
    {
      nombre: "Horsea",
      habilidades: ["Nado rápido", "Francotirador"],
      tipo: ["Agua"],
      imagen: "https://i.pinimg.com/originals/ab/cc/61/abcc61455a42acd42e58aec4a5abdf45.png",
      descripcion: "Horsea es un Pokémon de tipo Agua. Tiene las habilidades Nado rápido y Francotirador. Puede disparar agua a alta velocidad como un proyectil para defenderse."
    },
    {
      nombre: "Tentacool",
      habilidades: ["Cuerpo Puro", "Lodo Líquido"],
      tipo: ["Agua", "Veneno"],
      imagen: "https://static.pokemonpets.com/images/monsters-images-300-300/72-Tentacool.webp",
      descripcion: "Tentacool es un Pokémon de tipo Agua/Veneno. Tiene las habilidades Cuerpo Puro y Lodo Líquido. Es conocido por su capacidad para lanzar tentáculos venenosos."
    },
    {
      nombre: "Gastly",
      habilidades: ["Levitación"],
      tipo: ["Fantasma", "Veneno"],
      imagen: "https://static.pokemonpets.com/images/monsters-images-800-800/92-Gastly.webp",
      descripcion: "Gastly es un Pokémon de tipo Fantasma/Veneno. Tiene la habilidad Levitación. Se dice que Gastly es un espíritu que puede atravesar las paredes y asustar a las personas."
    },
    {
      nombre: "Eevee",
      habilidades: ["Fuga", "Adaptable"],
      tipo: ["Normal"],
      imagen: "https://assets.stickpng.com/images/580b57fcd9996e24bc43c31c.png",
      descripcion: "Eevee es un Pokémon de tipo Normal. Tiene las habilidades Fuga y Adaptable. Eevee es conocido por su capacidad de evolucionar en varias formas diferentes, dependiendo de las condiciones y factores."
    }
  ];
  
  searchTerm: string = '';
  
  constructor(private router: Router, private route: ActivatedRoute, private pokemonService: PokemonService) 
  { 
    //OPTIONAL
  }

  ngOnInit() {
    console.log(this.pokemons)
  }

  obtenerPokemon(pokemon:any){
    this.pokemonService.setPokemonData(pokemon);
    this.router.navigate(['/description'])
    console.log(pokemon)
  }

  

}
