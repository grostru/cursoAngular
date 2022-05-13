import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interfaces";

@Injectable()
export class DbzService{

    private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
    ]

    get personajes(){
      // Si hacemos esto, estamos enviando personajes por referencia y se podría manipular
      //return this._personajes;
      // Lo hacemos con el operador spread y crea uno nuevo rompiendo la referencia y evitando que se pueda
      // modificar el array personajes
      return [...this._personajes];
    }
    
    constructor(){}

    agregarPersonaje(p: Personaje){
      this._personajes.push(p);
    }
}